import React,{useRef, useState} from "react";
import Vote from "./Vote";
import'./Mount.css'
import Leaflet from "./Leaflet";
import './Leaflet.css'
import { MapContainer,TileLayer,Marker,Popup } from 'react-leaflet';
import Search from "./Search";


/*class Mount extends Component
{  
    constructor(props)
    {
   
   super(props)
   
   this.state={
    'output':[],
      str:this.props.st,
      latitude:'',
      longitude:''
 

   }
 

}


componentDidMount()
{  
  // Initialize the leaflet map


  navigator.geolocation.getCurrentPosition((position)=> {
    this.setState({
      latitude:position.coords.latitude,
      longitude:position.coords.longitude
    })
    
    
  });
    
     const url = 'http://localhost:9000/findall';
   
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


render()
{       navigator.geolocation.getCurrentPosition((position)=> {
  this.setState({
    latitude:position.coords.latitude,
    longitude:position.coords.longitude
  })
  
  
}); 
    return(
        <div>
          

         <MapContainer center={[17.4352680,78.4363600]} zoom={15} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {this.state.output.map(item => (
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
            
            
          </div>
          </Popup>
        </Marker>
      ))}




    </MapContainer>
    
        </div>
    )
}
}

export default Mount;

*/


export default function Mount(){

  const[output,setoutput]=useState([])
  
  React.useState(() => {
    
 
  
      const url = 'http://localhost:9000/findall';
   
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
     .then(response=>{
    setoutput(response)})
  
     .catch(() => console.log("can't access " + url + " response. "))

     
  },[]);

return(
  <div>
   
     
          <MapContainer center={[17.4118198,78.3986729]} zoom={15} scrollWheelZoom={true}>
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
             
             
           </div>
           </Popup>
         </Marker>
       ))}
 
 
 
 
     </MapContainer>
     
    
</div>
);

}