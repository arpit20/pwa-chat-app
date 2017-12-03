import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';

import MessageListContainer from '../containers/MessageListContainer';
import UserListContainer from '../containers/UserListContainer';
import FilterPanelContainer from '../containers/FilterPanelContainer';

export default class MainLayout extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        // const headerTitle = this.props.location.pathname == "messages" ? "Messages" : "Users";
        return(
            <div className="main-layout container">
                <header>
                    <div className="nav-icon">
                        <i className="nav-icon material-icons">dehaze</i>
                    </div>
                    <h4>
                        Chat
                    </h4>
                    <div className="face-icon">
                        <i className="material-icons">face</i>
                    </div>
                </header>
                <div className="content">
                    <Switch>
                        <Route path="/user" exact component={UserListContainer}></Route>
                        <Route path="/user/messages"  component={()=>(<div><MessageListContainer/><FilterPanelContainer/></div>)}></Route>
                    </Switch>
                </div>
                <footer className="container">
                 
                        <Link to="/user" activeclassname="active"><i className="material-icons">people</i></Link>
                        <Link to="/user/messages" activeclassname="active"><i className="material-icons">chat_bubble</i></Link>
                        <Link to="" onClick={(e)=>e.preventDefault()} activeclassname="active"><i className="material-icons">settings</i></Link>

                   
                </footer>
            </div>
        )
    }

} 