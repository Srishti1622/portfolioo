import { useState, useEffect } from "react";

const Projects = ({isDarkMode}) => {

  //projects data fetching logic
  const [projects,setProject]=useState(null);

  useEffect(()=>{
    fetchProjectData();
  },[]);

  const fetchProjectData= async()=>{
    try {
      const response = await fetch('/projects.json');
      const data = await response.json();
      setProject(data.projects);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  return (
    <>
        <div className={`h-auto ${!isDarkMode?'bg-slate-400':'bg-slate-900'}`} id="projects">
        <div className='p-[20px]'></div>
    {/* <p className={`text-center text-3xl p-[30px] font-bold ${!isDarkMode?'text-slate-700':'text-slate-500'}`}>Projects</p> */}
    <div >
    {(projects!==null)?(projects.map((project,index)=>(index%2===0?<><div key={index} className={`py-2`}>
    <div key={index} className={`py-[10px] flex justify-evenly mx-[100px] `}>
    <div className={`p-2 w-[600px] ${!isDarkMode?'text-slate-600':'text-slate-500'}`}>
    <p className={`font-bold font-mono text-xl ${!isDarkMode?'text-slate-700':'text-slate-400'}`}>{project.title}</p>
    <p className={`text-xs`}>{project.year}</p>
    <p className={`text-sm content-center`}>{project.description}</p>
    <p className={`text-sm font-semibold`}>Tech Stack: {project.techStack.join(", ")}</p>
    <a className={`text-sm font-semibold hover:font-bold`} href={project.githubLink} target="_blank" rel="noreferrer">View source code →</a> 
    <a className={`text-sm font-semibold hover:font-bold mx-4`} href={project.viewLink} target="_blank" rel="noreferrer">View in browser →</a>
    </div>
    <div className='flex'><img style={{  borderRadius: '50% 10% 50% 10% /10% 50% 10% 50% ' }} className={` justify-center h-auto w-[350px] drop-shadow-[15px_15px_rgba(0,0,0,0.25)] float-right`} src={`/images/projects/${project.image}`} alt={`project-${index}`} /></div>
    </div></div>{((index!==projects.length-1)?<hr className={`border-t-2 rounded-full mt-[15px] mb-[10px] mx-[200px] ${!isDarkMode?'border-slate-500':'border-slate-500'}`}/>:<div className='p-[20px]'></div>)}</>:<>
    <div key={index} className={`py-2`}>
    <div key={index} className={`py-[10px] flex justify-evenly mx-[100px] `}>
    <div className='flex'><img style={{ borderRadius: '10% 50% 10% 50% / 50% 10% 50% 10%'}} className={` justify-center h-auto w-[350px] drop-shadow-[15px_15px_rgba(0,0,0,0.25)] float-right`} src={`/images/projects/${project.image}`} alt={`project-${index}`} /></div>
    <div className={`p-2 w-[600px] ${!isDarkMode?'text-slate-600':'text-slate-500'}`}>
    <p className={`font-bold text-xl font-mono ${!isDarkMode?'text-slate-700':'text-slate-400'}`}>{project.title}</p>
    <p className={`text-xs`}>{project.year}</p>
    <p className={`text-sm content-center`}>{project.description}</p>
    <p className={`text-sm font-semibold`}>Tech Stack: {project.techStack.join(", ")}</p>
    <a className={`text-sm font-semibold hover:font-bold`} href={project.githubLink} target="_blank" rel="noreferrer">View source code →</a> 
    <a className={`text-sm font-semibold hover:font-bold mx-4`} href={project.viewLink} target="_blank" rel="noreferrer">View in browser →</a>
    </div>
    </div></div> {((index!==projects.length-1)?<hr className={`border-t-2 rounded-full mt-[15px] mb-[10px] mx-[200px] ${!isDarkMode?'border-slate-500':'border-slate-500'}`}/>:<div className='p-[20px]'></div>)}
    </>))):<div className={`text-center text-3xl p-[30px] font-bold ${!isDarkMode?'text-slate-700':'text-slate-500'} `}>Loading...</div>}
    </div>
      
    </div>
    </>
  )
}

export default Projects