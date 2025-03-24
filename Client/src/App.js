import React from 'react';
import Page from './view/HotelCard/PuneHotel/Page';
import Nav from './view/navbar/Nav';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import LoginForm from './view/Login/Login';
import Body from './view/body/Body';




function App() {
  return (
    <div className="App">
      <Router>
        
        <Nav />
        
          <Routes>
            <Route  path='/' element={<Body/>} />
            <Route  path='/login' element={<LoginForm/>} />
            <Route  path='/pune' element={<Page/>} />
            
          </Routes>
        
      </Router>
    </div>
  );
}

export default App;
