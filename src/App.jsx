import * as React from 'react';
import './App.css';
import {Navigate, Routes} from "react-router-dom";
import {Route} from "react-router-dom";




function App() {
  return (
    <div>
        <Routes> 
          <Route exact path="/" element={} />
  
          <Route path="/contact" element={} />
  
          {/* <Navigate to="/" /> */}
        </Routes>
    </div>
  );
}

export default App;



