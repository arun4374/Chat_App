import React, { useState, useRef, useEffect } from 'react'
import { Phone } from '@/assets/icons/Phone';
import Navdot from '@/assets/icons/Navdot.jsx';
import userImage from '@/assets/images/img3.png'
import Msg  from './Msg.jsx';
import Bottom from './Bottom.jsx';
import WebCam from './WebCam.jsx';
import { formatTime } from '../../utils/chatUtils';

const Chat = () => {
  const [online, setOnline] = useState(true);
  const [camera, setCameraopen] = useState(false);

  const [navpop, setNavpop] = useState(false);
  const messageEnd = useRef(null);

  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

 
  useEffect(() => {
    messageEnd.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]); 

  return (
    <div className='flex w-full h-full flex-col'>
        
        {/* chat header  */}
        <div className='flex items-center w-full justify-between py-2 px-3 bg-white/20 rounded-t-2xl'>
            <div className='flex gap-4 justify-between px-3 items-center'>
                <span className='w-13 h-13 rounded-full overflow-hidden flex justify-center items-center' >
                    <img src={userImage} alt="user img" width="24" className=' scale-210 select-none' />
                </span>
                <div>
                    <h2 className='font-[inter] text-lg leading-tight select-none'>Arun</h2>
                    <p className={`text-[12px] px-2 py-0.5 w-fit rounded-full select-none font-medium ${
                        online ? 'text-green-700 bg-green-300' : 'text-gray-500 bg-amber-100'
                    }`}>
                        {online ? 'Online' : 'Offline'}
                    </p>
                </div>
            </div>

            <div className='flex px-3 gap-2 relative'>
                <Phone className="hover:bg-white/20 p-2 rounded-full cursor-pointer transition-colors duration-200 ease-in-out" color="#313131" />
                <span onClick={() => setNavpop((prev) => !prev)}>
                    <Navdot className="hover:bg-white/20 p-2 rounded-full cursor-pointer transition-colors duration-200 ease-in-out" color="#313131" />
                </span>

                {/* nav popup  */}

                <div className={`absolute right-0 top-14 font-[inter] z-50 transition-all duration-200 ease-in-out ${!navpop ? "opacity-0 pointer-events-none -translate-y-2.5" : "opacity-100 translate-y-0"}`}>
                    <ul className='w-32 flex flex-col overflow-hidden bg-white/40 backdrop-blur-3xl border border-white/30 rounded-xl shadow-lg select-none'>
                        <li><button 
                                className='w-full text-center px-4 py-2 text-sm font-medium text-gray-800 hover:bg-white/30 transition-colors' 
                                onClick={() => { setNavpop(prev => !prev); setOnline(prev => !prev); }}>
                                Pin
                            </button></li>
                        <li><button className='w-full text-center px-4 py-2 text-sm font-medium text-red-600 hover:bg-white/30 transition-colors' onClick={()=> setNavpop((prev) => !prev)}>Report</button></li>
                        <li><button className='w-full text-center px-4 py-2 text-sm font-medium text-red-600 hover:bg-white/30 transition-colors' onClick={()=> setNavpop((prev) => !prev)}>Block</button></li>
                    </ul>
                </div>
            </div>
        </div>

        {/* chat Details  */}
        <div className='flex-1 overflow-y-auto overflow-x-hidden w-full p-5 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-white/20 [&::-webkit-scrollbar-thumb]:rounded-full'>


           {/* <Msg user={true} message='hi 👋'  />
           <Msg message='Hi' min="32 Min ago" /> */}
           {messages.map((message) => (
            <Msg key={message.id} message={message.text} min={formatTime(message.timeStamp)} user={message.sender} />
           ))}
           
           {isTyping && (
             <div className="flex flex-row gap-2 items-start mb-2 ">
               <div className="bg-[#B9B4C7] text-gray-800 p-2.5 rounded-2xl rounded-tl-none shadow-sm">
                 <div className="flex gap-1 px-1">
                   <span className="w-1.5 h-1.5 bg-gray-600 rounded-full animate-bounce [animation-duration:0.8s]"></span>
                   <span className="w-1.5 h-1.5 bg-gray-600 rounded-full animate-bounce [animation-duration:0.8s] [animation-delay:0.2s]"></span>
                   <span className="w-1.5 h-1.5 bg-gray-600 rounded-full animate-bounce [animation-duration:0.8s] [animation-delay:0.4s]"></span>
                 </div>
               </div>
             </div>
           )}
           
           
           {camera && <WebCam onClose={() => setCameraopen(false)} />}
           
           <div ref={messageEnd}></div>
        </div>


        {/* chat bottom  */}

        <div className='w-full flex justify-between px-3 py-2 gap-1 items-center self-end'>
            <Bottom onCameraClick={() => setCameraopen(prev => !prev)} setMessages={setMessages} setIsTyping={setIsTyping} messages={messages} />
        </div>
    </div>
  )
}

export default Chat