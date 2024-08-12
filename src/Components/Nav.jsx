import Link from 'next/link'
import React from 'react'


const Nav = () => {
  return (
    <div className='mt-4 mb-1'>

      <Link href="/"
        className="border-2 border-slate-500 hover:bg-slate-700 rounded-lg p-2 m-2"
      >Home</Link>

      {/* hover later */}
      {/* <Navitem name ={'Hiragana'} href={'/hiragana'}/>
      <Navitem name ={'Katakana'} href={'/katakana'} />
      <Navitem name ={'Kanji'} href={'/kanji'} /> */}

<Link href='/hiragana'
        className="border-2 border-slate-500 hover:bg-slate-700 rounded-lg p-2 m-2"
      >
        Hiragana
      </Link>

      <Link href='/katakana'
        className="border-2 border-slate-500 hover:bg-slate-700 rounded-lg p-2 m-2"
      >
        Katakana
      </Link>

      <Link href='/kanji'
        className="border-2 border-slate-500 hover:bg-slate-700 rounded-lg p-2 m-2"
      >
        Kanji
      </Link>

      <hr className="border-[1px] border-slate-700 mt-3" />
    </div>
  )
}

export default Nav