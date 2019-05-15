import React,{Component} from 'react';
import {BrowserRouter as Router,Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Episodedesc from './Episodedesc';
import loading from './loading.gif';
class Episode extends Component{
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
  }else{
    const style=this.state.flag?{display:'none'}:{fontFamily:'times new roman',cursor:'pointer'}
    return this.state.items.map(i=>{
      return <Router><div className="loc" style={style} onClick={this.handleChange}>
                  <Link to={"/episode"+i.id}><div className="id" align="center" >
                  {i.episode}
              </div>
              <div className="name" align="center">
                  {i.name}
              </div>
              <div className="residents" align="center">
                  {i.air_date}
              </div>
              </Link>
              </div>
              <Route path= {'/episode'+i.id} exact render={()=>{return(<Episodedesc item={this.state.items} id={i.id}/>);}}/>
              </Router>
    })
  }
}
  funi(i){
  return(
    <Episodedesc item={this.state.item} id={i}/>
  )
}
handleChange(event){
    this.setState({flag:true});
}
render(){

  const s=this.state.flag?{display:'none'}:{};
  return(
  <div>
    <div style={s}><h1><i>Episodes</i></h1><hr/></div>
  <div id="main">
    {this.display()}
    </div>
  </div>

  );
}
async componentDidMount(){
  const res=await fetch("https://rickandmortyapi.com/api/episode/");
  const data=await res.json();
  console.log(data);
  this.setState({items:data.results,loading:false});
  }
}
export default Episode;
