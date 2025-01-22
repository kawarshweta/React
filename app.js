import React from "react";
import ReactDom from "react-dom/client";


const Header = () => {
    return (
        <div className="header">
            <div>
                <img className="applogo" src="https://images-platform.99static.com/A_Ax0GQuo_NHI0Y7XZHmFtGfBDY=/0x0:1000x1000/500x500/top/smart/99designs-contests-attachments/126/126252/attachment_126252018" />
            </div>
            <div className="menu">
                <ul>
                    <li>Home</li>
                    <li>Service</li>
                    <li>About Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div> 
    )
}

const AppLayout = () =>{
    return(
        <div className="applayout">
            <Header />
        </div>
    )
}
 
const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<AppLayout />)