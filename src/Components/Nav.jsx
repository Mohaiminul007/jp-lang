import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <div className='m-5'>
        
      <Link href="/"
      className="border-2 border-black rounded-lg p-2 m-2"
      >Home</Link>
      <Link href='/hiragana'
      className="border-2 border-black rounded-lg p-2 m-2"
      >
      Hiragana
      </Link>
      <Link href='/katakana'
      className="border-2 border-black rounded-lg p-2 m-2"
      >
      katakana
      </Link>
      <Link href='/kanji'
      className="border-2 border-black rounded-lg p-2 m-2"
      >
      Kanji 
      </Link>
    </div>
  )
}

export default Nav