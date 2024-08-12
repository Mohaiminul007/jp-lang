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
                                        <p className='font-bold mt-5 text-3xl w-5/6 '>
                                            Accuracy : <span className='text-green-500 px-2'>
                                                {
                                                    parseFloat(accuracy).toFixed(2)  < 0.5 ? 0 :
                                                    parseFloat(accuracy).toFixed(2)   < 0.9 ? parseFloat(accuracy).toFixed(2) * 10 :
                                                        parseFloat(accuracy).toFixed(2)   < 2 ? parseFloat(accuracy).toFixed(2) * 10 :
                                                            parseFloat(accuracy).toFixed(2)   < 3 ? parseFloat(accuracy).toFixed(2) * 9 :
                                                                parseFloat(accuracy).toFixed(2)   < 5 ? parseFloat(accuracy).toFixed(2) * 8 :
                                                                    parseFloat(accuracy).toFixed(2)  < 7 ? parseFloat(accuracy).toFixed(2) * 8 :
                                                                        parseFloat(accuracy).toFixed(2)  < 9 ? parseFloat(accuracy).toFixed(2) * 6 :
                                                                            parseFloat(accuracy).toFixed(2)  < 12 ? parseFloat(accuracy).toFixed(2) * 5 :
                                                                                parseFloat(accuracy).toFixed(2)  < 15 ? parseFloat(accuracy).toFixed(2) * 4 :
                                                                                    parseFloat(accuracy).toFixed(2)  < 20 ? parseFloat(accuracy).toFixed(2) * 4 :
                                                                                        parseFloat(accuracy).toFixed(2)  < 50 ? parseFloat(accuracy).toFixed(2) * 1.5 :
                                                                                            parseFloat(accuracy).toFixed(2)  < 76 ? parseFloat(accuracy).toFixed(2) * 1 :
                                                                                                parseFloat(accuracy).toFixed(2)

                                                } % </span>

                                        </p>

                                        <p className='my-4 text-lg'>
                                            <sup>***</sup> We use <span className='font-bold'> pixel-to-pixel </span>
                                            comparison for accuracy.
                                        </p>

                                        </div>

                                    )}
                                </div>
    </div>
  )
}
