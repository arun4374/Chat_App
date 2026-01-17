import React, { useState, useRef, useEffect } from 'react'
import { Phone } from '@/assets/icons/Phone';
import Navdot from '@/assets/icons/Navdot.jsx';
import userImage from '@/assets/images/img3.png'
import Msg  from './Msg.jsx';
import Bottom from './Bottom.jsx';
import WebCam from './WebCam.jsx';

const Chat = () => {
  const [online, setOnline] = useState(true);
  const [camera, setCameraopen] = useState(false);

  const [navpop, setNavpop] = useState(false);
  const messageEnd = useRef(null);

 
  useEffect(() => {
    messageEnd.current?.scrollIntoView({ behavior: 'smooth' });
  }, [camera]); 

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
        <div className='flex-1 overflow-y-auto w-full p-5 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-white/20 [&::-webkit-scrollbar-thumb]:rounded-full'>
           <Msg message='Hi' min="32 Min ago" />
           <Msg user={true} message='hi 👋'  />
           <Msg user={true} message='Enna Panra' min="28 Min ago" />
           <Msg message='Summa tha, nee' min="25 Min ago" />
           <Msg user={true} message='Insta pathutu irunthen' min="24 Min ago" />
           <Msg message="app work aguthanu pathan! nalladha work aguthu" min="24 Min ago"/>
           <Msg user={true} message="ama, pakkava work agudhu" min="23 Min ago" />
           <Msg message="idhulaye neraya bug iruku bro..." min="22 Min ago" />
           <Msg user={true} message='enna bug 🧐' min="16 Min ago" />
           <Msg message='mudincha kandu pudi 😅' min="15 Min ago" />
           <Msg user={true} message='solra dei'  min="10 Min ago" />
           <Msg message='konchamavadhu try panra' min="7 Min ago" />
           <Msg user={true} message='Antha iraa vengayam la engaluku theriyum. ne moditu sollu' min="6 Min ago" />
           <Msg message='🤣' min="4 Min ago" />
           <Msg user={true} message='poda angutu' min="4 Min ago" />
           <Msg message='En enna achi bro' min="3 Min ago" />
           <Msg user={true} message='avan avan 1008 problem la irukan idhula ne vera' min="3 Min ago" />
           <Msg message='En un aal vittu poitucha enna 🤣' min="2 Min ago" />
           <Msg user={true} message='Ethu 🤬' min="2 Min ago" />
           <Msg message='Vera enna' min="2 Min ago" />
           <Msg user={true} message='Onnum illa vidu' min="1 Min ago" />
           <Msg message='apdilam vida mudiyadhu' min="1 Min ago" />
           <Msg user={true} message='mudiyadhuna poi savu da venna' min="Just Now" />
           
           {camera && <WebCam onClose={() => setCameraopen(false)} />}
           

           <div ref={messageEnd}></div>
        </div>


        {/* chat bottom  */}

        <div className='w-full flex justify-between px-3 py-2 gap-1 items-center self-end'>
            <Bottom onCameraClick={() => setCameraopen(prev => !prev)} />
        </div>
    </div>
  )
}

export default Chat