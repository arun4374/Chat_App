import React, { useState } from 'react'
import Chat from './components/chatMenu/Chat.jsx';
import ThemeIcon from './assets/icons/Theme.jsx';
import img1 from './assets/images/bg1.jpg';
import img2 from './assets/images/bg2.jpg';
import img3 from './assets/images/bg3.jpg';
import img4 from './assets/images/bg4.jpg';
import Backgroundlayer from './components/layout/Backgroundlayer.jsx';
import LoginPage from './components/login/LoginPage.jsx';

const App = () => {
  const imgList = [img1, img2, img3, img4];
  const [bgImg, setbg] = useState(imgList[0]);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  
  const randomImg=(newImg)=>{
    const img = new Image();
    img.src = newImg;
    
    img.onload = () =>{
      setbg(newImg);
    };
  }

  const cycleTheme = () => {
    const currentIndex = imgList.indexOf(bgImg);
    const nextIndex = (currentIndex + 1) % imgList.length;
    console.log(nextIndex);
    randomImg(imgList[nextIndex]);
  };

  return (
    <div className="relative min-h-screen w-full flex justify-center items-center p-3 transition-opacity duration-1000 ease-in-out animate-fade-in"  >
      
      <Backgroundlayer image={bgImg} />
    {isLoggedIn ? (
      <div className='h-[95vh] w-full max-w-lg bg-white/14 rounded-2xl shadow-2xl backdrop-blur-[5px] border border-white/30  flex flex-row'>
        {/* <div className='border-r-grey border-r w-60'>
          <h1>sidebar</h1>
        </div> */}
        <Chat onLogout={() => setIsLoggedIn(false)} />
      </div>
    ): (
      <LoginPage onLogin={() => setIsLoggedIn(true)} />
    )}
      
      
      <button 
        className='absolute right-10 bottom-5 p-3 rounded-full bg-[#c27df0] cursor-pointer hover:scale-110 active:scale-95 transition-all duration-400 shadow-lg' 
        onClick={cycleTheme}
      >
          <ThemeIcon />
      </button>
    </div>
  )
}

export default App