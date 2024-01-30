import React from 'react'

export const Home = () => {
  return (
    <div className='grid grid-cols-12 h-screen w-screen'>
    <div className="col-span-3  ml-28 border  border-black">left </div>
    <div className="col-span-5 border border-black">middle </div>
    <div className="col-span-4 border border-black">right</div>
  </div>
  )
}
