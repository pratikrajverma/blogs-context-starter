import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Pagination = ({lightbtn}) => {
  const{page,pagehandler,totalpage} = useContext(AppContext);
   


  return (

    <div className={` fixed bottom-0 bg-white  border-t w-full max-w-[1260px] shadow-black flex-wrap flex justify-around px-20 py-2  
                    ${lightbtn ? 'bg-white' : 'bg-indigo-400 text-white'}  `}>
      
      <div className='flex  gap-[2px]   bg-slate-400 rounded-full px-[2px] py-[2px]'>
            {
                page>1 && <button 
                    className=' rounded-full px-1 w-20 hover:bg-white hover:text-black  transition-all duration-500'
                    onClick={()=>pagehandler(page-1)}>
                  Previous
                </button>
            }

            {
                page<totalpage && <button 
                className='  rounded-full px-1 w-20 hover:bg-white hover:text-black transition-all duration-500'
                onClick={()=>pagehandler(page+1)}>
                  Next
                </button>
            }
      </div>

      <p>
          page {page} of {totalpage}
      </p>
        
    </div>
  )
}

export default Pagination