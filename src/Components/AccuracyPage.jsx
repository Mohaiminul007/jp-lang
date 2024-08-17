import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { RxCross1 } from "react-icons/rx";
import { PacmanLoader } from 'react-spinners';
import { PixelComparison } from './pixelComparison';


const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "",
};

const AccuracyPage = ({ dataForAccuPage, onClose }) => {

    // console.log("DAta ==>> ",dataForAccuPage);

    let [loading, setLoading] = useState(true);



    const [accuracy, setAccuracy] = useState()
    const [diffImage, setDiffImage] = useState()
    const [drawingImage, setDrawingImage] = useState()
    const [idealImage, setIdealImage] = useState()
    // const [isModalOpen, setIsModalOpen] = useState(false)


    useEffect(() => {
        if (dataForAccuPage) {
            // if(!accuracy){setLoading(true)}
            setLoading(true)
            setIdealImage(dataForAccuPage.idealInBase64)
            setDrawingImage(dataForAccuPage.drawingBase64)
            // setDiffImage(dataForAccuPage.diffData.diffImageInbase64) //it's just B and b in base!!
            setDiffImage(dataForAccuPage.diffData.diffImageInBase64)
            // console.log("Data in accupage===> ",dataForAccuPage.diffData.diffImageInBase64);

            setAccuracy(dataForAccuPage.diffData.diffWithoutBuffer.misMatchPercentage)
            setLoading(false)
        }
    }, [dataForAccuPage])




    const handleClickOutside = (e) => {
        if (e.target.id === 'modal-overlay') {
            onClose();
        }
    };



    return (
        <div
            id="modal-overlay"
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
            onClick={handleClickOutside}
        >




            {/* main div */}
            <div className="bg-[#142f5a] p-4 mt-6 rounded-xl shadow-lg h-5/6 w-[80%] overflow-y-scroll">

                {loading ? (
                    <div className="sweet-loading flex justify-center items-center h-full">

                        <PacmanLoader
                            color='#f6e035'
                            loading={loading}
                            cssOverride={override}
                            size={120}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                            className='bg-red-600 rounded-full '
                        />
                    </div>) : (<div>


                        {/* <div className='flex justify-center mb-4'>

                            <div className='flex    p-2'>
                                <button
                                    ref={pixelRef}
                                    className='border-4 rounded-s-xl border-blue-400 hover:bg-blue-400/40 p-2 border-r-0'>
                                    Pixel to Pixel Comparison</button>
                                <div className='h-full bg-blue-400 w-[3px]' />
                                <button
                                    ref={aiRef}
                                    className='border-4 rounded-e-xl border-blue-400 hover:bg-blue-400/40 p-2 border-l-0'>
                                    Compare with AI</button>
                            </div>
                        </div> */}



                        <div>
                            <div className='flex justify-between'>
                                <h3 className="font-bold text-xl md:text-4xl mb-2">Compare Your Handwriting!</h3>
                                <div className='flex justify-end'>
                                    <div>
                                        <button
                                            onClick={onClose}
                                            className="p-2 m-4 md:px-3 md:py-3 bg-transparent text-white border-[1px] border-blue-400 hover:bg-blue-400/40 rounded-full mx-auto"
                                        >
                                            {/* Close */}
                                            <RxCross1 />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* {console.log("Diffimage===> ",diffImage,"\n Ideadimage==>",idealImage)} */}
                            <div className='grid grid-cols-1 md:grid-cols-2'>
                                {/* Difference Output */}
                                <div className='md:ml-10'>

                                    <PixelComparison
                                        diffImage={diffImage}
                                        accuracy={accuracy}
                                    />
                                </div>



                                <div className="">
                                    <div className='mb-4'>
                                        <h1 className='text-xl font-bold mb-2 text-center'>Reference Image :</h1>
                                        <Image
                                            src={idealImage}
                                            width={300}
                                            height={200}
                                            alt='Ideal Image'
                                            className='border-2 border-blue-400 rounded-md mx-auto'
                                        />
                                    </div>

                                    <div>
                                        <h1 className='text-xl font-bold mb-2 text-center'>Your Handwriting :</h1>
                                        <Image
                                            src={drawingImage}
                                            width={300}
                                            height={60}
                                            alt='Drawing Image'
                                            className='border-2 border-blue-400 rounded-md mx-auto'
                                        />
                                    </div>
                                </div>



                            </div>

                            <p className='my-4 text-balance  md:text-lg'>



                                <span className='text-xl font-bold'>Remember,</span>  <br />
                                <span className='text-white/60'>

                                A lower accuracy score doesn&apos;t mean you can&apos;t improve. Each attempt brings you closer to mastering the ideal image shape. Keep practicing, and with each try, you&apos;ll get closer to perfection.
                                </span>
                                <br />
                                <p className='font-bold text-xl mt-4 md:mt-6'>Don&apos;t quit. Practice makes perfect!</p>

                            </p>
                            <hr />

                            <div className='flex justify-center'>
                                <div>
                                    <button
                                        onClick={onClose}
                                        className="p-2 m-4 md:px-3 md:py-3 bg-transparent text-white border-[1px] border-blue-400 hover:bg-blue-400/40 rounded-full mx-auto"
                                    >
                                        {/* Close */}
                                        <RxCross1 />
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                )
                }

            </div>
        </div>
    );
};

export default AccuracyPage;

