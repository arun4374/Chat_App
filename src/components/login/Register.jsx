import React from 'react'

const Register = ({
    username,
    handleInput,
    handleUsername,
    roomId,
    handleLoginClick,
    isValid,
    errorMessage,
    shake,
    roomStatus
}) => {

    const getBorderColor = () => {
        if (!isValid) return "border-red-600";
        if (roomStatus === 'available') return "border-green-500 focus:border-green-500";
        if (roomStatus === 'exists') return "border-red-500 focus:border-red-500";
        if (roomStatus === 'short') return "border-yellow-500 focus:border-yellow-500";
        return "border-white/20 focus:border-[#7A85C1]/50";
    };

  return (
    <>
        <div className={`w-full flex flex-col gap-4 ${shake ? "animate-shake" : ""}`}>
              <input 
                type="text" 
                placeholder='Username' 
                value={username}
                onChange={handleUsername}
                onKeyDown={(e)=>{e.key == 'Enter' && handleLoginClick()}}
                className='w-full px-5 py-3 outline-none bg-white/30 focus:bg-white/50 rounded-xl border border-white/20 focus:border-[#7A85C1]/50 transition-all duration-200 placeholder:text-gray-500 font-medium'
            />
            <input 
                type="text" 
                placeholder='Team Code' 
                value={roomId}
                maxLength={12}
                onKeyDown={(e)=>{e.key == 'Enter' && handleLoginClick()}}
                className={`w-full px-5 py-3 outline-none border ${getBorderColor()} bg-white/30 focus:bg-white/50 rounded-xl transition-all duration-200 placeholder:text-gray-500 font-medium`} 

                onChange = {handleInput}
            /> 
            {roomStatus === 'short' && <p className="text-yellow-600 text-xs font-medium ml-1 -mt-2">Team Code must be at least 4 characters</p>}
            {roomStatus === 'exists' && <p className="text-red-500 text-xs font-medium ml-1 -mt-2">Room already exists click to join</p>}
            {roomStatus === 'available' && <p className="text-green-600 text-xs font-medium ml-1 -mt-2">Room Available</p>}
        </div> 
        {/* {errorMessage && <p className="text-red-500 text-sm font-medium text-center">{errorMessage}</p>} */}

        <button 
            className='w-full py-3 bg-[#7A85C1] hover:bg-[#6a74a8] text-white font-bold rounded-xl shadow-lg hover:shadow-[#7A85C1]/30 transition-all duration-200 active:scale-[0.98] cursor-pointer'
            onClick={handleLoginClick}
        >
            Login
        </button>
    </>
  )
}

export default Register