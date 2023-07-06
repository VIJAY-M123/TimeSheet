import React from "react";
import { Route, Routes } from "react-router-dom";
import Chat from "../Pages/Chat";
import Dashboard from "../Pages/Dashboard";
import Graph from "../Pages/Graph";
import Sidebar from "../Sidebar/Sidebar";

export default function Admin(){
    return(
        <div>
            <Sidebar>
                <Routes>
                    <Route path="/night" element={<Dashboard/>}/>
                    <Route path="/dash" element={<Graph/>}/>
                    <Route path="/chat" element={<Chat/>}/>
                </Routes>
            </Sidebar>
        </div>
    );
}