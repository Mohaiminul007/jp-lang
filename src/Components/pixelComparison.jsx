import Image from 'next/image'
import React from 'react'

export const PixelComparison = ({diffImage,accuracy}) => {
  return (
    <div>
        <div className="py-4">
                                    <h1 className='text-xl font-bold mb-2'>Here's your Difference:</h1>
                                    <Image
                                        src={diffImage}
                                        width={400}
                                        height={40}
                                        alt='Difference Image'
                                        className='border-2 border-blue-400 rounded-md'
                                    />

                                    {accuracy && (
                                        <div>
                                        <p className='font-bold mt-5 text-xl md:text-2xl lg:text-3xl  '>

                                           <span className='mr-2 md:m-4'>
                                           Accuracy :
                                            </span>                                            
                                            <span className='text-green-500'>
                                                {
                                                    parseInt(accuracy)  < 0.9 ? 0 :
                                                    parseInt(accuracy)   < 1.3 ? parseInt(accuracy) * 10 :
                                                        parseInt(accuracy)   < 2 ? parseInt(accuracy) * 10 :
                                                            parseInt(accuracy)   < 3 ? parseInt(accuracy) * 9 :
                                                                parseInt(accuracy)   < 5 ? parseInt(accuracy) * 8 :
                                                                    parseInt(accuracy)  < 7 ? parseInt(accuracy) * 8 :
                                                                        parseInt(accuracy)  < 9 ? parseInt(accuracy) * 6 :
                                                                            parseInt(accuracy)  < 12 ? parseInt(accuracy) * 5 :
                                                                                parseInt(accuracy)  < 15 ? parseInt(accuracy) * 4 :
                                                                                    parseInt(accuracy)  < 20 ? parseInt(accuracy) * 4 :
                                                                                        parseInt(accuracy)  < 50 ? parseInt(accuracy) * 1.5 :
                                                                                            parseInt(accuracy)  < 76 ? parseInt(accuracy) * 1 :
                                                                                                parseInt(accuracy)

                                                } % </span>

                                        </p>

                                        <p className='my-4  md:text-lg'>
                                            <sup>***</sup> We use <span className='font-bold'> pixel-to-pixel </span>
                                            comparison for accuracy.
                                        </p>

                                        </div>

                                    )}
                                </div>
    </div>
  )
}
