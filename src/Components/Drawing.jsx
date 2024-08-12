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
  // const [eraser, setEraser] = useState(false);


  // const [feedback, setFeedback] = useState()
  


  const [dataForAccuPage, setdataForAccuPage] = useState()


  // for MUI
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
    // open the modal

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
 //for my modal
      setIsModalOpen(true)
      




      const imageToExportBase64 = await canvasRef.current.exportImage("png");
      const svgToExportBase64 = await canvasRef.current.exportSvg();

      // console.log("iiimage >>", imageToExportBase64);

      // setDrawingImage(imageToExportBase64)

      const dataToBackend = {
        item,
        imageToExportBase64
      }

      // console.log(item);

      // sending to backend
      try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/analyze`, { data: dataToBackend }, {
          headers: {
            'Content-Type': 'application/json'
          },
        })

        // console.log("response ==>>> ",response.data); //no matter what we name the variable in the back it's always response.data
        // console.log("response ==>>> ", response.data.dataFromBackend);

        setdataForAccuPage(response.data.dataFromBackend)
        
//open popup
      // document.getElementById('my_modal_4').showModal()

     

      } catch (error) {
        console.error("Error occured", error)
      }


    }
  }

  // const handleEraserClick = () => {
  //   setEraser(true);
  //   if (canvasRef.current) {
  //     canvasRef.current.eraseMode(true);
  //   }
  // };

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



  // const pencilSelected = !eraser
  //   ? " bg-blue-600 text-blue-50 hover:bg-blue-600 hover:text-blue-50 "
  //   : defaultIconButton;

  // const eraserSelected = eraser
  //   ? " bg-blue-600 text-blue-50 hover:bg-blue-700 hover:text-blue-50 "
  //   : defaultIconButton;

  const onColorChange = (event) => {
    setStrokeColor(event.target.value);
  };


  return (
    <div className='mt-0'>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex gap-x-1 md:gap-x-2 items-center justify-center ">
        {/* <p className='pr-2'>Draw here: </p> */}
        <div className='border p-[2px] rounded-full'>
        <div className="w-9 h-9 rounded-full  overflow-hidden">
          <input
            type="color"
            value={strokeColor}
            onChange={onColorChange}
            className='w-[150%] h-[150%] bg-transparent border-none cursor-pointer appearance-none  -translate-x-1/4 -translate-y-1/4 border-r-2 border-white'
            // className=''
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
          {/* <IconRestore size='18'/> */}
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
          className={`${iconButton} ${defaultIconButton}`}
          type="button"
          aria-label="clear"
          onClick={handleCheckAccuracy}
        //this will open a new window
        // onClick={() => document.getElementById('my_modal_4').showModal()}
        >
          Check Accuracy
        </button>

          {/* <AccuMUI 
           dataForAccuPage={dataForAccuPage} 
           isModalOpen={isModalOpen} 
          //  closeModal={closeModal} 
          /> */}

          {isModalOpen && (
                // <Modal onClose={closeModal} />
                <AccuracyPage 
                onClose={() => setIsModalOpen(false)} 
                dataForAccuPage={dataForAccuPage} 
                />
            )}

        {/* accuracy page */}
        


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