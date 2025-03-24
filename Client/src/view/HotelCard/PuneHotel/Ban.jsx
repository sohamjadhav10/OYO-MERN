
import React, { Component } from "react";
import JSON2 from './Ban.json';
import HotCard from "./HotCard";

class Bang extends Component{
    constructor() {
        super();
        this.state ={
            title : "Hotels in Banglore",
            hotels : JSON2
        };
    }
    render(){
        return(
            <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
                   <h1>{this.state.title}</h1>
                     <HotCard hotList={this.state.hotels} /> 
                   </div>  
        )
    }
}
export default Bang;
