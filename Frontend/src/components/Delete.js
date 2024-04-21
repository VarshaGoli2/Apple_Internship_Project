import React,{Component} from "react";
import './Delete.css';
class Delete extends Component
{
    constructor(props)
    {
   
   super(props)
   
   this.state={

       incidentId:this.props.id
   }

   this.deleteHandler=this.deleteHandler.bind(this)
   
       }

       deleteHandler=(event)=>
    {  
   
    const url = "http://localhost:9000/incidents/"+this.state.incidentId
    //console.log(body)
    let headers=new Headers();
    headers.append('Content-Type','application/json');
    headers.append('Accept','application/json');
    headers.append('Access-control-Allow-origin',url);
    headers.append('Access-control-Allow-Credentials','true');
    headers.append('POST','GET','DELETE');
    fetch(url, {
      headers: headers,
      method: 'DELETE',
      
    })

 alert("incident deleted")
window.location.reload(false)
.catch((err)=>{
    console.log(err)
})
    
      .catch(() => console.log("can't access" + url + "response. "))
      
  
}     

   
    render()
    {
        return(
            <div className="dele">
                <button onClick={this.deleteHandler}>DELETE</button>
            </div>
        )
    }
}

export default Delete