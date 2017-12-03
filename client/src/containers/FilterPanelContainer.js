import React from 'react';
import {connect} from 'react-redux';

import {filterMessages,toggleFilterPanel} from '../actions/action';
import { FilterPanelComponent } from "../components/FilterPanelComponent";

class FilterPanelContainer extends React.Component{

    constructor(props){
        super(props)
        this.sortCat=[
            {name:"Name",value:"user",type:"asc"},
            {name:"Time",value:"timestamp",type:"desc"}
        ]

        this.filterCat=[
            {name:"Text",value:"text"},
            {name:"Image",value:"image"},
            {name:"Doc",value:"doc"},
            {name:"Video",value:"video"},
        ]
    }


    render(){
        return(
          <FilterPanelComponent {...this.props} sortCategories={this.sortCat} 
                    filterCategories={this.filterCat}></FilterPanelComponent>
        )
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        applyFilter:(filterParam)=>{
            dispatch(filterMessages(filterParam))
            dispatch(toggleFilterPanel());
        }
    }
}


const mapStateToProps = (state)=>{
    let {filter,isFilterPanelVisible} = state;
    return {filter,isFilterPanelVisible};
}

export default connect(mapStateToProps,mapDispatchToProps)(FilterPanelContainer)
