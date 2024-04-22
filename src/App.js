import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopBar from './Layouts/Topbar';
import SideBar from './Layouts/Sidebar';
import Complaint from './Components/Complaint';
import './App.css';
import Sales from './Components/Sales';

const App = () => {
  return (
    <Router>
      <div className="AppContainer">
        <TopBar />
        <div className="ContentContainer">
          <SideBar />
          <div className="MainContent">
            {/* Routes will go here */}
            <Routes>
              <Route path="/" exact>
                Home Page
              </Route>
              {/* Add the complaintPage route */}
              <Route path="/complaint" element={<Complaint />} />
              <Route path="/sales" element={<Sales />} />
              {/* Add more routes as needed */}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
