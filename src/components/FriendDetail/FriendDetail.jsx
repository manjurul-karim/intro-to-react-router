import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import './FriendDetail.css'

const FriendDetail = () => {
    const friend = useLoaderData();

    const backNavigate = useNavigate();

    const handleGoBack = () => {
      backNavigate(-1);
    };
    console.log(friend);
    return (
      <div className="details-container">
        <div className="details-data">
          <h4>Name:{friend.name}</h4>
          <p>
            Adress: <br />
            <span>city: {friend.address.city}</span> <br />{" "}
            <span>Street:{friend.address.street}</span> <br />{" "}
            <span>ZipCode:{friend.address.zipcode}</span>
          </p>
          <p>Company-Name:{friend.company.name}</p>
          <p>Email:{friend.email}</p>
          <p>website:{friend.website} </p>
          <button style={{ cursor: "pointer" }} onClick={handleGoBack}>
            go back
          </button>
        </div>
      </div>
    );
};

export default FriendDetail;