import React from 'react';
import {connect} from 'react-redux';

import store from '../store';
import {MessageComponent} from '../components/MessageComponent';
import {selectUser} from '../actions/action';
import SearchContainer from './SearchContainer';
import {sortMessages,filterMessages,searchMessages} from '../utils';

class MessageListContainer extends React.Component{

    constructor(props){
        super(props)
    }


    componentDidMount(){
    }

    userClickHandler = (user) =>{
        
                this.props.history.push('/userview');
                store.dispatch(selectUser(user));
    }

    render(){
        return (
            <div>
                <SearchContainer isFilterEnabled={true}></SearchContainer>
                <div className="msg-list">
                    <MessageComponent {...this.props} userClickHandler={this.userClickHandler}></MessageComponent>
                </div> 
            </div>  
        )
    }
}

const mapStateToProps = (state) =>{
    let messages = [...state.messages];
    let map={} , filteredMsgs=[];
    while(messages.length>0){
        let msg = messages.pop();
        let user = (msg.type=="send" ? msg.to : msg.from) ;
        if(!map[user]){
            map[user] = true;   
            msg.user=user;
            filteredMsgs.push(msg);
        }
    }   

    filteredMsgs = searchMessages(filteredMsgs,state.searchMsgQuery);
    let sortBy = state.filter.sortBy;
    let filterBy = state.filter.filterBy;
    filteredMsgs = sortMessages(filteredMsgs,sortBy);
    filteredMsgs = filterMessages(filteredMsgs,filterBy);
    return {messages:filteredMsgs};
}

export default connect(mapStateToProps)(MessageListContainer)