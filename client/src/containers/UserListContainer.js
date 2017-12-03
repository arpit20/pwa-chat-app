import React from 'react';

import socket from '../socket';
import store from '../store';
import {addUser, selectUser} from '../actions/action';
import {connect} from 'react-redux';

import {UserListComponent} from '../components/UserListComponent';
import SearchContainer from './SearchContainer';
class UserListContainer extends React.Component{

    constructor(props){
        super(props)
         
    }

    componentDidMount(){
        socket.on('join',(users)=>{
            console.log(users)
            store.dispatch(addUser(users))
        });

    }
    
    userClickHandler = (user) =>{

    this.props.history.push('userview');
        store.dispatch(selectUser(user));
    }    

    render(){
        return (
            <div>
                <SearchContainer isFilterEnabled={false}></SearchContainer>
                <UserListComponent {...this.props} userClickHandler={this.userClickHandler} />
            </div>
        )
    }

}

const mapStateToProps = (state) =>{
    let {users} = state
    return {users};
    
}

// const mapDispatchToProps = (dispatch) =>{
//     return {
//         userClickHandler:this.userClickHandler
//     }
// }

export default connect(mapStateToProps)(UserListContainer)