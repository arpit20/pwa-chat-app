import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import socket from '../socket';

import store from '../store';
import {receiveMessage, sendMessage,validateSend} from '../actions/action';


class UserViewContainer extends React.Component{

    constructor(props){
        super(props)
    }

    componentDidMount(){
    //    socket.on('message',(msg)=>store.dispatch(receiveMessage(msg)));
    }



    sendMessageHandler = (e) =>{
        e.preventDefault();
        let text = this.inputElem.value;
        let msg = {from:this.props.loggedUser,to:this.props.receiver,text,dataType:"text"}
        store.dispatch(sendMessage(msg));
        socket.emit('message',msg);
    }

    inputChangeHandler = (e) =>{
        let text = this.inputElem.value;
        let canSubmit = (text && text.length>0);
        store.dispatch(validateSend(canSubmit));
    
    }

    render(){
        const messagesForReceiver = this.props.messages.filter((msg)=>{
            return (msg.to==this.props.receiver || msg.from==this.props.receiver)
        })
        // messagesForReceiver.push({text:"Hello how are you?",type:"send"});
        // messagesForReceiver.push({text:"HI, I am good. You?",type:"receive"});
        return (
            <div className="user-view">
                <header>
                    <a onClick={()=>this.props.history.goBack()} activeClassName="active"><i class="material-icons">chevron_left</i></a>
                    <div>
                        <i class="material-icons">face</i>
                        <h3>{this.props.receiver}</h3>
                    </div>
                  
                </header>
                <div className="content">
                   {
                       messagesForReceiver.map((message,index)=>{
                           return (<div className={(message.type=="send"?'user-msg__send':'user-msg__receive') + " user-view__msg"} 
                                        key={index}>
                                     <div>{message.text}</div>
                                     <div>8:39 PM</div>
                                  </div>)
                       })
                   }
                </div>
                <footer>
                    <form action="#" onSubmit={this.sendMessageHandler}>
                        <input type="text" onChange={this.inputChangeHandler} ref={(elem)=>this.inputElem = elem} name="input-message"></input>
                        <button type="submit" disabled={!this.props.isSendValid}><i class="material-icons">send</i></button>
                    </form>
                </footer>
            </div>    
        )
    }
}

const mapStateToProps = (state) =>{
     let {messages,loggedUser,receiver,isSendValid} = state
     return {messages,loggedUser,receiver,isSendValid}
}
export default connect(mapStateToProps)(UserViewContainer);