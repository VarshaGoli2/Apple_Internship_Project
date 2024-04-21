import React, { useState } from 'react';
import "./Report.css"
function Report(){
  return(
    <div className='Report-container'>
    <ul>
      <li key="/Accidentform" className='Links'><a href="/Accidentform">Accident
      <i className="fa fa-road fa-3x fa-fw" aria-hidden="true"></i></a></li>
      <br></br><br></br>
      <li key="/Hazardform" Name='Links'><a href="/Hazardform">Hazard
      <i className="fa fa-exclamation-triangle fa-3x fa-fw" aria-hidden="true"></i></a></li>
      <li key="/Trafficform" className='Links'><a href="/Trafficform">Traffic
      <i className="fa-solid fa-traffic-light fa-4x"></i></a></li>
    </ul>
    </div>
  )
}
export default Report
