import {Link, Routes, Route, useNavigate } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import { useState } from "react";
import "./App.css";
import Home from "./Home";
import Report from "./Report";
import Login from "./Login";
import { Button } from "@material-ui/core";
export default function App() {
    const [sideBar, setSideBar] = useState(true);
    const navigate = useNavigate();

    function showSideBar() {
        setSideBar(!sideBar);
    }

    function handleLogin() {
        navigate('/login');
    }


    return (
        <>
            <div className="nav-bar">
                <div className="fa-bar">
                    <FaIcons.FaBars onClick={showSideBar} style={{ color: "#fff" }} />
                </div>
                <div className="blank-nav-bar"></div>
                <div className="login">
                    <Button onClick={handleLogin}>Login</Button>
                </div>

            </div>
            <div className="content">
                <div className={sideBar ? "menu active" : "menu"}>

                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/report">Report</Link>
                    </li>


                </div>
                <div className="routes">
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route path="/report" element={<Report />} />
                        <Route path="/login" element={<Login />} />
                    </Routes>
                </div>
            </div>
        </>
    )
}