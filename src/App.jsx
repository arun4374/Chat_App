import React, { useState } from 'react'
import Chat from './components/chatMenu/Chat.jsx';
import ThemeIcon from './assets/icons/Theme.jsx';
import img1 from './assets/images/bg1.jpg';
import img2 from './assets/images/bg2.jpg';
import img3 from './assets/images/bg3.jpg';
import img4 from './assets/images/bg4.jpg';
import Backgroundlayer from './components/layout/Backgroundlayer.jsx';
import LoginPage from './components/login/LoginPage.jsx';
import Sidebar from './components/sideBar/SideBar.jsx';

const App = () => {
  const imgList = [img1, img2, img3, img4];
  const [bgImg, setbg] = useState(imgList[0]);

  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [userData, setUserData] = useState(null);

  
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
      <>
      <div className='h-[90vh] w-full max-w-xl bg-white/10 rounded-3xl shadow-2xl backdrop-blur-lg border border-white/20 flex flex-row overflow-hidden'>
        <Sidebar userData={userData} />
        <Chat onLogout={() => { setIsLoggedIn(false); setUserData(null); }} />
      </div>
      </>
    ): (
      <LoginPage onLogin={(user) => { setUserData(user); setIsLoggedIn(true); }} />
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