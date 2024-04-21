import React from 'react'
import Button from './Button'
import '../App.css'
import './Section.css'

function Section() {
  return (
    <div className='section-container'>
        <h1>What is Report Incidents?</h1>
        <p>
          <h3 style={{color: "black"}}><b>An easy,user-friendly application for reporting incidents with the power of visually stimulating UI.</b></h3>
          <br></br>
      
            Outlines information related
            to an incident such as its causes, damages, injuries which helps organizations to accurately
           profile the different events leading to such incidents and the aftermath of these occurrences.
          </p>
        <div className="section-btns">
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>GET STARTED</Button>
        </div>
        
    </div>
  )
}

export default Section
/*
            <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>Watch <i className="fa-solid fa-play"></i></Button>
        </div>
        //video src='/videos/video-2.mp4'autoPlay loop muted />*/

