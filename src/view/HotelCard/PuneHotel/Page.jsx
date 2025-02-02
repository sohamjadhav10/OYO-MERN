import React, { Component } from "react";
import JSON1 from "./Pune.json"; 
import HotCard from "./HotCard";

 

class Page extends Component {
  constructor() {
    super();
    this.state = {
      title: "Hotels in Pune",
      hotels: JSON1
    };
  }

  render() {
    return (
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px",position:"relative",top:"100px" }}>
        <h1>{this.state.title}</h1>
        <HotCard hotList={this.state.hotels} /> 
      </div>
    );
  }
}

export default Page;
