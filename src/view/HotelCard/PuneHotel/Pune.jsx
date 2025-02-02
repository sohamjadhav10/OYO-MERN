import React from "react";
import JSON1 from "./Pune.json";
import HotelCard from "./HotelCard";



class Pune extends React.Component{
    constructor(){
        super();
        this.state={                
            title : "Hotels in Pune",
            hotels : JSON1           
        }
    }
    render(){
        return(
          <div >
                <h1>{this.state.title}</h1>
                <HotelCard hotList={this.state.hotels}/>  
          </div>
        )
    }
}

export default Pune; 
    
