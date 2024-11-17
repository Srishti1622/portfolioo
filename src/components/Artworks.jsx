import { useState, useEffect } from "react"

const Artworks = ({isDarkMode}) => {

    //artworks fetching logic
  const [artworks,setArtworks]=useState(null);

  useEffect(()=>{
    fetchArtworkData();
  },[]);

  const fetchArtworkData=async()=>{
    try{
    const response = await fetch("/artworks.json");
    const data=await response.json();
    // console.log(data.artworks);
    setArtworks(data.artworks);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
  }

  //filter artworks based on selected category
  const [selectedCategory,setSelectedCategory]=useState("all");

  const filterArtworks=()=>{
      if(selectedCategory==='all'){
        return artworks;
      }
      else{
        return artworks.filter(artwork=>artwork.category===selectedCategory);
      }
  }

  return (<>
    <div id="artworks" className={`h-auto ${!isDarkMode?'bg-slate-300':'bg-slate-700'}`}>
    {/* <p className={`text-center font-bold p-[30px] text-3xl ${!isDarkMode?'text-slate-600':'text-slate-400'}`}>Artworks</p> */}
    <div className="p-8 flex justify-center">
    <div className={`w-4/5 p-2 flex cursor-pointer justify-evenly font-mono ${!isDarkMode?'text-slate-700':'text-slate-400'} font-bold`}>
      <button className={`opacity-75 hover:opacity-100 hover:text-xl ${selectedCategory==='all'?'opacity-100 text-xl underline':''}`} onClick={()=>setSelectedCategory('all')}>All</button>
      <button className={`opacity-75 hover:opacity-100 hover:text-xl ${selectedCategory==='god'?'opacity-100 text-xl underline':''}`} onClick={()=>setSelectedCategory('god')}>Spiritual</button>
      <button className={`opacity-75 hover:opacity-100 hover:text-xl ${selectedCategory==='couple'?'opacity-100 text-xl underline':''}`} onClick={()=>setSelectedCategory('couple')}>Cute Couple</button>
      <button className={`opacity-75 hover:opacity-100 hover:text-xl ${selectedCategory==='potrait'?'opacity-100 text-xl underline':''}`} onClick={()=>setSelectedCategory('potrait')}>Potrait</button>
      <button className={`opacity-75 hover:opacity-100 hover:text-xl ${selectedCategory==='rangoli'?'opacity-100 text-xl underline':''}`} onClick={()=>setSelectedCategory('rangoli')}>Rangoli</button>
      <button className={`opacity-75 hover:opacity-100 hover:text-xl ${selectedCategory==='other'?'opacity-100 text-xl underline':''}`} onClick={()=>setSelectedCategory('other')}>Others</button>
    </div>
    </div>
    <div className={`mx-[100px] grid grid-cols-6 gap-4 w-5/6`}>
      {(artworks!==null)?(filterArtworks().map((artwork,index)=>(<><img key={index} style={{ borderRadius: '10% 50% 10% 50% / 50% 10% 50% 10%' }} className={`object-cover text-center aspect-square w-full`} src={`/images/artworks/${artwork.image}`} alt={artwork.index}/></>))):(<div className={`text-center text-3xl p-[30px] font-bold ${!isDarkMode?'text-slate-700':'text-slate-500'} `}>Loading...</div>)}
    </div>
    <div className='p-[20px]'></div>
    </div>
  </>
  )
}

export default Artworks