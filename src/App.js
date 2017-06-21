import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Conversation from "./Conversation"
// import Conversation2 from "./Dragging"

var my_data = [
    {'isLeft':false,
    'text':"Как дела?"},
    {'isLeft':true,
        'text':"Отлично!"}

];

class App extends Component {
  constructor (props) {
      super(props);
      this.state = {
          message_list: [],
      }
      this.onSubmitM=this.onSubmitM.bind(this);
  }

  onSubmitM(e) {
      // console.log(e);
      if (my_data.length>0)  {this.setState({message_list: this.state.message_list.concat(my_data.shift()),
      })}
  }
    render() {
    return (
      <div className="App">
          <Conversation messages={this.state.message_list}/>
              <button autoFocus className="outer" onClick={this.onSubmitM}>Submit</button>
      </div>
    );
  }
}






export default App;
