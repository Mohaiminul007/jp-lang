import React from 'react'
import Drawing from './Drawing'

const DemoCard = () => {
  return (
    <div>
    <div className=" flex flex-col items-center 
  md:grid md:grid-cols-3 gap-y-4 
  border-2 border-blue-400 
  m-2 p-2 rounded-md pl-5 ">
      <div>
        <span className='text-xl font-bold border-r-[2px] border-b-[2px]  border-blue-400  p-2'>1</span>
        <div className='flex items-center justify-center m-5 md:m-0'>
          <img className="invert rounded-3xl 
      ring-4 
      ring-cyan-400"
            src='.\assets\img\あ 1 (a).gif'
            alt="img-name"
            // key={item.imageHiragana.id}
            width="50%" />
        </div>

      </div>

      <div className=' flex justify-center items-center  border-cyan-300 rounded-md w-full h-full mb-5 md:m-0'>
        <Drawing />

      </div>

      {/* <div className=' flex justify-center items-center border-1 border-cyan-300 rounded-md w-full h-full'>
      hi

    </div> */}



      <div className="text-center flex flex-col gap-y-4 items-center justify-center mt-10">
        <h3 className="text-3xl font-semibold">
          {/* <span className="text-[7rem] ">{item.jpSingleLetterHiragana}</span>{item.englishPronounciationHiragana} */}
        </h3>
        <audio controls controlsList="nodownload noplaybackrate" className='h-7 w-[200px] mt-5'>
          <source src='.\assets\Hiragana\あ(a)audio.mp3'
            // key={item.audioHiragana.id}

          />
        </audio>
      </div>
    </div>

  </div>
  )
}

export default DemoCard