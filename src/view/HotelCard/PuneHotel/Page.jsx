// import React, { Component } from "react";
// import JSON1 from "./Pune.json"; 
// import HotCard from "./HotCard";

 

// class Page extends Component {
//   constructor() {
//     super();
//     this.state = {
//       title: "Hotels in Pune",
//       hotels: JSON1
//     };
//   }

//   render() {
//     return (
//       <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px",position:"relative",top:"100px" }}>
//         <h1>{this.state.title}</h1>
//         <HotCard hotList={this.state.hotels} /> 
//       </div>
//     );
//   }
// }

// export default Page;

import React, { Component } from "react";
import axios from "axios";
import HotCard from "./HotCard";

class Page extends Component {
  constructor() {
    super();
    this.state = {
      title: "Hotels in Pune",
      hotels: [],
    };
  }

  componentDidMount() {
    const restaurants = "http://localhost:5500/restaurants"; 

    axios
      .get(restaurants)
      .then((response) => {
        this.setState({ hotels: response.data });
      })
      .catch((error) => {
        console.error("Error fetching hotels:", error);
      });
  }

  render() {
    return (
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "20px",
          position: "relative",
          top: "100px",
        }}
      >
        <h1>{this.state.title}</h1>
        <HotCard hotList={this.state.hotels} />
      </div>
    );
  }
}

export default Page;
