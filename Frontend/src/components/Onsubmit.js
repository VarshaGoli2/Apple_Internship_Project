import React from 'react';
import "./Onsubmit.css"

function Onsubmit() {
 
  return <div><div className="Containerty">

<p><h2>Thank you for reporting!</h2></p><br></br>
<br></br>


 <button className="btn1" onClick={event =>  window.location.href='/'}>Report another incident</button>
    <br></br>
    <br></br>
    <button className="btn2"onClick={event =>  window.location.href='/user'}>View and edit my incidents</button>
    <br></br>
    <br></br>
    </div>
    </div>
}

export default Onsubmit;