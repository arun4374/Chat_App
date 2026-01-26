import React from 'react';

const ChatList = ({ chats }) => {

  return (
    <div className='flex flex-col gap-2 mt-2'>
        {chats.map((chat) => (
            <div key={chat.id} className='flex items-center gap-3 p-3 rounded-xl hover:bg-white/20 transition-all duration-200 cursor-pointer group active:scale-95'>
                <div className='relative w-12 h-12 shrink-0'>
                    <img src={chat.img} alt={chat.name} className='w-full h-full rounded-full object-cover border border-white/30' />
                    {chat.unread > 0 && (
                        <div className='absolute -top-1 -right-1 w-5 h-5 bg-[#c27df0] rounded-full flex items-center justify-center text-white text-xs font-bold border-2 border-white shadow-sm'>
                            {chat.unread}
                        </div>
                    )}
                </div>
                <div className='flex-1 min-w-0'>
                    <div className='flex justify-between items-center mb-0.5'>
                        <h4 className='text-gray-800 font-semibold text-sm truncate'>{chat.name}</h4>
                        <span className='text-gray-500 text-xs font-medium'>{chat.time}</span>
                    </div>
                    <p className={`text-xs truncate ${chat.unread > 0 ? 'text-gray-700 font-medium' : 'text-gray-500'}`}>
                        {chat.message}
                    </p>
                </div>
            </div>
        ))}
    </div>
  )
}

export default ChatList
