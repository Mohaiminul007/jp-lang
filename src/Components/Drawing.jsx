import React, { useEffect } from 'react'
import {  useRef, useState } from "react";
import { ReactSketchCanvas } from 'react-sketch-canvas'
// ( https://www.npmjs.com/package/react-sketch-canvas ) is used

import { IconEraser, IconPencil, IconRestore } from "@tabler/icons-react";


const iconButton =  " p-1 text-sm rounded-lg border border-2 border-blue-600 cursor-pointer dark:border-blue-600 dark:text-blue-200 ";
const defaultIconButton =  " bg-transparent hover:bg-blue-100 dark:hover:bg-blue-800 ";
                           

const Drawing = () => {
    const ref = useRef(null);
    const [strokeColor, setStrokeColor] = useState("#375fd9");
    const [eraser, setEraser] = useState(false);

    const handleEraserClick = () => {
      setEraser(true);
      if (ref.current) {
        ref.current.eraseMode(true);
      }
    };
  
    const handlePencilClick = () => {
      setEraser(false);
      if (ref.current) {
        ref.current.eraseMode(false);
      }
    };
  
    const handleResetClick = () => {
      if (ref.current) {
        ref.current.resetCanvas();
      }
    };
  
    const pencilSelected = !eraser
      ? " bg-blue-600 text-blue-50 hover:bg-blue-600 hover:text-blue-50 "
      : defaultIconButton;
  
    const eraserSelected = eraser
      ? " bg-blue-600 text-blue-50 hover:bg-blue-700 hover:text-blue-50 "
      : defaultIconButton;
  
    const onColorChange = (event) => {
      setStrokeColor(event.target.value);
    };


  return (
    <div className=''> 
          <div className="flex gap-x-2 items-center justify-center ">
        <p className='pr-4'>Draw here : </p>
        <div className="w-9 h-9 rounded-full overflow-hidden">
          <input
            type="color"
            value={strokeColor}
            onChange={onColorChange}
            className='w-[200%] h-[200%] bg-transparent border-none cursor-pointer appearance-none  -translate-x-1/4 -translate-y-1/4 border-r-2 border-white'
          />
          
         
        </div>
        <hr />
        <button
          title="Pencil"
          className={`${iconButton} ${pencilSelected}`}
          type="button"
          aria-label="pencil"
          onClick={handlePencilClick}
          
        >
          <IconPencil size='18'/>
        </button>


        <button
          title="Eraser"
          className={`${iconButton} ${eraserSelected}`}
          type="button"
          aria-label="eraser"
          onClick={handleEraserClick}
        >
          <IconEraser  size='18'/>
        </button>
        {/* <hr /> */}
        <button
          title="Reset"
          className={`${iconButton} ${defaultIconButton}`}
          type="button"
          aria-label="clear"
          onClick={handleResetClick}
        >
         {/* <IconRestore size='18'/> */}
          reset
        </button>
      </div>


        <div className='border-[1px] border-white rounded-md m-2'>

        <ReactSketchCanvas
        // style={styles}
        width="300px"
        height="200px"
        strokeWidth={4}
        ref={ref}
        strokeColor={strokeColor}
        canvasColor='black'
        />
        </div>
    </div>
  )
}

export default Drawing