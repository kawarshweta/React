import React from "react";
import ReactDom from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body"

const AppLayout = () =>{
    return(
        <div className="applayout">
            <Header />
            <Body />
        </div>
    )
}
 
const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<AppLayout />)