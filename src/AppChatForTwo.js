/**
 * Created by nikolaynikiforov on 20/06/2017.
 */
import React, { Component } from 'react';
import Conversation from "./Conversation"


class AppChatForTwo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message_list: [],
        }
        this.handleR=this.handleR.bind(this);
        this.handleL=this.handleL.bind(this);
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
        render() {
            return (
                <div className="App">
                    <Conversation messages={this.state.message_list}/>
                    <div >
                        <Submit
                            onSubmitted={this.handleR}
                        />
                    </div>
                    <div>
                        <Submit
                            onSubmitted={this.handleL}/>
                    </div>
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