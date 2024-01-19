import React, { useContext, useEffect, useState } from 'react'
import Header from './components/Header';
import Blogs from './components/Blogs';
import Pagination from './components/Pagination';
import { AppContext } from './context/AppContext';

import './App.css'


const App = () => {
  const { fetchBlogspost } = useContext(AppContext);

  useEffect(() => {

    fetchBlogspost();

  }, [])

  const[lightbtn,setlightbtn] = useState(true)

  return (
      
      <div className= {`flex flex-col flex-wrap items-center   max-w-[1260px] ${lightbtn ? 'bg-white text-black' : 'bg-indigo-900 text-white'}`} >

        <Header lightbtn={lightbtn} setlightbtn={setlightbtn} />
        <Blogs  />
        <Pagination lightbtn={lightbtn}/>

      </div>
   
  )
}

export default App