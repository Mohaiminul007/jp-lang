"use client"
import { getJpLetters } from '../utils/GetData';

import React, { useEffect, useState } from 'react'
import Drawing from './Drawing';
// import DemoCard from './DemoCard';

// import { dataFromLocal } from '@/utils/data';

function Card() {
  const [jpLettersAll, setJpLettersAll] = useState()

  
////this is only for getting data form the backend.
  const getjpDatafunc = async () => {
    const jpData = await getJpLetters();
    // console.log("this :",jpData.jpLetterHiraganas)
    const jpLettersAllData = await jpData.jpLetterHiraganas;
    setJpLettersAll(jpLettersAllData)
  }
  useEffect(() => {
    getjpDatafunc()
  }, [])

  // console.log('=>>>>>>>>>>>>>', jpLettersAll);



  // // for now we'll just get data form local
  // useEffect(() => {
   
  //   setJpLettersAll(dataFromLocal);
  // }, [])
  
  // // console.log('=>>>>>now>>>>>>>>', jpLettersAll);


  return (
    <div className='text-white bg-transparent'>
      <div>
        

       {/* <DemoCard/> */}

       

       {/* <DemoCard/> */}

        {

          jpLettersAll && jpLettersAll.slice(0,20).map((item, index) => (
            <div className=''>
              
              <div className=" flex flex-col items-center 
            md:grid md:grid-cols-3 gap-y-4 
            border-2 border-blue-400 
            m-2 p-2 rounded-md md:pl-5 bg-[#112442]">
                <div>
                  <span className='text-xl font-bold border-r-[2px] border-b-[2px]  border-blue-400  p-2'> {item.serialNo} </span>
                  <div className='flex items-center justify-center m-5 md:m-0'>
                    <img className="invert rounded-3xl 
                ring-4 
                ring-cyan-400"
                      src={item.imageHiragana.url}
                      alt="img-name"
                      key={item.imageHiragana.id}
                      width="50%" />
                  </div>

                </div>

                <div className=' flex justify-center items-center  border-cyan-300 rounded-md w-full h-full mb-5 md:m-0 '>
                 {/* {console.log(item) } */}
                 
                  <Drawing 
                 item={item}
                 key={item.serialNo}
                  />

            

                 {/* { console.log(item.serialNo)} */}
                  
                </div>

                



                <div className="mb-3 text-center flex flex-col gap-y-4 items-center justify-center mt-10">
                  <h3 className="text-3xl font-semibold">
                    <span className="text-[7rem] ">{item.jpSingleLetterHiragana}</span>{item.englishPronounciationHiragana}
                  </h3>
                  <audio controls controlsList="nodownload noplaybackrate" className='h-7 w-[200px] mt-5'>
                    <source src={item.audioHiragana.url}
                      key={item.audioHiragana.id}

                    />
                  </audio>
                </div>
              </div>

            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Card



{/* <div className=' flex justify-center items-center border-1 border-cyan-300 rounded-md w-full h-full'>
                hi

              </div> */}



  {/* {

          jpLettersAll && jpLettersAll.map((item, index) => (
            <div>
              <div className=" flex flex-col items-center 
            md:grid md:grid-cols-3 gap-y-4 
            border-2 border-blue-400 
            m-2 p-2 rounded-md pl-5 ">
                <div>
                  <span className='text-xl font-bold border-r-[2px] border-b-[2px]  border-blue-400  p-2'>{item.serialNo}</span>
                  <div className='flex items-center justify-center m-5 md:m-0'>
                    <img className="invert rounded-3xl 
                ring-4 
                ring-cyan-400"
                      src={item.imageHiragana.url}
                      alt="img-name"
                      key={item.imageHiragana.id}
                      width="50%" />
                  </div>

                </div>

                <div className=' flex justify-center items-center  border-cyan-300 rounded-md w-full h-full mb-5 md:m-0'>
                  <Drawing />

                </div>

                



                <div className="text-center flex flex-col gap-y-4 items-center justify-center mt-10">
                  <h3 className="text-3xl font-semibold">
                    <span className="text-[7rem] ">{item.jpSingleLetterHiragana}</span>{item.englishPronounciationHiragana}
                  </h3>
                  <audio controls controlsList="nodownload noplaybackrate" className='h-7 w-[200px] mt-5'>
                    <source src={item.audioHiragana.url}
                      key={item.audioHiragana.id}

                    />
                  </audio>
                </div>
              </div>

            </div>
          ))
        } */}