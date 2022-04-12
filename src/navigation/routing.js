import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/home.js";
import Login from "../pages/login.js";
import Register from "../pages/register.js";
import NoteRecord from "../pages/note-record.js";


export default function Routing(props) {


    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login/>} />

                <Route path="login" element={<Login />} />
                <Route path="home" element={<Home/>} />
                
                <Route path="register" element={<Register />} />
                <Route path="add-note" element={<NoteRecord />} />

            </Routes>


        </Router>
    )
}


