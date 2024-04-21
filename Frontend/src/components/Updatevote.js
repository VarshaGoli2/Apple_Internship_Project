import React,{Component} from "react";
import Search from "./Search";
import Vote from "./Vote";

class Updatevote extends Component
{ 
    constructor(props)
    {
        super(props)

        this.state={
            
            incidentId:this.props.id,
            upvote:this.props.up,
           downvote:this.props.dn,
           reportCount:this.props.rc
        }
    
    }

   
    componentDidMount()
    {
        const body={
            incidentId:this.state.incidentId,
            upvote:this.state.upvote,
            downvote:this.state.downvote,
            reportCount:this.state.reportCount
        }
       
    console.log(body)
        const url = "http://localhost:9000/incidents/vote";
        let headers=new Headers();
        headers.append('Content-Type','application/json');
        headers.append('Accept','application/json');
        headers.append('Access-control-Allow-origin',url);
        headers.append('Access-control-Allow-Credentials','true');
        headers.append('POST','GET');
        fetch(url, {
          headers: headers,
          method: 'POST',
          body: JSON.stringify(body)
        })
       
           
          .then(response => response.json())
          
          .catch(() => console.log("can't access" + url + " response. "))
      
       }
    
     
    render()
    {
        return(
            <div>
                 
            </div>
        )
    }
}

export default Updatevote