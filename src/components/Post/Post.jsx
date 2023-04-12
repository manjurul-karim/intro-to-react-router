import React from 'react';
import './Post.css'
import { Link, useNavigate } from 'react-router-dom';
const Post = ({post}) => {
    const {title,body ,id} =post

    const navigate = useNavigate();

    const handleNavigation =() => {
            navigate(`/post/${id}`)
    }
    return (
      <div className="post">
        <small>ID:{id}</small>
        <h3>{title}</h3>
        <Link to={`/post/${id}`}>Details</Link>
        <Link to={`/post/${id}`}>
          <button>Show post Details</button>
        </Link>
        <button onClick={handleNavigation}>With Button Handle</button>
      </div>
    );
};

export default Post;