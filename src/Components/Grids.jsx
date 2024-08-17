import React from 'react'

const Grids = () => {
    return (

        <div className='my-16 2xl:mx-96'>
            <div className='lg:grid lg:grid-cols-3   mx-10 '>

                <div className='m-1  
                        shadow-sm md:shadow-2xl shadow-cyan-500
                        p-2 lg:rounded-l-3xl lg:col-span-1 
                        border-2  rounded-t-3xl  lg:rounded-r-none lg:relative      border-cyan-200 '  >
                            
                    <img src="assets/img/draw.png" className='sm:w-52 md:w-72 lg:w-10/12  mx-auto rounded-xl' />
                   
                    <div className='  bottom-[75px] lg:absolute  lg:left-0  lg:right-0 '>
                        <ul className='list-disc ml-8 m-5 text-md md:text-2xl'>
                            <li className='mb-4'>Practice your writing</li>
                            <li>check Accuracy</li>
                        </ul>

                        
                    </div>
                </div>

                <div className='lg:grid lg:col-span-2'>

                    <div className='m-1 lg:col-span-2 
                    shadow-sm shadow-cyan-500 md:shadow-2xl 
                    md:h-60 sm: lg:rounded-tr-3xl  border-2  border-cyan-200 p-2 md:flex'>
                        <img src="assets/img/accuracy.jpg" className='sm:w-52 md:w-48  flex mx-auto rounded-xl' />
                        <div className='ml-5 mt-4 md:ml-10 '>
                        <h3 className='text-xl md:text-3xl mb-3'>Get Results Like This :</h3>
                        <ul className='list-disc ml-7 text-md md:text-2xl'>
                            <li className='mb-4'>Practice more to increase your accuracy</li>
                            <li>Lesiten Audio & Practice Letter Pronounciation</li>
                        </ul>
                        
                        </div>
                    </div>

                    <div
                        className='m-1  overflow-hidden
                        shadow-sm md:shadow-2xl shadow-cyan-500 
                        border-2 border-cyan-200'>
                            <img src="assets/img/heragana 1.gif" className='invert md:w-80 mx-auto md:my-10' />
                        
                    </div>
                    <div className='m-1 bg-[#112442]
                     text-red-600 md:shadow-2xl overflow-hidden
                    shadow-sm shadow-cyan-500  rounded-b-3xl 
                    lg:rounded-br-3xl lg:rounded-bl-none border-2 border-cyan-200 '>
                        <img src="assets/img/audo.jpg" className='mx-auto my-auto'/>
                    </div>
                </div>

            </div>

        </div>


    )
}

export default Grids