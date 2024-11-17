import {useEffect, useState} from 'react';
import Navbar from './components/Navbar';
import Heading from './components/Heading';
import About from './components/About';
import Projects from './components/Projects';
import './App.css';
import Artworks from './components/Artworks';
import Contact from './components/Contact';

function App() {
  
  // mode change logic
  const [isDarkMode,setIsDarkMode]= useState(false);

  useEffect(()=>{
    const mode=window.matchMedia('(prefers-color-scheme:dark)');
    setIsDarkMode(mode.matches);
  },[]);

  const toggleMode=()=>{
    setIsDarkMode(!isDarkMode);
    // console.log("mode changed");
  }

  return (
    <>
    {/* {console.log(isDarkMode)} */}
    <Navbar isDarkMode={isDarkMode} toggleMode={toggleMode}/>
    {/* <div className={`h-[550px] ${!isDarkMode?'bg-slate-400':'bg-slate-900'}`}> */}
    {/* <Navbar isDarkMode={isDarkMode} toggleMode={toggleMode}/> */}
    <Heading isDarkMode={isDarkMode}/>
    {/* </div> */}
    <About isDarkMode={isDarkMode} />
    <Projects isDarkMode={isDarkMode} />
    <Artworks isDarkMode={isDarkMode} />
    <Contact isDarkMode={isDarkMode} />
    </>
  );
}

export default App;
