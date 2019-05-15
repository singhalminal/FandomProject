import React,{Component} from 'react';

import './App.css';
import Header from'./components/Header';
import Content from'./components/Content';

class App extends Component{
constructor(props){
super(props)
  this.state={
    flag:false,
    text:"",
    item:[],
    id: 0
  }

  this.update=this.update
}
update=(flag,text)=>{this.setState({flag,text})}

render(){

  return (

    <div>
    {this.display()}

</div>
    );
  }
  display(){

    if(this.state.text.length==0)
    {
      return <div><Header updates={this.update}/>
      <Content chars=""/>
      </div>
    }
    else {

      return <div><Header updates={this.update}/>
      <span style={{float:'right'}}>Please click on the search button again without entering any character to access link panel</span>
      <Content chars={this.state.text}/>

      </div>
    }
  }
}

export default App;
