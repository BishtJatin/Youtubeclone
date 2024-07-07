import React from 'react'

const Head = () => {
  return (
    <div className='grid grid-flow-col justify-between shadow pb-6  mt-5'>
        <div className='flex justify-center'>
        <img className='w-8 h-8 ml-5 cursor-pointer' alt='logo' src='https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp&w=256'/>

         <img className='w-24 h-6 ml-5 mt-1 cursor-pointer' alt='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/768px-YouTube_Logo_2017.svg.png'/>
        </div>
        <div className='flex'>
            <input className='border border-black rounded-l-full w-[32rem]' type='text'/>
            <button className='border border-black rounded-r-full px-2'>🔍</button>
        </div>
        <div>
          <img className='w-8 h-8 mr-5 cursor-pointer'  src='https://i.pinimg.com/564x/57/00/c0/5700c04197ee9a4372a35ef16eb78f4e.jpg'/>
        </div>
    </div>
  );
}

export default Head;