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

function App() {
  return (
    <div className="App">
     <Router>
      <>
        

        <Routes>

          <Route path="/" exact>
            <h1>This is the Home Page </h1>
          </Route>
         
        </Routes>
        
      </>
    </Router>
    </div>
  );
}

export default App;
