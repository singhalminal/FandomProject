import React,{Component} from 'react';
import {BrowserRouter as Router,Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Header from './Header';
import './Content.css';
import Desc from './Desc';
import Characterlink from './Characterlink';
class Content extends Component{



  constructor(){
    super();
    this.loc=this.loc.bind(this);
    this.char=this.char.bind(this);
    this.epi=this.epi.bind(this);
    this.state={
      items:[],
      id:0,
      show:false
    };
    }

  handleChange(e){
      var {value} = e.target;
      this.setState({
        id: value
      },() => this.props.changeValue(value));
    }
    render(){
    return(
      <Router>
      <div id="q">
      <table width="100%">
      <tr>
        <td id="side" valign="top">
          <table align="center">
            <tr style={{paddingTop:'10%'}}><td align="center"><Link to={"/lc"} onClick={this.loc} >Locations</Link></td></tr>
            <tr style={{paddingTop:'2%'}}><td align="center"><Link to={"/ch"} onClick={this.char} >Characters</Link></td></tr>
            <tr style={{paddingTop:'2%'}}><td align="center"><Link to={"/ep"} onClick={this.epi} >Episodes</Link></td></tr>
          </table>
        </td>
        <td valign="top">
          <div id="refs">

          {this.searchbar()}

          </div>
        </td>
      </tr>
      </table>
        </div>
        <Route exact path="/lc"/>
        <Route exact path="/ch"/>
        <Route exact path="/ep"/>
      </Router>
    );

}
p(){
  }
loc(){
  this.setState({id:1,show:true});
}

char(){
  this.setState({id:2,show:true});
}
epi(){
  this.setState({id:3,show:true});

}
sbar(){
  var header=new Header;
  return header.func();
}
searchbar(){
  if(this.props.chars.length==0){
      return <Desc
      id={this.state.id}
    />

  }
  else{
    const divs=this.state.show?{}:{display:'none'};
    const divv=this.state.show?{display:'none'}:{};
      for(var i=0;i<this.state.items.length;i++){

      if(this.props.chars===this.state.items[i].name)
    { console.log(this.state.id);

      return <Characterlink item={this.state.items[i]}/>
    
    }
  }
  return <h1>Not Found</h1>
}
}
async componentDidMount(){
  const res=await fetch("https://rickandmortyapi.com/api/character/");
  const data=await res.json();
  console.log(data);
  this.setState({items:data.results});
}
}
export default Content;
