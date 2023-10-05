import React from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import AddFriend from "./components/AddFriend";


function App() {
  return (
    <div className="App">
      <header className="header">
        <h2> Friends DataBase</h2>

        <Link className="links" to="login">
          Login
        </Link>

        <Link className="links" to="friends">
          Friends
        </Link>

        <Link className="links" to="add">
          Add
        </Link>
        {/* <Link className="links" to="friends">Logout</Link> */}
      </header>
 <div className="container1">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/friends" element={<FriendsList />} />
        <Route path="/friends/add" element={<AddFriend />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
