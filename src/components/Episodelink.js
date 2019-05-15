import React,{Component} from 'react';
import {BrowserRouter as Router,Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Characterlink from './Characterlink';
import loading from './loading.gif';
class Episodelink extends Component{
constructor(){
  super();
  this.set=this.set.bind(this);
}
state={
  res:[],
  loading:true
};
  fun(){
    if(this.state.loading){
      return <img src={loading} style={{paddingLeft:'50%'}}/>
    }else{
    const style=this.state.flag?{width:'105%',height:'100%'}:{display:'none'};
    const pstyle=this.state.pf?{display:'none'}:{fontSize:'20px',padding:'20px'};
    const p1style=this.state.pf?{display:'none'}:{fontSize:'20px'};
    const listyle=this.state.pf?{display:'none'}:{};
    const ols=this.state.pf?{margin:'0px',padding:'0px'}:{};
    return <div style={style}>
    <h1 style={listyle}><i>Episode - {this.props.item.name}</i></h1>
    <hr style={listyle}/><br style={listyle}/>
    <p style={pstyle}><b>Episode Number : </b>{this.props.item.episode}<br/><br/>
    <b>Air Date : </b>{this.props.item.air_date}<br/><br/>
    <b>Created : </b>{this.props.item.created}</p>
    <p style={p1style}><b>Characters</b></p>
    <ol style={ols}>
    {this.state.res.map(i=>{

        return <Router><li style={listyle}><Link to={"/character"+i.name} onClick={this.set}>{i.name}</Link></li>
        <Route exact path={"/character"+i.name} render={()=>{return(<Characterlink item={i}/>);}}/>
        </Router>
    })
  }
    </ol>
      </div>
  }
}
  drname(p){
          return <li><a href={p}>{console.log(this.state.res)}</a></li>
      }
set(){
  this.setState({pf:true});
  this.fun();
}


async componentDidMount(){
  var arr=[];
  for(var i=0;i<this.props.item.characters.length;i++){
  const res=await fetch(this.props.item.characters[i]);
  const data=await res.json();
  arr[i]=data;
}
  this.setState({res:arr,flag:true,loading:false});
}
render(){
  return(
    <div>
    {this.fun()}
    </div>
    );
  }

}
export default Episodelink;
