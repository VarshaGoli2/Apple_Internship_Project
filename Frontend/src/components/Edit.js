import React,{Component} from "react";
import './Edit.css'
class Edit extends Component
{
    constructor(props)
    {
   
   super(props)
   
   this.state={
 
       
       incidentId:this.props.id,
       severityLevel:this.props.severity,
       damages:this.props.Damages,
       addInfo:this.props.addtnlinfo

   }

   this.editHandler=this.editHandler.bind(this)
   
       }

       editHandler=(e)=>{ 
           const body={
               incidentId:this.state.incidentId,
               severityLevel:this.state.severityLevel,
               damages:this.state.damages,
               addInfo:this.state.addInfo
            
           }
       
    const url = "http://localhost:9000/incidents/update"
    console.log(this.state)
    e.preventDefault()
    let headers=new Headers();
    headers.append('Content-Type','application/json');
    headers.append('Accept','application/json');
    headers.append('Access-control-Allow-origin',url);
    headers.append('Access-control-Allow-Credentials','true');
    headers.append('POST','GET','PUT');
    fetch(url, {
      headers: headers,
      method: 'POST',
      body:JSON.stringify(body)
    })

    
.then((response)=>response.json())
.then((json)=>console.log(json))
window.location.reload(false)
.catch(() => console.log("can't access" + url + "response. "))
  
}     

updateSeverity=(e)=>{
    this.setState({
        severityLevel: e.target.value 
      });
    }
updateDamages=(e)=>{
    this.setState({
        damages: e.target.value 
        });
    }
updateInfo=(e)=>{
    this.setState({
        addInfo: e.target.value 
        });
    }
        
    
    render()
    {
        return(
            <div className="uss">
                <div className="heading"><h4>Enter details to update</h4></div>
                Severity :
                <input type="text" className="severityLevel" placeholder="enter new severity" onChange={this.updateSeverity}></input>
                <br></br>
                Damages :
                <input type="text" className="damages" placeholder="enter new damages" onChange={this.updateDamages}></input>
                <br></br>
                Additional Information :
                <input type="text" className="addInfo"  placeholder="enter new info" onChange={this.updateInfo}></input>
                <br></br>
                <button onClick={this.editHandler}>Update</button>
                <div className="vertical"></div>
            </div>
        )
        
    }
    

}


export default Edit