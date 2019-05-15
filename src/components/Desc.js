import React,{Component} from 'react';
import './Desc.css';
import Location from './Location';
import Character from './Character';
import Episode from './Episode';
import Characterlink from './Characterlink';
class Desc extends Component{
  state={
    id:0,
    items:[]
};
display(a){
  if(a===0){
      return(
        <div>
        <h1><i>Rick and Morty</i></h1><hr style={{marginBottom:'0px'}}/>
        <span style={{color:'grey',fontSize:'13px',fontFamily:'times new roman'}}>From Wikipedia,the free encyclopedia</span>
        <p><b>Rick and Morty </b>is an American adult animated science fiction sitcom created by Justin Roiland and Dan Harmon for Cartoon Network's late-night programming block ‘Adult Swim’. The series follows the misadventures of cynical mad scientist Rick Sanchez and his good-hearted but fretful grandson Morty Smith, who split their time between domestic life and interdimensional adventures. The series premiered on December 2, 2013, and the third season concluded on October 1, 2017. In May 2018,the series was picked up for an additional 70 episodes over an unspecified number of seasons.</p>
        <p>Roiland voices the eponymous characters, with Chris Parnell, Spencer Grammer and Sarah Chalke voicing the rest of the family. The series originated from an animated short parody film of Back to the Future, The Real Animated Adventures of Doc and Mharti, created by Roiland for Channel 101, a short film festival co-founded by Harmon. When Adult Swim approached Harmon for television show ideas, he and Roiland decided to develop a program based on the short. The series has been acclaimed by critics for its originality, creativity and humor.
        </p>

        </div>
      )
  }

  else if(a===1){
    return(
    <div>
      <Location />
      </div>
    );
  }
  else if(a===2){
    return (<div>
      <Character />
      </div>
    )
  }
  else if(a===3){
    return (<div>
      <Episode />
      </div>
    )}
  else if(a===4){
      return <div><Characterlink item={this.props.item} /></div>
    }

  }
render(){
  return(
    <div id="description">
    {
      this.display(this.props.id)
    }
    </div>
  );
}

}
export default Desc;
