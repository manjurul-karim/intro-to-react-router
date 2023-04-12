import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const post =useLoaderData();

    const backNavigate = useNavigate()

    const handleGoBack = () =>{
        backNavigate(-1)
    }
    return (
        <div>
            <p>{post.id}</p>
            <p>{post.body}</p>
            <button style={{cursor:'pointer'}} onClick={handleGoBack}>go back</button>
        </div>
    );
};

export default PostDetails;