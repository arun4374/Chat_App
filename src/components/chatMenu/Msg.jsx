import React from 'react'
import userImage from '@/assets/images/user.jpg';
import Smilyplus from '../../assets/icons/Smilyplus';

const Msg = (
    {
        user = false,
        message = "",
        min = ""
    }
) => {
  return (
     <div className={`flex ${user ? "flex-row-reverse" : "flex-row"} gap-2 items-start mb-2 group`}>
        
       { !user && <span className='w-9 h-9 rounded-full overflow-hidden flex justify-center items-center object-cover object-center shrink-0'>
            <img src={userImage} alt="user img" width="24" height="24" className=' scale-210' />
        </span>}
        
        <div className={`flex flex-col ${user ? "items-end" : "items-start"} max-w-[80%] `}>
          <div className='relative '>
            <p className={`p-2.5 rounded-2xl text-sm font-[inter] shadow-sm ${user ? "bg-[#7A85C1] text-white rounded-tr-none" : "bg-[#B9B4C7] text-gray-800 rounded-tl-none"}`}>
                {message}
            </p>
            <Smilyplus color="#4e4e4e" size={20} className={`absolute top-2 cursor-pointer transition-opacity duration-200 delay-100 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto ${user ? "-left-7" : "-right-7" } `} />
          </div>
            
            <span className='text-[10px] mt-1 opacity-60 font-medium px-1'>{min}</span>
        </div>
    </div>
  )
}

export default Msg