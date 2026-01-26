import React, { useState, useEffect, useRef } from 'react'
import userImage from '@/assets/images/img3.png';
import Smilyplus from '../../assets/icons/Smilyplus';

// Emoji picker 

import EmojiPicker from 'emoji-picker-react';

const Msg = (
    {
        user = false,
        message = "",
        min = ""
    }
) => {

  const [reactEmoji, setReactemoji] = useState(null);
  const [showReactions, setShowReactions] = useState(false);
  const pickerRef = useRef(null);
  const toggleRef = useRef(null);

  const onReactionClick = (emojiData) => {
    setReactemoji(emojiData.emoji);
    setShowReactions(false);
  };

  // Handle clicking outside to close the picker
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        pickerRef.current && !pickerRef.current.contains(event.target) &&
        toggleRef.current && !toggleRef.current.contains(event.target)
      ) {
        setShowReactions(false);
      }
    };

    if (showReactions) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showReactions]);

  return (
     <div className={`flex ${user ? "flex-row-reverse" : "flex-row"} gap-2 items-start mb-2 group`}>
        
        <div className={`flex flex-col ${user ? "items-end" : "items-start"} max-w-[80%] animate-pop ${user ? "origin-bottom-right" : "origin-bottom-left"}`}>
          <div className='relative '>
            {showReactions && (
              <div ref={pickerRef} className={`absolute -top-13 ${user ? "right-0" : "left-10"} z-50 shadow-2xl`}>
                <EmojiPicker 
                  reactionsDefaultOpen={true} 
                  onEmojiClick={onReactionClick}
                  allowExpandReactions={false}
                  theme="dark"
                  width={300}
                  height={45}
                />
              </div>
            )}
            <p className={`p-2.5 rounded-2xl text-sm font-[inter] shadow-sm ${user ? "bg-[#7A85C1] text-white rounded-tr-none" : "bg-[#B9B4C7] text-gray-800 rounded-tl-none"}`}>
                {message}
            </p>

            {reactEmoji && (
              <span className={`absolute -bottom-2  ${user ? "-left-2" : "-right-2"} text-[18px]  select-none animate-pop duration-100`} onClick={()=>{setReactemoji(null)}}>
                {reactEmoji}
              </span>
            )}

            <span ref={toggleRef} onClick={() => setShowReactions(!showReactions)}>
              <Smilyplus color="#9c9c9c" size={20} className={`absolute top-2 cursor-pointer transition-opacity duration-200 delay-100 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto ${user ? "-left-7" : "-right-7" } `} />
            </span>
          </div>
            
            <span className='text-[12px] opacity-80 mt-1 font-medium px-1 select-none'>{min}</span>
        </div>
    </div>
  )
}

export default Msg