import React, { useState } from 'react'
import ChatList from './ChatList'
import SearchBar from './SearchBar'
import img1 from '../../assets/images/img1.png';
import img2 from '../../assets/images/img2.png';
import img3 from '../../assets/images/img3.png';

const Sidebar = ({ userData }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const chats = [
        { id: 1, name: "Design Team", message: "Hey, how's the progress?", time: "2m", img: img1, unread: 2 },
        { id: 2, name: "John Doe", message: "Can we meet tomorrow?", time: "1h", img: img2, unread: 0 },
        { id: 3, name: "Project Alpha", message: "Files uploaded.", time: "3h", img: img3, unread: 5 },
    ];

    const filteredChats = chats.filter(chat => chat.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className='w-[420px] h-full border-r border-white/20 flex flex-col backdrop-blur-md bg-white/5'>
        {/* Sidebar Header */}
        <div className='w-full flex items-center justify-between py-2.5 px-8 border-b border-white/20 bg-white/5'>
            <div className='flex items-center gap-3'>
                <div className='relative w-12 h-12 rounded-full p-0.5 bg-gradient-to-tr from-[#c27df0] to-white shadow-lg'>
                    <img 
                        src={userData?.avatar} 
                        alt="User" 
                        className='w-full h-full rounded-full object-cover border-2 border-white/30' 
                    />
                    <div className='absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white shadow-sm'></div>
                </div>
                <div className='flex flex-col'>
                    <h3 className='text-gray-800 font-bold text-base font-[inter] tracking-wide capitalize drop-shadow-sm'>
                        {userData?.username || "User"}
                    </h3>
                </div>
            </div>
            
            <button className='p-2 rounded-full hover:bg-white/30 transition-all duration-300 group active:scale-95'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-gray-700 group-hover:text-[#c27df0] transition-colors drop-shadow-sm">
                    <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                </svg>
            </button>
        </div>

        <SearchBar value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />

        {/* Sidebar Content Placeholder */}
        <div className='flex-1 overflow-y-auto px-4 pb-4 scrollbar-hide'>
             <ChatList chats={filteredChats} />
        </div>
    </div>
  )
}

export default Sidebar
