import React from "react";

const Card = ({ post }) => {
    return (
        <div className="">
            <p className="font-bold   ">{post.title}</p>

            <p className="text-[12px]">
                By <span className="italic">{post.author}</span> on <span className="underline font-bold"> {post.category}</span>
            </p>

            <p className="text-[10px]">Posted on {post.date}</p>

            <p className="text-sm mt-[10px]">{post.content}</p>

            <div >
                {
                    post.tags.map((tag, index) => {
                        return <span className="text-[10px] underline text-blue-500  font-bold pr-2"
                                 key={index}>{`# ${tag}`}</span>
                    })
                }
            </div>

        </div>
    );
};

export default Card;
