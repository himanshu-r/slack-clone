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
import styled from 'styled-components';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">

      <Header />
      <AppBody>
        <Sidebar />

        <Routes>

          <Route path="/" exact />
          {/* Chat Component */}
          
         
        </Routes>
        
      </AppBody>
     
    </div>
  );
}

export default App;
const AppBody = styled.div`
  display: flex;
  height: 100vh;

`;