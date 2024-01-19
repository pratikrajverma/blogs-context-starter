 
import { CiDark } from "react-icons/ci";
import { IoSunnyOutline } from "react-icons/io5";




const Header = ({lightbtn,setlightbtn}) => {
  
  function darkhandler()
  {
    setlightbtn(true)
  }

  function lighthandler()
  {
    setlightbtn(false)
  }

  return (
    <div className= {`flex justify-around border-b shadow-md py-2 w-full max-w-[1260px] fixed 
                          ${lightbtn ? 'bg-white' : 'bg-indigo-400 text-white'}`} >
        <h1 className='{`text-3xl uppercase font-bold `}'>Coding blogs</h1>
        <div className='bg-slate-400 w-[3rem] rounded-full p-[4px] gap-2 flex justify-between'>
   

          <button className=  {`w-5   rounded-full ${(lightbtn) ? 'bg-white' : 'bg-slate-400'}`}  
                  onClick={darkhandler}>
                  <CiDark /></button>
          <button className={`w-5   rounded-full ${(lightbtn) ? 'bg-slate-400' : 'bg-white text-black'}`}  
                  onClick={lighthandler}>
                  <IoSunnyOutline /></button>
        </div>
    </div>
  );
}


export default Header