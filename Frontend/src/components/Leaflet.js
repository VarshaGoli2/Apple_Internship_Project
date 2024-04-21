import React,{Component} from 'react'
import './Leaflet.css'
import { MapContainer,TileLayer,Marker,Popup } from 'react-leaflet'

class Leaflet extends Component
{
  constructor(props)
  {
    super(props)
    this.state={
      lat:this.props.lat,
      long:this.props.long

    }
  }
  render()
  {  
    return(
      <div>
           
      </div>
    )
  }
}
/*export default function Leaflet(props) {
  return(

     
    <MapContainer center={[20.5937, 78.9629]} zoom={6} scrollWheelZoom={true}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
 
  
</MapContainer>


/*export default function Leaflet() {

  const filteredStation=TeslaData.filter(item=> item.address.country==="Italy")
  console.log(TeslaData)
  return (
    <MapContainer center={[42.585444, 13.257684]} zoom={9} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {filteredStation.map(item => (
        <Marker 
        key={item.id}
        position={[item.gps.latitude, item.gps.longitude]}>
          <Popup position={[item.gps.latitude, item.gps.longitude]}>
          <div>
            <h2>{"Name :" + item.name}</h2>

          </div>
          </Popup>
        </Marker>
      ))}




    </MapContainer>

  )
}*/