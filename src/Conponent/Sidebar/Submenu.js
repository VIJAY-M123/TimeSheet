import React, { useState } from "react";
import {NavLink as Link } from "react-router-dom";
import styled from "styled-components";


  
const SidebarLinks = styled(Link)`
  display: flex;
  color:white;
  justify-content: space-between;
  align-items: center;
  padding: 20px !important;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;
  cursor: pointer;
  
  &:hover {
    background: #303548;
    border-left: 4px solid white;
    cursor: pointer;
    
  }
  &.active {
    
    background: #303548;
   
  }
  
`;
  
const SidebarLabels = styled.span`
  margin-left: 16px;
  color:white ;
  font-size:16px;
  font-family: ;
`;
  
const DropdownLinks = styled(Link)`
  background:#15192b;
  height: 60px;
  padding-left: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color:white;
  font-size: 18px;
  
  &:hover {
    background: #303548;
    border-left: 4px solid white;
    cursor: pointer;
  }
  &.active {
    
    background: #303548;
   
  }
`;
  
export default function SubMenu({ item})  {
  console.log("item",item)
 
  const [subnav, setSubnav] = useState(false);
  
  const showSubnav = () => setSubnav(!subnav);
  
  return (
    <>
      <SidebarLinks activeStyle  to={item.path} 
      onClick={item.subNav && showSubnav}  >
        <div >
          
          {item.icon}
          <SidebarLabels >{item.name}</SidebarLabels>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
       
      </SidebarLinks>
      {subnav  &&
        item.subNav.map((item, index) => {
          return (
         
            <DropdownLinks to={item.path} key={index}>
              {item.icon}
              <SidebarLabels>{item.title}</SidebarLabels>
            </DropdownLinks>
            
          );
        })}
    
      
    </>
  );
};
  
