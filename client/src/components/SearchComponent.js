import React from 'react';

export const SearchComponent = (props) => {
    return(
             <div className="search-box">
                 <div>
                    <input type="search" onChange={props.searchHandler}></input>
                    <i className="material-icons icon-search">search</i>
                </div>
                <i onClick={props.filterClickHandler} className=            {"material-icons "+(!props.isFilterEnabled?              "filter-disabled":"")}>filter_list</i>
            </div>
    )
}