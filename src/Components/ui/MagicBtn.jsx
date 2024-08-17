import React from 'react'

const MagicBtn = () => {
  return (
    <div><button className="relative inline-flex h-12 
    overflow-hidden rounded-tr-3xl  rounded-bl-3xl p-[1px] ">
    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
    <span className="inline-flex rounded-bl-3xl rounded-tr-3xl h-full w-full cursor-pointer items-center justify-center  bg-slate-950 px-4 py-1 text-sm font-medium text-white backdrop-blur-3xl">
     Start writing
    </span>
  </button></div>
  )
}

export default MagicBtn