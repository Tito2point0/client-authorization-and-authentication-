import React, { useState, useEffect } from "react";
import axios from "axios";

const FriendsList = () => {
  const [friends, setFriends] = useState([]);
  
  
  useEffect(() => {
    const token = localStorage.getItem("token");
  
  
    axios.get('http://localhost:9000/api/friends', {
      headers: {
        authorization: token
      }
    })
  
      .then(resp => {
        console.log(resp);
      })
  
      .catch(err => {
      console.log(err)
    })
  }, []);



  return (
    <div>
      <h2>FriendsList</h2>
      <ul>
        <li>Name - age - email</li>
        <li>Name - age - email</li>
        <li>Name - age - email</li>
        <li>Name - age - email</li>
      </ul>
    </div>
  );
};

export default FriendsList;
