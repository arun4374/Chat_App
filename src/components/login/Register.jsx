import React from 'react'

const Register = ({
    username,
    handleInput,
    handleUsername,
    roomId,
    handleLoginClick,
    isValid
}) => {
  return (
    <>
        <div className='w-full flex flex-col gap-4'>
              <input 
                type="text" 
                placeholder='Username' 
                value={username}
                onChange={handleUsername}
                className='w-full px-5 py-3 outline-none bg-white/30 focus:bg-white/50 rounded-xl border border-white/20 focus:border-[#7A85C1]/50 transition-all duration-200 placeholder:text-gray-500 font-medium'
            />
            <input 
                type="text" 
                placeholder='Team Code' 
                value={roomId}
                className={`w-full px-5 py-3 outline-none border ${isValid ? "border-white/20 focus:border-[#7A85C1]/50": "border-red-600" } bg-white/30 focus:bg-white/50 rounded-xl transition-all duration-200 placeholder:text-gray-500 font-medium`} 

                onChange = {handleInput}
            /> 
        </div> 

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