import React from 'react';

import {loginUser} from '../actions/action';
import store from '../store';
import socket from '../socket';

import {receiveMessage} from  '../actions/action';
export default class LoginContainer extends React.Component{

    constructor(props){
        super(props)
    }


    loginFormHandler = ()=>{
        let emailId=this.inputElem.value;
        this.props.history.push('/user');
        socket.emit('join',{email:emailId});        
        store.dispatch(loginUser(emailId));
        socket.emit('getAllUsers',{user:emailId});
        socket.on('message',(msg)=>store.dispatch(receiveMessage(msg)));
        
    }

    render(){
        return(
          <div>
              <form onSubmit={this.loginFormHandler}>
                  <label htmlFor="email">Enter emailId:</label>
                  <input type="text" ref={(elem)=>this.inputElem=elem} name="email"></input> 
                  <input type="submit" value="Enter chat"></input>
              </form>
          </div>
        )
    }
}
