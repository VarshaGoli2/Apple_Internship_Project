import React,{Component} from "react";
import './Accidentform.css'
import Delete from "./Delete";
import Edit from "./Edit";
class User extends Component
{
 
    constructor(props)
    {
        super(props)
        this.state=
        {   'output':[],
            deviceId:71,
            
        }

    }
    componentDidMount()
    {
      
          const url = 'http://localhost:9000/incidents/list/'+this.state.deviceId;
    
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
        
            .then(response => this.setState({ 'output' : response}))
    
            .catch(() => console.log("can't access " + url + " response. "))
    
        }



   

    render()
    {
        return(
            <div>
             {  this.state.output.map(function(item){ 
   
        return (
            <div className="user">
            <table>
            <tbody>
             <th>Incident Id</th>
             <th> type</th>
             <th>subtype</th>
             <th> severityLevel</th>
             <th> damages</th>
             <th> location</th>
             <th> timeStamp</th>
             <th> additional Information</th>
             <th> upvote</th>
             <th> downvote</th>
             <th> report count</th>
             <React.Fragment key={item.incidentId}>
             <tr>
                <td>{item.incidentId}</td>
                 <td>{item.incidentType}</td>
                 <td>{item.subtype}</td>
               <td>{item.severityLevel}</td>
              <td>{item.damages}</td>
                 <td>{item.latitude} {item.longitude}</td>
                 <td>{item.timeStamp}</td>
                 <td>{item.addInfo}</td>
                 <td>{item.upvote}</td>
                 <td>{item.downvote}</td>
                 <td>{item.reportCount}</td>
                 <br></br><br></br><br></br>

                
          <Delete id={item.incidentId}/>
          <Edit id={item.incidentId} Damages={item.damages} severity={item.severityLevel} addtnlinfo={item.addInfo}/>
             </tr> 
             
    </React.Fragment>
    </tbody>
             </table>
            
          
            </div>
           
            
        )
  })
            
        }
            </div>
        )
    }
}

export default User