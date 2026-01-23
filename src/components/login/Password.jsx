import React from 'react';

import Undo from '../../assets/icons/Undo';

const Password = ({
    roomPassword,
    setRoomPassword,
    setShowPopup,
    handlePopupEnter,
    errorMessage,
    shake
}) => {
  return (
    <>
        <input 
            type="password" 
            placeholder='Password'
            value={roomPassword}
            onChange={(e) => setRoomPassword(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handlePopupEnter()}
            className={`w-full px-5 py-3 outline-none bg-white/30 rounded-xl border border-gray-300 focus:bg-white/50 transition-all text-center ${shake ? "animate-shake" : ""}`}
        />
        {errorMessage && <p className="text-red-500 text-sm font-medium text-center mt-2">{errorMessage}</p>}
        <div className='flex gap-3 w-full mt-2 items-center'>
            <div onClick={() => setShowPopup(true)} className='flex items-center justify-center gap-2 font-semibold text-gray-800 transition-all cursor-pointer px-2 select-none'>
                <Undo size={20} /> Back
            </div>
            <button onClick={handlePopupEnter} className='flex-1 py-2.5 rounded-xl bg-[#7A85C1] text-white font-bold hover:bg-[#6a74a8] shadow-lg hover:shadow-[#7A85C1]/30 transition-all'>Enter</button>
        </div>
    </>
  )
}

export default Password