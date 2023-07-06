import React from "react";
import Nav from "../Navbar/Navbar";
import {Row, Col} from "reactstrap";
import styled from "styled-components";
import "../Style/Sidebar.css";
import { menuItem } from "./Menuitem";
import SubMenu from "./Submenu";
import { FaRocketchat} from "react-icons/fa"
import { AiOutlineClose } from "react-icons/ai"
import { useState } from "react";
import {MdEmail} from "react-icons/md"
import {BiPhoneCall} from "react-icons/bi";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Right = styled.div`

    background:#15192b;
    box-shadow:var(--box-shadow);
    height:100vh;
    width: 300px;
    right:  ${({ isright }) => (isright ? '0' : '-100%')};
    position: fixed;
   
    padding:20px;
    z-index: 100;
    
 
`;

export default function Sidebar({children}) {

    const notify = () => toast("!!For the futher details contact this Email:prowesstics@gmail.com ");

    const [isright, setopen1] = useState(false);
    const toggle1 = () => {
        setopen1(!isright);

    }

    return (
        <div className="containers">
            <div  className="sidebar" >
                <div className="top">
                    <h5  className="" style={{color:"white"}}>Prowesstics</h5>
                   
                </div>
                <div>
                    {menuItem.map((item, index) => {
                        
                        return <SubMenu item={item} key={index}

                        />
                    })}

                </div>
               
            </div>
           

            <ToastContainer />
          
            <main>


               <Nav/>

                <div style={{ padding:"20px",height:"" }}>
                    {children}
                </div>

                <div className="footer">
                    
                        <button className="btnfooter" /*onClick={switchTheme}*/
                            style={{ borderRadius: "10px" }}><BiPhoneCall onClick={notify}  size="2rem" color="#fff" className="setting" />
                        </button>

                   

                </div>


               

            </main>

        </div>
    )
}