import React from 'react';

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
  Link,
  useRouteMatch,
  useParams,
  Routes
} from "react-router-dom";
import Header from './components/Header';

function App() {
  return (
    <div className="App">
     

        <Routes>

          <Route path="/" exact element={<Header/>}/>
          
         
        </Routes>
        
     
    </div>
  );
}

export default App;
