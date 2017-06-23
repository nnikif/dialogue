/**
 * Created by nikolaynikiforov on 20/06/2017.
 */
import React, { Component } from 'react';
import Conversation from "./Conversation"

const root_of_d = '/d/'

class AppChatForTwo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message_list: [],
        }
        this.handleR=this.handleR.bind(this);
        this.handleL=this.handleL.bind(this);
        this.removeLast=this.removeLast.bind(this);
        this.saveD=this.saveD.bind(this);
    }
    handleR(message) {
        this.handleM(message, false)
    }

    handleL(message){
        this.handleM(message, true)
    }
    handleM (message, isLeft){
        if (message!==''){
        var msg={'isLeft':isLeft,
            'text':message};
        this.setState({message_list: this.state.message_list.concat(msg)})
}}
    async saveD(){
        var my_data_send=JSON.stringify(this.state.message_list)
        fetch('/dialogues/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: 'my_data',
                text: my_data_send

            })
        }).then(response => response.json())
            .then(responseJ =>{window.open(root_of_d+String(responseJ.id),'_self')})
    }
    removeLast(){
        var arrayS = this.state.message_list;
        arrayS.pop();
        this.setState({message_list: arrayS});
    }
        render() {
            return (
                <div className="App">
                    <Conversation messages={this.state.message_list}/>

                        <Submit
                            onSubmitted={this.handleR}
                        />

                        <Submit
                            onSubmitted={this.handleL}/>
                        <button onClick={this.removeLast}
                        className="submit">Remove Last</button>
                        <button onClick={this.saveD}
                                className="submit">Save the Dialogue</button>
                </div>
            );

    }

}



class Submit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            'message': ''
        }
        this.onMessageSent = this.onMessageSent.bind(this)
        this.onChange=this.onChange.bind(this)
    }

    onMessageSent(e) {
        this.props.onSubmitted(this.state.message)
        e.preventDefault()
        this.setState({"message": ''})
    }

    onChange(evt) {
        this.setState({"message": evt.target.value})

    }


    render() {
        return (
            <div className="outer">

                <form onSubmit={this.onMessageSent}>
                    <input ref="message"
                           value={this.state.message}
                           onChange={this.onChange}

                    />

                    {/*<input type="submit"/>*/}
                </form>
            </div>
        )

    }

}


export default AppChatForTwo;