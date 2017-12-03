import React from 'react';
import {connect} from 'react-redux';

import { SearchComponent } from "../components/SearchComponent";
import store from '../store';
import {toggleFilterPanel,searchMessages} from "../actions/action";

class SearchConatiner extends React.Component{

    constructor(props){
        super(props)
       
    }

    render(){
        return(
          <SearchComponent {...this.props}></SearchComponent>
        )
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        searchHandler:(e)=>{
            dispatch(searchMessages(e.target.value));
        },
        filterClickHandler:(e)=>{
            dispatch(toggleFilterPanel());
        }

    }
} 

export default connect(null,mapDispatchToProps)(SearchConatiner);