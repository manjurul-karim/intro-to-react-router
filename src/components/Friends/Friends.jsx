import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from '../friend/Friend';
import './friends.css'

const Friends = () => {
    const friends = useLoaderData()
   
    return (
        <div>
            <h3>this is friend :{friends.length}</h3>
            <div className='friends'>
                {
                friends.map(friend => <Friend 
                    key={friend.id} 
                    friend={friend}></Friend>)
                }
            </div>
        </div>
    );
};

export default Friends;