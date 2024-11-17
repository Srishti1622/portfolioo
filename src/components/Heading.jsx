
const Heading = ({isDarkMode}) => {
  return (
    <>
        <div className={`h-[530px] p-14  flex ${!isDarkMode?'bg-slate-400':'bg-slate-900'}`} id="home">
    <div >
    <h1 className='font-mono text-[50px] text-slate-600 px-[90px] pt-[50px] pb-[20px] font-extrabold text-start overline'>Heyy, there!</h1>
    <h1 className={`font-[Gill Sans] drop-shadow-2xl text-[110px] ${!isDarkMode?'text-slate-700' : 'text-slate-400'} px-[90px] font-extrabold text-start overline `}>SRISHTI</h1>
    <h1 className='font-mono text-[50px] text-slate-600 px-[90px] font-extrabold text-start overline'>Here!</h1>
    <div className={`w-auto px-[90px] pt-[16px]`}>
    <a className={`text-lg font-semibold hover:font-bold hover:text-2xl ${!isDarkMode?'text-slate-700' : 'text-slate-400'}`} href="/Resume - Srishti Agrawal.pdf" target="_blank" rel="noreferrer">Resume →</a> 
    </div></div>
    <img className='float-right h-[500px] w-[600px] drop-shadow-[25px_13px_rgba(0,0,0,0.25)]' src="images\pic11.png" alt="pic1" />
    </div>
    </>
  )
}

export default Heading