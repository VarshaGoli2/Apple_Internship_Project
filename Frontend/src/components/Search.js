import React,{useRef, useState} from "react";
import Mount from './Mount';
import './Leaflet.css'
import { MapContainer,TileLayer,Marker,Popup } from 'react-leaflet'
import './Search.css'
import Vote from "./Vote";


/*class Search extends Component
{ 
 
    constructor(props)
    {
   
   super(props)
   
   this.state={
  
      str:"",
      show: false 
   }
 
   this.handlestr=this.handlestr.bind(this)
}


handlestr=(event)=>
{
this.setState({  
  [event.target.name]:event.target.value
})
}


handlebutton=(event)=>
{
  <Mount st={this.state.str}/>
}



  handleClick() {

    this.setState({ show: true });
  }


  componentDidMount()
  {  
  
      
  
  
       const url = "http://localhost:9000/incidents/findbyt/"+this.state.str;
     
       let headers=new Headers();
       headers.append('Content-Type','application/json');
       headers.append('Accept','application/json');
       headers.append('Access-control-Allow-origin',url);
       headers.append('Access-control-Allow-Credentials','true');
       headers.append('POST','GET');
       fetch(url, {
         headers: headers,
         method: 'GET',
       
       })
     
          
       .then(response => response.json()) 
       .then(response => this.setState({ 'output': response}))
     
     
       .catch(() => console.log("can't access " + url + " response. "))
     
   
       
  
  
  }
  renderNext = () => (
    <div className='s'>
      <br>
      </br><br></br>
      <h2>Search for type of Incident </h2>
      <br></br>
      <input type="text" name="str" value={this.state.str} onChange={this.handlestr} ></input>
      <br></br>
      <button type="text" name="btn" onClick={() => this.handleClick()}>
       Search
      </button>
      <br></br>
    </div>
  );

render()
{ 
  
  const { show } = this.state;
  return (
    <div>
      
      { this.renderNext() }
      { show && <Mount st={this.state.str}/> }
      <MapContainer center={[20.5937, 78.9629]} zoom={6} scrollWheelZoom={true}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
 
  
</MapContainer>
    </div>
  );

} 

}
export default Search;*/

export default function Search(){

const[itype,setitype]=useState("")
  const[output,setoutput]=useState([])
 
  React.useEffect(() => {
    
 
  
      const url = `http://localhost:9000/incidents/findbyt/${itype}`;
   
     let headers=new Headers();
     headers.append('Content-Type','application/json');
     headers.append('Accept','application/json');
     headers.append('Access-control-Allow-origin',url);
     headers.append('Access-control-Allow-Credentials','true');
     headers.append('POST','GET');
     fetch(url, {
       headers: headers,
       method: 'GET',
     
     })
   
        
     .then(response => response.json()) 
     .then(response=>{ console.log(response);
    setoutput(response)})
  
     .catch(() => console.log("can't access " + url + " response. "))

     
  },[itype]);


return(
  <div className="click">
    &emsp;
    <h2>Choose any Incident Type</h2>
    <br></br>
   <button onClick={()=>{setitype("Traffic")}}>Traffic</button>&emsp;
   <button onClick={()=>{setitype("Accident")}}>Accident</button>&emsp;
   <button onClick={()=>{setitype("Hazard")}}>Hazard</button>
   <br></br><br></br>
          <MapContainer center={[17.4118563,78.39864]} zoom={15} scrollWheelZoom={true}>
       <TileLayer
         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
       />
 
       {output.map(item => (
         <Marker 
         key={item.incidentId}
         position={[item.latitude, item.longitude]}>
           <Popup position={[item.latitude, item.longitude]}>
           <div>
           <h4>{"Incident id :" + item.incidentId}</h4>
             <h4>{"Device Id :" + item.deviceId}</h4>
             <h4>{"Incident type:" + item.incidentType}</h4>
             <h4>{"Incident subtype :" + item.subtype}</h4>
             <h4>{"Damages :" + item.damages}</h4>
             <h4>{"Severity Level :" + item.severityLevel}</h4>
             <h4>{"Additional information:" + item.incidentType}</h4>
             <h4>{"Location :" + item.latitude+","+item.longitude}</h4>
             <h4>{"Upvote :" + item.upvote}</h4>
             <h4>{"Downvote:" + item.downvote}</h4>
             <h4>{"Report count :" + item.reportCount}</h4>
             <h4>{"Time reported:" + item.timeStamp}</h4>
             <Vote id={item.incidentId} up={item.upvote} dn={item.downvote} rc={item.reportCount}/>
             
           </div>
           </Popup>
         </Marker>
       ))}
 
 
 
 
     </MapContainer>
     
    
</div>
);

}