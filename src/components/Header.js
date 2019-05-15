import React,{Component} from 'react';
import logo from './logo.png';
import search from './search.png'
import './Header.css';
import Characterlink from './Characterlink';
import Content from './Content';
const p={
  float:'right'
};
const q={
  margin:'0%',
  paddingTop:'5%'
};

class Header extends Component{
constructor(){
  super();
  this.func=this.func.bind(this);
  this.change=this.change.bind(this);
  this.alter=this.alter.bind(this);
  this.state={
    items:[],
    ch:""
  }

}
funi(){
  console.log(this.ref.name.value);
  /*for(var i=0;i<this.state.items.length;i++){
    if(this.state.items[i].name.equals(this.ref.name.value)){

      return <Characterlink item={this.state.items[i]}/>*/
}
alter(){
  this.setState({});
}
change(){
  document.getElementById("ch").value='';
}
  render(){

    return(

      <div id="top">

      <img src={logo} alt="logo" id="logo"/>
      <div id="search">
      <p class="content" style={q}>Character</p>
      <input type="text" placeholder="Enter Any Character(case sensitive)" onChange={this.alter} id="ch" />
      <p class="content" style={p} >
      <img src={search} alt="search" onClick={this.change} onMouseDown={(e)=>this.props.updates(true,document.getElementById("ch").value,0)}/>
      </p>
      </div>
      </div>
    );
  }
  func(){
    var x=document.getElementById("ch").value;
    var content = new Content;


    if(x.length==0)
    content.searchbar("",this.state.items);
    else{
    content.searchbar(x,this.state.items);
  }
      }
  getcha(){
    console.log()
    return this.state.ch;
  }
  async componentDidMount(){
    const res=await fetch("https://rickandmortyapi.com/api/character/");
    const data=await res.json();
    console.log(data);
    this.setState({items:data.results});
  }
}
export default Header;
