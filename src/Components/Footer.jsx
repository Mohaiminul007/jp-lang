import React from 'react'
import { IconBrandGithubFilled } from '@tabler/icons-react';
import { IconBrandLinkedin } from '@tabler/icons-react';
import Link from 'next/link';
const Footer = () => {
  return (
    <footer className=''>
      <div className=' bg-[#0b1122] border-t-2 border-white/10 md:px-12  max-w-full grid px-5  grid-cols-2 md:grid-cols-4'>

        <div className='md:p-4 mt-5'>
          <p
            className='mb-1 
              underline decoration-solid  
              decoration-sky-500 rounded-md text-xl '>
            Jp-Lang
          </p>
            <p className='mb-1 
              underline decoration-solid  
              hover:decoration-sky-500 duration-200 rounded-md text-md '>
              Explore
            </p>
          <div className='border-l-2 border-white/10'>



            <p>
              <Link href='/' className='footText'>
                Home
              </Link>
            </p>


            <p>
              <Link href='/heragana' className='footText'>
                Heragana
              </Link>
            </p>




            {/* <p >
              <Link href='/contact' className='footText'>
                Contact us!
              </Link>

            </p> */}
          </div>
        </div>

        {/* <div className='md:p-4 mt-5'>

          <p className='mb-1 
            underline decoration-solid  
          decoration-sky-500 rounded-md text-xl '>Others 
          </p>

          <div className=' border-l-2 border-white/10'>

          <p >
              <Link href='/faq' className='footText'>
                FAQ
              </Link>

            </p>


            <p>
              <Link href='' className='footText'>
                About Us
              </Link>
            </p>


            <p >
              <Link href='/contact' className='footText'>
                Contact
              </Link>

            </p>

            
          </div>

        </div> */}

        <div className='md:p-4 mt-5'>

          <p className='mb-1 
            underline decoration-solid  
          decoration-sky-500 rounded-md text-xl '>Mohaiminul Islam
          </p>

          <div className=' border-l-2 border-white/10'>


            <p className='flex  items-center '>
              <Link className=' hover:underline flex  items-center' href='https://github.com/mohaiminul007'>
              <IconBrandGithubFilled
                className='bg-white text-center mx-3 my-2 text-black 
                  p-[1px] rounded-full'
                size={20}
                stroke={2} 
              />

                GitHub
              </Link>
            </p>

          </div>

        </div>

        <div className='md:p-4 mt-5'>

          <p className='mb-1 
            underline decoration-solid  
          decoration-sky-500 rounded-md text-xl '>Maksudul Islam
          </p>

          <div className=' border-l-2 border-white/10'>


            <p className=' '>
              

              <Link href='https://github.com/mibijoy007'
               className='hover:underline flex  items-center'
              >
                <IconBrandGithubFilled
                className='bg-white text-center mx-3 my-2 text-black 
                  p-[1px] rounded-full'
                size={20}
                stroke={2} 
              />
                GitHub
              </Link>
            </p>
            <p className=''>
            <Link 
              className='hover:underline flex  items-center '
              href='https://www.linkedin.com/in/mibijoy'>
              <IconBrandLinkedin 
                className=' text-center mr-2   ml-3 my-2 text-white 
                  '
                size={25}
                stroke={2} 
              />

            
                Linkedin
              </Link>
            </p>

          </div>

        </div>

      </div>
       

      <div className='bg-[#090f1d] flex pl-1 md:pl-4 pt-1 md:items-center   justify-left min-h-24 border-t-2 border-white/5'>
        <p className='text-base md:text-xl  font-sans'>
          Made by : 
          <span className='bg-gradient-to-r
            from-[#0072ff] via-[#0667d0]
            to-[#00ffe9] inline-block text-transparent
              bg-clip-text pl-2'> Mohaiminul 
          </span> 

          <span className='text-red-600'> & </span> 

          <span className='bg-gradient-to-r
            from-[#00ffe9] via-[#0667d0]
            to-[#0072ff] inline-block text-transparent
            bg-clip-text'>Maksudul
            </span> 
        </p>
        

        

      </div>
    </footer>
  )
}

export default Footer