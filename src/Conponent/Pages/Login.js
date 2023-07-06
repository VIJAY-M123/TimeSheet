import React from "react";
import "../Style/Login.css"
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <div>
            <div className="main">

                <div className="submain">
                    <div>
                      <FaUserCircle size="40px"/>
                    </div>
                    <div>
                     <h2>Login</h2>
                    </div>
                    <div>
                     <input type="text" placeholder="Email"/>
                    </div>
                    <div>
                     <input type="Password" placeholder="Password"/>
                    </div>
                    <div>
                        <button>Submit</button>
                    </div>
                    <div className="footer1">
                        <div style={{marginLeft:"0px"}}>
                            <Link to="/forget">Forget Password?...</Link>
                        </div>
                        <div  style={{marginLeft:"70px"}}>
                            <Link to="/register">Create Account?...</Link>
                        </div>
                       
                    </div>
                  

                </div>
               

            </div>

        </div>

    );
}