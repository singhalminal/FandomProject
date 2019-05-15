import React,{Component} from 'react';
import {BrowserRouter as Router,Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Locationdesc from './Locationdesc';
import loading from './loading.gif';
class Location extends Component{
  state={
    items:[],
    flag:false,
    loading:true
  };
constructor(){
  super();
  this.handleChange=this.handleChange.bind(this);
}
display(){
    if(this.state.loading){
      return <img src={loading} style={{paddingLeft:"35%"}}/>
    }
    else{
      const style=this.state.flag?{display:'none'}:{fontFamily:'times new roman',cursor:'pointer'}
        return this.state.items.map(i=>{
          return <Router><div className="loc" style={style} onClick={this.handleChange}>
                  <Link to={'/location'+i.id}><div className="id" align="center" >
                      {i.type}
                  </div>
                  <div className="name" align="center">
                      {i.name}
                  </div>
                  <div className="residents" align="center">
                      {this.dis(i.residents.length)}
                  </div>
                  </Link>
                  </div>


    <Route exact path= {'/location'+i.id} render={()=>{return(<Locationdesc item={this.state.items} id={i.id}/>);}}/>
    </Router>
        })
      }
    }
  handleChange(event){
    this.setState({flag:true,pf:false});
  }
  dis(a){
    if(a<=1)
    return a+" Resident";
    else
    return a+" Residents";
  }
render(){
  const s=this.state.flag?{display:'none'}:{};
  return(
    <div>
      <div style={s}><h1><i>Locations</i></h1><hr/></div>
    <div id="main">
      {this.display()}
      </div>
    </div>
  );
}
async componentDidMount(){
  const res=await fetch("https://rickandmortyapi.com/api/location/");
  const data=await res.json();
  console.log(data);
  this.setState({items:data.results,loading:false});
  }
}
export default Location;
