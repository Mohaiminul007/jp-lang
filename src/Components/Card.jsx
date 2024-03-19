"use client"
import { getJpLetters } from '@/Utils/GetData';
import React, { useEffect, useState } from 'react'

function Card() {
  const [jpLettersAll, setJpLettersAll] = useState()

  const getjpDatafunc = async() =>{
    
    const jpData =  await getJpLetters();
    // console.log("this :",jpData.jpLetterHiraganas)
    const jpLettersAllData = await jpData.jpLetterHiraganas;
    setJpLettersAll(jpLettersAllData)
  }
  getjpDatafunc()
  
  // useEffect(() => {
  // }, [jpLettersAll])
  

  // console.log('=>>>>>>>>>>>>>',jpLettersAll);

// const sum(a,b){
//   return a+b
// }
// const result = sum(2,4)


  return (
    <div className='text-white bg-gray-900'>
        <div>
        <h2 className="text-5xl mb-3 text-center">Hiragana</h2>
        <hr className="border-2 border-blue-400"/>
        {
          jpLettersAll && jpLettersAll.map((item,index) => (
            <div>
            <div className=" flex flex-col items-center 
            md:grid md:grid-cols-3 gap-y-4 
            border-2 border-blue-400 
            m-2 p-2 rounded-md pl-5 ">
                <div className='flex items-center justify-center'>
                <img className="invert rounded-3xl 
                ring-4 
                ring-cyan-400" 
                src={item.imageHiragana.url}
                alt="img-name" 
                key={item.imageHiragana.id}
                width="50%"/>
                </div>
             
              
              <div className=' flex justify-center items-center border-2 border-cyan-300 rounded-md w-full h-full'>
                hi
              </div>
          
                
                  <div className="text-center flex flex-col gap-y-4 items-center justify-center">
                    <h3 className="text-5xl font-semibold">
                        <span className="text-[10rem]">{item.jpSingleLetterHiragana}</span>{item.englishPronounciationHiragana}
                    </h3>
                    <audio controls controlsList="nodownload noplaybackrate" >
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