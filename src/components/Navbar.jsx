import {Link} from 'react-scroll';
import { useState } from 'react';

function Navbar({isDarkMode, toggleMode}){
   
  //setting active link logic
  const [activeLink,setActiveLink]=useState('home');

    return(
        <>
        <div className={`relative z-[1000] flex justify-center ${!isDarkMode?'bg-slate-400':'bg-slate-900'}`}>
        <div className={`w-full p-6 fixed flex cursor-pointer justify-evenly font-mono ${!isDarkMode?'bg-slate-400':'bg-slate-900'} ${!isDarkMode?'text-slate-700':'text-slate-400'} font-bold`} >
      
            <Link className={`opacity-75 hover:opacity-100 hover:text-xl ${activeLink==='home'?'underline opacity-100 text-xl':''}`} to="home" spy={true} smooth={true} offset={-50} duration={500} onSetActive={() => setActiveLink('home')}  >Home</Link>
            <Link className={`opacity-75 hover:opacity-100 hover:text-xl ${activeLink==='about'?'underline opacity-100 text-xl':''}`} to="about" spy={true} smooth={true} offset={-380} duration={500} onSetActive={() => setActiveLink('about')}  >About</Link>
            <Link className={`opacity-75 hover:opacity-100 hover:text-xl ${activeLink==='projects'?'underline opacity-100 text-xl':''}`} to="projects" spy={true} smooth={true} offset={-70} duration={500} onSetActive={() => setActiveLink('projects')} >Projects</Link>
            <Link className={`opacity-75 hover:opacity-100 hover:text-xl ${activeLink==='artworks'?'underline opacity-100 text-xl':''}`} to="artworks" spy={true} smooth={true} offset={-100} duration={500} onSetActive={() => setActiveLink('artworks')} >Artworks</Link>
            <Link className={`opacity-75 hover:opacity-100 hover:text-xl ${activeLink==='contact'?'underline opacity-100 text-xl':''}`} to="contact" spy={true} smooth={true} offset={-430} duration={500} onSetActive={() => setActiveLink('contact')}  >Contact</Link> 
        

        <button onClick={toggleMode} className={` text-xl font-bold ${!isDarkMode?'text-slate-700':'text-slate-400'}`}>{isDarkMode?<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
</svg>
:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
</svg>
}</button>
        </div>
        {/* <hr className={`border-t-2 z-[1100] rounded-full mt-[15px] mb-[10px] mx-[200px] ${!isDarkMode?'border-slate-500':'border-slate-400'}`}/> */}
        </div>
        </>
    )
}

export default Navbar