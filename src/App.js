import logo from './logo.svg';
import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, Navigate, Outlet } from 'react-router-dom';
import Login from './Conponent/Pages/Login';
import Register from './Conponent/Pages/Register';
//import Admin from './Conponent/Layout/Admin';
import Forget from './Conponent/Pages/ForgetPassword';
import Home from './Conponent/Pages/Home';
import Dashboard from './Conponent/Pages/Dashboard';
import Sheet from './Conponent/Pages/TimeSheet';
import Graph from './Conponent/Pages/Graph';
import Sidebar from './Conponent/Sidebar/Sidebar';
import Admin from './Conponent/Layouts/Admin';

function App() {



  return (
    <div className="">
      <BrowserRouter>

        <Routes>
              <Route path="/login" element={<Login/>}/>
              <Route path='/register' element={<Register/>}/>
              <Route path="/forget" element={<Forget/>}/>
              <Route path="/home" element={<Home/>}/>
              {/* <Route path="/dashboard" element={<Dashboard/>}/> */}
              <Route path="sheet" element={<Sheet/>}/>
              {/* <Route path="graph" element={<Graph/>}/> */}
              <Route path="*" element={<Admin/>}/>

          {/* <Route path="/auth" render={(props)=><Admin {...props} Text="vijay" />} /> */}

        </Routes>
       {/* <Sidebar/> */}

      </BrowserRouter>

    </div>
  );
}

export default App;
