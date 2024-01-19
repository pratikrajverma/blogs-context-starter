import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";
import Card from "./Card";


const Blogs = ( ) => {
  const { loading, posts } = useContext(AppContext);
  


  return (
    <div className= "flex flex-col gap-7 items-center w-[50%] mb-20 mt-20" >
                      
      {
        loading ?
          (<Spinner />) :

          (posts.length === 0 ?
            (<p>No post found</p>) :

            ( 
              posts.map((post) => {
                return <Card key={post.id} post={post} />
              })
            )
          )

      }
    </div>
  );
};

export default Blogs;
