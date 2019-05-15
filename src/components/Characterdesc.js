import React,{Component} from 'react';
import {BrowserRouter as Router,Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Episodelink from './Episodelink';
import loading from './loading.gif';
class Characterdesc extends Component{
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
      return <img src={loading} style={{paddingLeft:'170%'}}/>
    }else{
              const style=this.state.flag?{width:'320%',height:'100%'}:{display:'none'};
              const pstyle=this.state.pf?{display:'none'}:{fontSize:'20px',padding:'10px'};
              const p1style=this.state.pf?{display:'none'}:{fontSize:'20px'};
              const listyle=this.state.pf?{display:'none'}:{};
              const ols=this.state.pf?{margin:'0px',padding:'0px'}:{};
              const imgs=this.state.pf?{display:'none'}:{float:"left",margin:'20px'};
              return <div style={style}>
              <h1 style={listyle}><i>Character - {this.props.item[this.props.id-1].name}</i></h1>
              <hr style={listyle}/><br style={listyle}/>
              <span><img src={this.props.item[this.props.id-1].image} style={imgs} alt="img"/></span>
              <p style={pstyle}><b>Species : </b>{this.props.item[this.props.id-1].species}<br/><br/><br/>
              <b>Status : </b>{this.props.item[this.props.id-1].status}<br/><br/><br/>
              <b>Gender : </b>{this.props.item[this.props.id-1].gender}<br/><br/><br/>
              <b>Origin : </b>{this.props.item[this.props.id-1].origin.name}<br/><br/><br/>
              <b>Last Location : </b>{this.props.item[this.props.id-1].location.name}<br/></p>
              <p style={p1style}><b>Episodes</b></p>
              <ol style={ols}>
              {this.state.res.map(i=>{
                  return <Router><li style={listyle}><Link to={"/episode"+i.id} onClick={this.set}>{i.name}</Link></li>
                  <Route exact path={"/episode"+i.id} render={()=>{return(<Episodelink item={i}/>);}}/>
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
  for(var i=0;i<this.props.item[this.props.id-1].episode.length;i++){
  const res=await fetch(this.props.item[this.props.id-1].episode[i]);
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
export default Characterdesc;
