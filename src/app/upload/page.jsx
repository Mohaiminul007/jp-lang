import React from 'react'

const Upload = () => {
  return (
    <div>
        <h1>writing Gif:</h1>
        <input type="file" />
        <br />
        <br />
        <h1>Japanes Letter:</h1>
        <input className='border-2 border-cyan-400 rounded-md' type="text" />
        <br />
        <br />
        <h1>English pronunciation:</h1>
        <input className='border-2 border-cyan-400 rounded-md' type="text" />
        <br />
        <br />
        <h1>Japanes Audio:</h1>
        <input type="file" />

    </div>
  )
}

export default Upload