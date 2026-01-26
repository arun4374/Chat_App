import React, {useRef, useCallback, useState } from 'react'
import Webcam from 'react-webcam'
import CameraIcon from '@/assets/icons/Camera';

const WebCam = ({ onClose }) => {
  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
  };
  const [sourceImg, setSourceimg] = useState(null);
  const [isFlashing, setIsFlashing] = useState(false);
  const webcamRef = useRef(null);
  const capture = useCallback(
    ()=>{
        setIsFlashing(true);
        setSourceimg(webcamRef.current?.getScreenshot());
        setTimeout(() => setIsFlashing(false), 150);
    },[webcamRef]
  )

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/10 rounded-2xl backdrop-blur-sm p-4'>
        <div className='relative w-full max-w-sm h-full bg-[#1c1c1e]/90 backdrop-blur-xl rounded-[2.5rem] shadow-2xl border border-white/20 overflow-hidden flex flex-col animate-pop'>
            
            {/* Header */}
            <div className='flex items-center justify-between px-6 py-4'>
                <h3 className='text-white/90 font-medium'>Camera</h3>
                <button 
                    onClick={onClose}
                    className='p-2 hover:bg-white/10 text-white/60 hover:text-white rounded-full transition-all active:scale-90 cursor-pointer'
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
            </div>

            {/* Viewport */}
            <div className='relative aspect-3/4 bg-black mx-4 rounded-4xl overflow-hidden border border-white/10'>
                <Webcam
                    audio={false}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    mirrored={true}
                    videoConstraints={{...videoConstraints, aspectRatio: 3/4}}
                    className='w-full h-full object-cover'
                />
                
                {isFlashing && <div className='absolute inset-0 bg-white z-10 animate-pulse' />}
                
                {/* Thumbnail Preview */}
                <div className='absolute bottom-4 left-4 w-12 h-12 rounded-xl overflow-hidden border border-white/20 bg-white/5 backdrop-blur-md shadow-lg transition-transform duration-300 hover:scale-110'>
                    {sourceImg && (<img src={sourceImg} alt="captured img" className='w-full h-full object-cover' />)}
                </div>
            </div>

            {/* Controls */}
            <div className='p-6 flex items-center justify-center'>
                <button 
                    onClick={capture} 
                    className='group relative flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg hover:scale-105 active:scale-95 transition-all duration-200'
                >
                    <div className='w-14 h-14 rounded-full border-2 border-black/5 flex items-center justify-center'>
                        <CameraIcon color="#000" size={28} />
                    </div>
                </button>
            </div>
        </div>
    </div>
  )
}

export default WebCam