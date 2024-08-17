'use client'
import  {getJpLetters}  from '../../utils/GetData'
import React, { useEffect, useState } from 'react'

const Upload = () => {

  const [formValue,setFormValue] = useState({
    letterCatagory:"",
    drawingImage:"",
    japanesLetter:"",
    serialNumber:"",
    englishPronunciation:"",
    japanesAudio:""
  })



  
  const handleChange = (event)=>{
   setFormValue({
    ...formValue,[event.target.name]:event.target.value
    
   }) 
  //  console.log("=>>>>>>>>>", event.target.value)
  }

  const handleSubmit = () => {
    console.log(formValue)
  }
  


  ///getting data
  const [jpLettersAll, setJpLettersAll] = useState()

  const getjpDatafunc = async() =>{
    
    const jpData =  await getJpLetters();
    console.log("this :",jpData.jpLetterHiraganas)
    const jpLettersAllData = await jpData.jpLetterHiraganas;
    setJpLettersAll(jpLettersAllData)
  }
  
  useEffect(() => {
    getjpDatafunc()
  }, [])
  

  // console.log('=>>>>>>>>>>>>>',jpLettersAll);

  
  return (
    <div >
        <div className='flex flex-col items-center justify-center
      
      '>
        <h1 className='font-bold text-6xl my-2'>Input Here</h1>
        <form action="" className='border-2 border-cyan-300 
        flex  items-center justify-center mt-5
        rounded-xl p-5' >

        <div className=''>
          <h1 className='font-semibold'>Letter Catagory</h1>
          
                {/* <label for="cars">Choose a car:</label> */}
        <select className='border-2  border-cyan-400 rounded-md mb-5' name="letterCatagory"
          onChange={handleChange}
        >
          <option  defaultChecked value='' >Select One</option>
          <option>Hiragana</option>
          <option>Katakana</option>
          <option>Kanji</option>
          
        </select>


          <h1 className='font-semibold'>Drawing Image:</h1>
          <input type="file" name='drawingImage'  onChange={handleChange} className='mb-5' />
          
          <h1 className='font-semibold'>Japanes Letter:</h1>
          <input className='border-2 border-cyan-400 rounded-md mb-5'  onChange={handleChange} name='japanesLetter' type="text" />
          

          <h1 className='font-semibold'>Serial Number:</h1>
          <input className='border-2 border-cyan-400 rounded-md mb-5'  onChange={handleChange} name='serialNumber' type="text" />
          


          <h1 className='font-semibold'>English Pronunciation:</h1>
          <input className='border-2 border-cyan-400 rounded-md mb-5'  onChange={handleChange} name='englishPronunciation' type="text" />
          
          <h1 className='font-semibold'>Japanes Audio:</h1>
          <input type="file" name='japanesAudio'  onChange={handleChange} className='mb-5'/>


          <div className='flex justify-center'>
            <button className='border border-blue-500 p-1 m-1 text-white  bg-blue-700
            hover:bg-blue-500 duration-300 px-4 py-2 text-lg
            rounded-lg'
            type="button"

            onClick={handleSubmit}

            >Submit</button>
          </div>

          {/* ✅ */}

        </div>
      </form>
        </div>
kjhjhh
        <div>
          
          kkkkk
          {jpLettersAll&&jpLettersAll.map((items) =>(
            <div>
             <ol>
              <li>{items.jpSingleLetterHiragana}</li>
            </ol>
            </div>
          ))}
        </div>
    </div>
    
    )
  }
  
  
export default Upload