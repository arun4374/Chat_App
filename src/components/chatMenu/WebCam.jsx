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
  const webcamRef = useRef(null);
  const capture = useCallback(
    ()=>{
        setSourceimg(webcamRef.current?.getScreenshot());

    },[webcamRef]
  )

  return (
    <div className='absolute bottom-35 left-15'>
        <div className='relative w-full max-w-sm mx-auto mb-4 rounded-2xl shadow-lg border-2 overflow-hidden border-white/20 bg-black aspect-video'>
        <Webcam
            audio={false}
            height={1080}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width={1920}
            mirrored={true}
            videoConstraints={videoConstraints}
            className='w-full h-full object-cover relative'
        />
        <button onClick={capture} className='absolute bottom-1 left-40 self-center bg-white/30 p-3 rounded-full cursor-pointer active:scale-90 transition-transform duration-100 ease-linear'>
            <CameraIcon />
        </button>
        <button 
            onClick={onClose}
            className='absolute top-2 right-2 p-1 bg-red-500/80 hover:bg-red-600 text-white rounded-full transition-colors'
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
        <div className='absolute bottom-4 rounded overflow-hidden left-1.5 w-15 bg-white/20'>
            {sourceImg && (<img src={sourceImg} alt="captured img" />)}
        </div>
        </div>
    </div>
  )
}

export default WebCam