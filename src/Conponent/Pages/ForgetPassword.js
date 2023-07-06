import React from "react";
import "../Style/Login.css"
import {FaUserCircle} from "react-icons/fa";

export default function Forget(){
    return(
        <div>
            <div className="main">

                <div className="submain">
                    <div>
                      <FaUserCircle size="40px"/>
                    </div>
                    <div>
                     <h2>Forget Password</h2>
                    </div>
                    <div>
                     <input type="text" placeholder="Username"/>
                    </div>
                    <div>
                     <input type="text" placeholder="Email"/>
                    </div>
                    <div>
                     <input type="Password" placeholder="Password"/>
                    </div>
                    <div>
                     <input type="Password" placeholder="Confirm Password"/>
                    </div>
                    <div>
                        <button>Submit</button>
                    </div>
                  

                </div>
               

            </div>

        </div>
    );
}