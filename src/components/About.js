import React from "react";
import User from "./User";

class About extends React.Component{
    constructor(props){
        super(props);
        console.log("Partent constructor")
    }
    componentDidMount(){
        console.log("Partent constructor")
    }
    render(){
        console.log("Partent render")
        return(
        <User name={"shweta"}
        
        />
        )
    }
}


export default About;