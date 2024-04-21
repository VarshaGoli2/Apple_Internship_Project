import React,{Component} from "react";
import Updatevote from "./Updatevote";
class Vote extends Component{

    constructor(props)
    {
        super(props)

        this.state={
          show: false,
            incidentId:this.props.id,
            upvote:this.props.up,
           downvote:this.props.dn,
           reportCount:this.props.rc
        }
        this.upvoteHandler=this.upvoteHandler.bind(this)
        this.downvoteHandler=this.downvoteHandler.bind(this)
    }
   
upvoteHandler=()=>
{  this.setState({
    upvote: this.state.upvote+1,
    show: true 
    
})
 
       
      }

downvoteHandler=()=>
{  this.setState({

    downvote: this.state.downvote+1,
    show: true 
    
})

}

renderNext = () => (
  <div>

    <button type="text" onClick={this.upvoteHandler}>
     upvote
    </button>
    <button type="text" onClick={this.downvoteHandler}>
     downvote
    </button>
    
  </div>
);


    render()
    {    
      const { show } = this.state;
      //window.location.reload(false)
        return(
 <div>
    
     { this.renderNext() }
      { show && <Updatevote id={this.state.incidentId} up={this.state.upvote} dn={this.state.downvote} rc={this.state.upvote-this.state.downvote}/> }
 </div>

        )
    }
}

export default Vote