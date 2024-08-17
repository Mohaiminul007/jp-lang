import React, { createRef, useEffect } from 'react'
import { useRef, useState } from "react";
// import {fs} from "mz/fs"
// const compareImages = require("resemblejs/compareImages");
// const fs = require("mz/fs");
// ( https://www.npmjs.com/package/react-sketch-canvas ) is used
import { ReactSketchCanvas } from 'react-sketch-canvas'

import { IconArrowBackUp, IconArrowForwardUp, IconEraser, IconPencil, IconRestore } from "@tabler/icons-react";
import axios from 'axios';
import AccuracyPage from './AccuracyPage';

import Image from 'next/image';

import toast, { Toaster } from 'react-hot-toast';
// import compareImages from 'resemblejs/compareImages';
// import Resemble from 'resemblejs';
// import resemble from 'resemblejs';



const iconButton = " p-1 text-sm rounded-lg border border-2 border-blue-600 cursor-pointer dark:border-blue-600 dark:text-blue-200 ";
const defaultIconButton = " bg-transparent hover:bg-blue-100 dark:hover:bg-blue-800 ";




const Drawing = ({ item, key }) => {
  // console.log(key);

  const canvasRef = useRef(null);




  const [initialBlankCanvas, setInitialBlankCanvas] = useState(null);

  const [strokeColor, setStrokeColor] = useState("#375fd9");

  const [dataForAccuPage, setdataForAccuPage] = useState()

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Capture the initial blank canvas data
    const captureBlankCanvas = async () => {
      if (canvasRef.current) {
        const blankCanvas = await canvasRef.current.exportImage('png');
        setInitialBlankCanvas(blankCanvas);
      }
    };
    captureBlankCanvas();
  }, []);

  const isCanvasBlank = async () => {
    const currentCanvas = await canvasRef.current.exportImage('png');
    return currentCanvas === initialBlankCanvas;
  };


  const handleCheckAccuracy = async () => {

    if (canvasRef.current) {
      if (await isCanvasBlank()) {

        toast('Canvas is blank!',
          {
            icon: '❌',
            style: {
              borderRadius: '10px',
              background: '#fffbf2',
              color: '#14315d',
            },
          }
        );
        // alert("canvas is blank")
        return 
      }

      setIsModalOpen(true)
      

      const imageToExportBase64 = await canvasRef.current.exportImage("png");


      const dataToBackend = {
        item,
        imageToExportBase64
      }

      // console.log(item);

      //test api
      try {
        const response = await axios.get('/api/hello');
        console.log("success on GET got it",response.data);
        
      } catch (error) {
        console.log("error on GET request");
        
      }

      // sending to backend
      try {
        // const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/analyze`, { data: dataToBackend }, {
        const response = await axios.post('/api/analyze', { data: dataToBackend }, {
          headers: {
            'Content-Type': 'application/json'
          },
        })

        // console.log("response ==>>> ",response.data.dataFromBackend.diffData.diffImageInBase64); 
        //no matter what we name the variable in the back it's always response.data
        console.log("response ==>>> ", response.data.dataFromBackend);
        // console.log(response.data.dataFromBackend.diffData.diffImageInbase64)
        // console.log("this diff image",diffImage);
        
        setdataForAccuPage(response.data.dataFromBackend)   
     
     } catch (error) {
        console.error("Error occured", error)
      }
    }
  }


  const handlePencilClick = () => {
    // setEraser(false);
    if (canvasRef.current) {
      canvasRef.current.eraseMode(false);
    }
  };

  const handleResetClick = () => {
    if (canvasRef.current) {
      canvasRef.current.clearCanvas();
    }
  };

 const onColorChange = (event) => {
    setStrokeColor(event.target.value);
  };

  return (
    <div className='mt-0'>


      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex gap-x-1 md:gap-x-2 items-center justify-center ">
        <div className='border p-[2px] rounded-full'>
        <div className="w-9 h-9 rounded-full  overflow-hidden">
          <input
            type="color"
            value={strokeColor}
            onChange={onColorChange}
            className='w-[150%] h-[150%] bg-transparent border-none cursor-pointer appearance-none  -translate-x-1/4 -translate-y-1/4 border-r-2 border-white'
          />
</div>

        </div>
        <hr />

        <button
          title="Pencil"
          className={`${iconButton} bg-blue-600 text-blue-50 hover:bg-blue-600 hover:text-blue-50`}
          type="button"
          aria-label="pencil"
          onClick={handlePencilClick}

        >
          <IconPencil size='18' />
        </button>

        {/* undo  button */}
        <button
          title=""
          className={`${iconButton} ${defaultIconButton}`}
          type="button"
          aria-label="clear"
          onClick={() => {
            if (canvasRef.current) {
              canvasRef.current.undo()
            }
          }}
        >

          <IconArrowBackUp size='20' />
        </button>

        {/* redo  button */}
        <button
          title=""
          className={`${iconButton} ${defaultIconButton}`}
          type="button"
          aria-label="clear"
          onClick={() => {
            if (canvasRef.current) {
              canvasRef.current.redo()
            }
          }}
        >
          {/* <IconArrowForwardUp stroke={2} /> */}
          <IconArrowForwardUp size='20' />
        </button>

        {/* reset button */}
        <button
          title=""
          className={`${iconButton} ${defaultIconButton}`}
          type="button"
          aria-label="clear"
          onClick={handleResetClick}
        >
          {/* <IconRestore size='18'/> */}
          reset
        </button>

        <button
          title="Click to Check your accuracy"
          className={`${iconButton} ${defaultIconButton} text-xs p-[7px]`}
          type="button"
          aria-label="clear"
          onClick={handleCheckAccuracy}
        //this will open a new window
        >
          Check Accuracy
        </button>

          {isModalOpen && (
                <AccuracyPage 
                onClose={() => setIsModalOpen(false)} 
                dataForAccuPage={dataForAccuPage} 
                />
            )}

      </div>

      <div className=' rounded-md mt-4 md:mt-2   md:flex md:justify-center'>
        <ReactSketchCanvas
          // style={styles}
          width="320px"
          height="250px"
          className=''
          strokeWidth={4}
          // canvasRef={canvasRef}  //this is where i made a mistake 'ref' was a specific function
          ref={canvasRef}
          strokeColor={strokeColor}
          canvasColor='black'
          // key={renderKey}
          id={`canvas-${item.serialNo}`}
        // id='2'

        />
        {/* {console.log(item.serialNo)} */}
      </div>
    </div>
  )
}

export default Drawing