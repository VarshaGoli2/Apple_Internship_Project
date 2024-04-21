import React, { Component } from 'react';
import './Accidentform.css'
import Roll from './images/rollover.png'
import HOC from './images/headoncollision.png'
import DUI from './images/driving under inluence.png'
import HR from './images/hit & run.png'
import ror from './images/run of road collision.png'
import Low from './images/least.png'
import Medium from './images/mod.png'
import High from './images/most.png'
import Human from './images/human-damage.png'
import prop from './images/prop.png'
import Both from './images/both.png'
import None from './images/none.svg'

import DatePicker from 'react-datepicker';  
 
import "react-datepicker/dist/react-datepicker.css";  


class Accidentform extends Component {

  

  constructor(props)
 {

super(props)

this.state={
  deviceId: Math.floor(Math.random()*(100-0+1)+0),
  latitude:"",
  longitude:'',
   addInfo:'',
   severityLevel:'Medium',
   damages:'Both',
   incidentType:"Accident",
   subtype:'Head on collision',
   timeStamp:"",
   startDate: new Date()

} 
this.handleChange = this.handleChange.bind(this);  
this.handleLocationx=this.handleLocationx.bind(this)
this.handleLocationy=this.handleLocationy.bind(this)
this.damagesHandler=this.damagesHandler.bind(this)
this.severityHandler=this.severityHandler.bind(this)
this.handleAddinfo=this.handleAddinfo.bind(this)
this.submitHandler=this.submitHandler.bind(this)
this.subtypeHandler=this.subtypeHandler.bind(this)
    }


    handleLocationx=(event)=>
    { 
        this.setState({  
        [event.target.name]: event.target.value
         })
      
    }

    handleLocationy=(event)=>
    { 
        this.setState({  
        [event.target.name]: event.target.value
         })
      
    }

    handleAddinfo=(event)=>
    { 
        this.setState({  
            [event.target.name]:event.target.value
         })
      
    }


    damagesHandler=(event)=>
    { 
        this.setState({  
            [event.target.name]:event.target.value
         })
      
    }


    severityHandler=(event)=>
    { 
        this.setState({  
            [event.target.name]:event.target.value
         })
      
    }



    subtypeHandler=(event)=>
    { 
        this.setState({  
            subtype:event.target.value
         })
      
    }

    handleChange(date) {  
      this.setState({  
        startDate: date
        
      })  
      console.log(this.state.startDate)  
    } 

    componentDidMount()
    {
      navigator.geolocation.getCurrentPosition((position)=> {
        this.setState({
          latitude:position.coords.latitude,
          longitude:position.coords.longitude
        })
       
      });

    }


submitHandler(event) {
  event.preventDefault();
 // alert("Thank you for reporting!")

  var body={
    deviceId:this.state.deviceId,
    incidentType:this.state.incidentType,
    subtype:this.state.subtype,
    severityLevel:this.state.severityLevel,
    damages:this.state.damages,
    latitude:this.state.latitude,
    longitude:this.state.longitude,
    addInfo:this.state.addInfo,
    timeStamp:this.state.startDate
   
  }
  console.log(body);



    const url = "http://localhost:9000/incidents";
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    headers.append('Access-Control-Allow-origin', url);
    headers.append('Access-Control-Allow-Credentials', 'true');

    headers.append('POST', 'GET');

    fetch(url, {
      headers: headers,
      method: 'POST',
      body: JSON.stringify(body)
    })

       
      .then(response => response.json())
      .then(contents => {
        console.log(contents);

      })
      .catch(() => console.log("can't access" + url + "response. "))
      
      window.location.href='/thankyou'
}

  render() {
    return (
        <div className='Container'>
          <br></br><h4>Accident</h4>
           <h3>Select Sub-Type</h3>
           <br></br>
           <label >
         <input type="radio" id="vr" name="subtype" value="Vehicle rollover" onChange={this.subtypeHandler}/>
         <img src={Roll} alt="" title="Vehicle rollover"></img>
           </label>
           <label >
           <input type="radio" id="hoc" name="subtype" value="Head on collision" onChange={this.subtypeHandler} defaultChecked/>
           <img src={HOC} alt="" title="Head on collision"></img>
           </label>
           <label >
           <input type="radio" id="dui" name="subtype" value="Driving under influence" onChange={this.subtypeHandler}/>
           <img src={DUI} alt="" title="Driving under influence"></img>
           </label>
           <label >
           <input type="radio" id="hr" name="subtype" value="Hit and run" onChange={this.subtypeHandler}/>
           <img src={HR} alt="" title="Hit and run"></img>
           </label>
           <label >
           <input type="radio" id="ror" name="subtype" value="Run-off-road collision" onChange={this.subtypeHandler}/>
           <img src={ror} alt="" title="Run-off-road collision"></img>
           </label>
           
            <br></br>
            <br></br>
           <h3>Severity Level</h3>
           <br></br>
                                              <label >
                                              <input  type="radio" id="Low" name="severityLevel" value="Low" onClick={this.severityHandler}/>
                                              <img src={Low} alt="" title="Low"></img>
                                              </label>
                                              <label>
                                              <input type="radio" id="Medium" name="severityLevel" value="Medium" onClick={this.severityHandler} defaultChecked/>
                                              <img src={Medium} alt="" title="Medium"></img></label>
                                              <label>
                                              <input type="radio" id="High" name="severityLevel" value="High" onClick={this.severityHandler}/>
                                              <img src={High} alt="" title="High"></img></label>
                                              <br></br>
                                              <br></br>
                                          
           <h3>Damages</h3>
        
              <br></br>
             
                                              <label ><input  type="radio" name="damages" value="Human" onClick={this.damagesHandler}/>
                                              <img src={Human} alt="" title="Human"></img>
                                              </label>
                                              <label >
                                              <input type="radio"  name="damages" value="Property" onClick={this.damagesHandler}/>
                                              <img src={prop} alt="" title="Property"></img> 
                                              </label>
                                              <label >
                                              <input  type="radio" name="damages" value="Both" onClick={this.damagesHandler} defaultChecked/>
                                              <img src={Both} alt="" title="Both"></img></label>
                                              <label >
                                              <input type="radio" name="damages" value="None" onClick={this.damagesHandler}/>
                                              <img src={None} alt="" title="None"></img>
                                              </label>
                                           
           <br></br>
           <br></br>
           <h3 >Location-x</h3>
           <br></br>
           <i class="fa-solid fa-street-view"></i>
           <input type="text" name="latitude" value={this.state.latitude} onChange={this.handleLocationx} placeholder="x"></input>
           <br></br>
           <h3 >Location-y</h3>
           <br></br>
           <i class="fa-solid fa-street-view"></i>
           <input type="text" name="longitude" value={this.state.longitude} onChange={this.handleLocationy} placeholder="y"></input>
           <br></br>
           <br></br>
     
       <div className="form-group">  
        <DatePicker  
            selected={ this.state.startDate }  
            onChange={ this.handleChange }  
            showTimeSelect  
            timeFormat="HH:mm"  
            timeIntervals={20}  
            
            dateFormat="MMMM d, yyyy h:mm aa"  
            
        />  
       
      </div>  
           <h3>Additonal Information</h3>
           <br></br>
           <i class="fa-solid fa-note-sticky"></i>
           <input type="text" name="addInfo" value={this.state.addInfo} onChange={this.handleAddinfo} placeholder="Description of incident"></input>
           <br></br>
           <br></br>  <br></br>
           <button onClick={this.submitHandler}>Submit</button>
           <br></br>
           <br></br>
        
          </div>                                        
    );
  }
       
}


export default Accidentform;