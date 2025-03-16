import { useState, useEffect } from "react";

const About = ({isDarkMode}) => {
    
  // text animation logic
  const texts=[' a Full Stack AI Engineer',' a Data Scientist',' a Software Developer',' an Artist'];
  const [currentTextIndex,setCurrentTextIndex]=useState(0);
  const [charIndex,setCharIndex]=useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCharIndex((prevCharIndex) => (prevCharIndex + 1) % texts[currentTextIndex].length);

      if (charIndex === texts[currentTextIndex].length - 1) {
        setCurrentTextIndex((prevTextIndex) => (prevTextIndex + 1) % texts.length);
        setCharIndex(0);
      }
    }, 400);

    return () => clearInterval(interval);
  }, [charIndex, currentTextIndex, texts]);

  return (
    <>
        <div className={`h-auto ${!isDarkMode?'bg-slate-300':'bg-slate-700'}`} id="about">
    <div className={`text-center font-bold p-[30px] text-3xl ${!isDarkMode?'text-slate-600':'text-slate-400'}`}>
    <p>I'm {texts[currentTextIndex].substring(0, charIndex + 1)}
    <span className="cursor-blink">|</span>
    </p>
    <p className={`h-auto p-3 text-center mx-[70px] text-sm font-normal ${!isDarkMode?'text-slate-500':'text-slate-500'}`}>
    Highly-motivated employee with desire to take on new challenges as a seasoned software developer with a passion for crafting innovative solutions and pushing the boundaries of technology. With a solid foundation in 
    <strong> ReactJS, Python, Google DialogFlow CX and MySQL</strong>, I have successfully delivered impactful projects that showcase my technical proficiency and problem-solving skills.<br/>
Beyond the realm of coding, I am also an accomplished artist, bringing a unique blend of creativity and analytical thinking to my work. Whether it's designing intuitive user interfaces or creating visually compelling graphics, my artistic sensibility enriches the user experience and adds a creative dimension to my software development endeavors.
<br/>I am excited about the intersection of technology and art, where I find inspiration for creating software that not only functions flawlessly but also engages users on a visual and emotional level.<br/> My portfolio reflects my commitment to excellence in both coding and artistic expression.
</p>
<hr className={`border-t-2 rounded mx-[500px] ${!isDarkMode?'border-slate-500':'border-slate-400'}`}/>
    </div>
    </div>
    </>
  )
}

export default About