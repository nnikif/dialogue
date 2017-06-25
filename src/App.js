import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Conversation from "./Conversation"
// import Conversation2 from "./Dragging"

var my_data = [
    {'isLeft':false,
    'text':"Как дела?"},
    {'isLeft':true,
        'text':"Лучше некуда!"}

];
const base="http://127.0.0.1:8000/dialogues/";

class App extends Component {
  constructor (props) {
      super(props);
      this.state = {
          message_list: [],
          my_data: my_data,
          my_text:''
      }
      this.onSubmitM=this.onSubmitM.bind(this);

  }

  componentDidMount(){
      // console.log(window.location.pathname)
      // console.log(JSON.stringify(my_data))
      // this.postD();
      this.loadD()
      // console.log(this.state.my_text);
  }

  async loadD (){
      var d_number = window.location.pathname;
      d_number = d_number.match(/([^\/]*)\/*$/)[1]

      var sum = base+d_number;
      // console.log(sum);
      this.setState({
          my_text: await fetch(sum).then(response => response.json())
      })
      // console.log(this.state.my_text.text);
      var text1 = JSON.parse(this.state.my_text.text);
      this.setState({
          my_data: text1
      });
      console.log(text1);

  }


  onSubmitM(e) {
      // console.log(e);
      // console.log(this.state.my_text);
      if (this.state.my_data.length>0)  {
          var arrayS=this.state.my_data;
          this.setState({message_list: this.state.message_list.concat(arrayS.shift())})
          this.setState({my_data: arrayS})
      }
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
