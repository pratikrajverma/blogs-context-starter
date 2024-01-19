import { createContext,  useState } from "react";
import { baseUrl } from "../baseUrl";

const AppContext = createContext();

function AppContextProvider({ children }) {
  const [loading, setloading] = useState(false);
  const [posts, setposts] = useState([]);
  const [page, setpage] = useState(1);
  const [totalpage, settotalpage] = useState(null);




  async function fetchBlogspost(page = 1) {
    setloading(true);
    let url = `${baseUrl}?page=${page}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      setposts(data.posts);
      setpage(data.page);
      settotalpage(data.totalPages);
      console.log(data);
    }
    catch (err) {
      console.log('error he bro fir se try karo api');
    }
    setloading(false);
  }



  function pagehandler(page) {
    setpage(page);
    fetchBlogspost(page);
  }



  const value = {
    posts,
    setposts,
    page,
    setpage,
    totalpage,
    settotalpage,
    loading,
    setloading,
    fetchBlogspost,
    pagehandler,
  };

  return (
  <AppContext.Provider value={value}>
    {children}
  </AppContext.Provider>
  );
}


export { AppContext, AppContextProvider }