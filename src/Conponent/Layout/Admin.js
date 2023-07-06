import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import routes from "../../routes.js";

console.log("route", routes);
//console.log(typeof(routes));



const getRoutes = (routes) => {

    return routes.map((prop, key) => {
        console.log("1", prop);

        if (prop.layout === "/auth") {
            console.log("d", prop.layout + prop.path);
            return (
                <Route
                    path={prop.layout + prop.path}
                    component={prop.component}
                    key={key}
                />
            );
        } else {
            return null;
        }
    });
};


// ))

export default function Admin(props) {

  console.log("");

    return (
        <div>
            <div style={{ backgroundColor: "red", height: "100px", width: "100%" }}>
                <h2 style={{ fontSize: "100px" }}>hiiiii</h2>
            </div>
            <div>
                <h2>My name is {props.Text}</h2>
                <Routes>
                    {getRoutes(routes)}
                    {/* <Redirect from="*" to="/admin/index" /> */}
                </Routes>
            </div>

            <div>
                <h2>Footer</h2>
            </div>

        </div>
    );
}