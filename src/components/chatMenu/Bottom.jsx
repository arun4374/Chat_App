import React, { useState } from 'react'
// icons import 
import Mic from '@/assets/icons/Mic';
import Emoji from '@/assets/icons/Emoji';
import Camera from '@/assets/icons/Camera';
import Send from '@/assets/icons/Send';

// emoji keyboard 
import EmojiPicker from 'emoji-picker-react';

const Bottom = ({ onCameraClick }) => {

  const [text, setText] = useState("");
  const [showEmoji, setShowEmoji] = useState(false);

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const onEmojiClick = (emojiData) => {
    setText((prev) => prev + emojiData.emoji);
  };

  const handleSend = () => {
    if (text.trim()) {
      // Logic to send message would go here
      setText("");
      setShowEmoji(false);
    }
  };

  return (
    <>

        {/* icon section  */}
        <div className='flex rounded-xl overflow-hidden transition-colors duration-200 ease-in-out bg-white/20'>
            <Mic className="cursor-pointer hover:bg-[#aaadafb6] p-2" color="#313131" />
            <span onClick={onCameraClick}>
                <Camera className="cursor-pointer hover:bg-[#aaadafb6] p-2" color="#313131" />
            </span>
        </div>
        <div className='relative flex flex-1 py-1 rounded-3xl bg-white/30'>

            <div 
              className={`absolute bottom-full left-0 mb-3 z-50 transition-all duration-300 ease-in-out 
              ${showEmoji 
                ? "opacity-100 translate-y-0 pointer-events-auto" 
                : "opacity-0 translate-y-10 pointer-events-none"
              }`}
            >
                <EmojiPicker onEmojiClick={onEmojiClick} open={true} lazyLoadEmojis={true} emojiStyle="apple" theme="dark" width={350} height={400} />
            </div>

            <span onClick={() => setShowEmoji((prev) => !prev)} className="flex items-center">
                <Emoji className="p-1 pl-2 cursor-pointer" color={showEmoji ?"#0024f3":"#313131"} />
            </span>
            <input
              type="text"
              placeholder='Message'
              value={text}
              className='focus:outline-0 w-full px-2 bg-transparent font-semibold cursor-context-menu'
              onChange={handleInputChange}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
        </div>
        <button
          className='p-2 flex items-center gap-1 rounded-xl cursor-pointer bg-[#7A85C1] select-none text-white group active:scale-90 transition-transform duration-100 ease-linear'
          onClick={handleSend}
        >
            Send
            <Send size={20} color="#ffffff" className="px-1 group-hover:rotate-45 transition-transform duration-100 ease-linear" />
        </button>
    </>
  )
}

export default Bottom