import React,{useState} from 'react';
import './Style.css' 

const SocialMediaFeed=() =>{
    const [posts,setPosts]=useState([]);

    const handleAddPost=()=>{
        const newPost =prompt("What's on your mind?");
        if(newPost){
            setPosts([...posts,newPost]);
        }
    };

    return(
        <div className='SocialMediaFeed'>
            <h2>Social Media Feed</h2>
            <button onClick={handleAddPost}>Create Post</button>
            <div>
                {posts.map((post,index)=>(
                  <div key={index}>
                    <p>{post}</p>
                    </div>  
                ))}
            </div>
        </div>

    );
};
export default SocialMediaFeed;