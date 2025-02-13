import React from "react";

class User extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
        console.log("child constructor")
    }
    componentDidMount(){
        console.log("child componentdidmount")
    }
    render(){
        console.log("Child render")
        return(
            <div>
                <h1>{this.props.name}</h1>
                <h2>Count : {this.state.count}</h2>
                <button onClick={() =>{
                    this.setState({
                        count: this.state.count + 1,
                    })
                }}>Click to Increase count</button>
                <h2>Count : {this.state.count2}</h2>
            </div>
        )
    }
}

export default User;