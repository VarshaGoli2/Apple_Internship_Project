import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Mount from './components/Mount'
import Home from './components/pages/Home'
import Report from './components/Report';
import Search from './components/Search';
import Hazardform from './components/Hazardform';
import Trafficform from './components/Trafficform';
import Accidentform from './components/Accidentform';
import User from './components/User';
import Onsubmit from './components/Onsubmit';
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Routes>
          <Route path='/Home' exact element={<Home />}/>
          <Route path='/' exact element={<Report />} />
          <Route path='/view' exact element={<Search/>}/>
          <Route path='/user' exact element={<User/>}/>
          <Route path="/thankyou" element={<Onsubmit />} />
            <Route path="/Accidentform" element={<Accidentform />} />
            <Route path="/Hazardform" element={<Hazardform />} />
            <Route path="/Trafficform" element={<Trafficform />} />
           
      </Routes>
      </Router>
      
    </div>
  );
}

export default App;
