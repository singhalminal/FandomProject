import React,{Component} from 'react';
import {BrowserRouter as Router,Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Characterdesc from './Characterdesc';
import loading from './loading.gif';
class Character extends Component{
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
                  <Link to={"/character"+i.id}><div className="id" align="center" >
                  {i.species}
              </div>
              <div className="name" align="center">
                  {i.name}
              </div>
              <div className="residents" align="center">
                  {i.status}
              </div>
              </Link>
              </div>
              <Route exact path= {'/character'+i.id} render={()=>{return(<Characterdesc item={this.state.items} id={i.id}/>);}}/>
              </Router>




    })
  }
}
  funi(i){
    return(
      <Characterdesc item={this.state.item} id={i}/>
    )
  }
  handleChange(event){
    this.setState({flag:true});
  }

render(){

  const s=this.state.flag?{display:'none'}:{};
  return(

  <div>
    <div style={s}><h1><i>Characters</i></h1><hr/></div>
  <div id="main">
    {this.display()}
    </div>
  </div>

  );
}
async componentDidMount(){
  const res=await fetch("https://rickandmortyapi.com/api/character/");
  const data=await res.json();
  console.log(data);
  this.setState({items:data.results,loading:false});
}
}
export default Character;
