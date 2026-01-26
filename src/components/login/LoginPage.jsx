import React, {useState} from 'react';
// users img 
import img1 from '../../assets/images/img1.png';
import img2 from '../../assets/images/img2.png';
import img3 from '../../assets/images/img3.png';
import img4 from '../../assets/images/img4.png';
import img5 from '../../assets/images/img5.png';
import img6 from '../../assets/images/img6.png';
import img7 from '../../assets/images/img7.png';
import img8 from '../../assets/images/img8.png';
// import img from '../../assets/images/user.jpg';
import Refresh  from '../../assets/icons/Refresh';
import Register from './Register';
import Password from './Password';

const LoginPage = ({ onLogin }) => {

    const imgList = [img1, img2, img3, img4, img5, img6, img7, img8];
    const [avatar, setAvatar] = useState(imgList[0]);
    const [username, setUsername] = useState('');
    const [roomId, setRoomId] = useState('');
    const [roomPassword, setRoomPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isValid, setIsValid] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');
    const [shake, setShake] = useState(false);
    const [roomStatus, setRoomStatus] = useState(null);

    // Random password
    const [randomPass, setRandompassword] = useState('');

    const sampleRooms = [
        { id: "room1", password: "123" },
        { id: "test", password: "pass" },
        { id: "admin", password: "admin" }
    ];

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

    const triggerShake = () => {
        setShake(true);
        setTimeout(() => setShake(false), 300);
    };

        const handleUsername = (e) => {
               setUsername(e.target.value);
               if (errorMessage) setErrorMessage('');
        };
    
        const handleInput = (e) => {
            const val = e.target.value;
            setRoomId(val);
            if (!isValid) setIsValid(true);
            if (errorMessage) setErrorMessage('');

            if (val.length === 0) {
                setRoomStatus(null);
            } else if (val.length < 4) {
                setRoomStatus('short');
            } else {
                const exists = sampleRooms.some(room => room.id === val);
                setRoomStatus(exists ? 'exists' : 'available');
            }
        };

        // Random password generator 

        const randomPassword = () => {
            const pattern = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#%&_?-$";

            const length = 6;
            let randomPass = "";

            for(let i=0;i<length;i++){
                let randomIndex = Math.floor(Math.random() * pattern.length);
                randomPass += pattern[randomIndex];
            }
            setRandompassword(randomPass);
            console.log(randomPass);
        }
    
        const handleLoginClick = () => {
            if (!username.trim()) {
                setErrorMessage("Please enter a username");
                triggerShake();
                return;
            }
            if (!roomId.trim()) {
                setIsValid(false);
                setErrorMessage("Please enter a Team Code");
                triggerShake();
                return;
            }

            const roomExists = sampleRooms.some(room => room.id === roomId);
            if (roomExists) {
                setShowPassword(true);
                setErrorMessage('');
            } else {
                setIsValid(true);
                randomPassword();
                
                onLogin({ username, avatar });
            }
        };

        const handlePopupEnter = () => {
            const room = sampleRooms.find(r => r.id === roomId);
            if (room && room.password === roomPassword) {
                onLogin({ username, avatar });
            } else {
                setErrorMessage("Incorrect Password");
                triggerShake();
            }
        };

  return (
    <div className='w-full max-w-sm bg-white/40 backdrop-blur-[10px] border border-white/30 rounded-3xl shadow-2xl p-8 flex flex-col items-center gap-8 animate-fade-in'>
        <style>{`
            @keyframes shake {
                0%, 100% { transform: translateX(0); }
                25% { transform: translateX(-5px); }
                75% { transform: translateX(5px); }
            }
            .animate-shake {
                animation: shake 0.3s ease-in-out;
            }
        `}</style>
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

                {showPassword ? (
                    <Password 
                        roomPassword={roomPassword}
                        setRoomPassword={(val) => {
                            setRoomPassword(val);
                            if (errorMessage) setErrorMessage('');
                        }}
                        setShowPopup={() => { setShowPassword(false); setErrorMessage(''); }}
                        handlePopupEnter={handlePopupEnter}
                        errorMessage={errorMessage}
                        shake={shake}
                    />
                ) : (
                    <Register 
                        username={username}
                        handleInput={handleInput}
                        handleUsername={handleUsername}
                        roomId={roomId}
                        handleLoginClick={handleLoginClick}
                        isValid={isValid}
                        errorMessage={errorMessage}
                        shake={shake}
                        roomStatus={roomStatus}
                    />
                )}
             </div>
           )
         }
        
        


export default LoginPage