import React, {useState} from 'react';
// users img 
import img1 from '../../assets/images/img1.png';
import img2 from '../../assets/images/img2.png';
import img3 from '../../assets/images/img3.png';
import img4 from '../../assets/images/img4.png';
import img5 from '../../assets/images/img5.png';
// import img from '../../assets/images/user.jpg';
import Refresh  from '../../assets/icons/Refresh';

const LoginPage = ({ onLogin }) => {

    const imgList = [img1, img2, img3, img4, img5];
    const [avatar, setAvatar] = useState(imgList[0]);

    const randomImg=(newImg)=>{
        const img = new Image();
        img.src = newImg;
        
        img.onload = () =>{
        setAvatar(newImg);
        };
    }

    const cycleAvatar = () => {
        const currentIndex = imgList.indexOf(avatar);
        const nextIndex = (currentIndex + 1) % imgList.length;
        randomImg(imgList[nextIndex]);
    };

  return (
    <div className='w-full max-w-sm bg-white/40 backdrop-blur-[10px] border border-white/30 rounded-3xl shadow-2xl p-8 flex flex-col items-center gap-8 animate-fade-in'>
        <div className='text-center'>
            <h1 className='text-3xl font-bold text-gray-800 font-[inter]'>Welcome</h1>
            <p className='text-gray-600 text-sm mt-1 font-medium'>Join the conversation</p>
        </div>

        <div className='relative'>
            <div className='w-22 h-22 rounded-full'>
                <img src={avatar} alt="user img" className='w-full h-full object-cover scale-150 select-none' />
            </div>
            <button className='absolute -bottom-5 -right-3 bg-white/90 p-1.5 rounded-full shadow-md hover:bg-white transition-all duration-200 cursor-pointer hover:scale-110 active:rotate-200' onClick={cycleAvatar}>
                <Refresh size={18} color="#4b5563" />
            </button>
        </div>

        <div className='w-full flex flex-col gap-4'>
            <input 
                type="text" 
                placeholder='Username' 
                className='w-full px-5 py-3 outline-none bg-white/30 focus:bg-white/50 rounded-xl border border-white/20 focus:border-[#7A85C1]/50 transition-all duration-200 placeholder:text-gray-500 font-medium'
            />
            <input 
                type="text" 
                placeholder='Team Code' 
                className='w-full px-5 py-3 outline-none bg-white/30 focus:bg-white/50 rounded-xl border border-white/20 focus:border-[#7A85C1]/50 transition-all duration-200 placeholder:text-gray-500 font-medium' 
            />
        </div>

        <button 
            className='w-full py-3 bg-[#7A85C1] hover:bg-[#6a74a8] text-white font-bold rounded-xl shadow-lg hover:shadow-[#7A85C1]/30 transition-all duration-200 active:scale-[0.98] cursor-pointer'
            onClick={onLogin}
        >
            Login
        </button>
    </div>
  )
}

export default LoginPage