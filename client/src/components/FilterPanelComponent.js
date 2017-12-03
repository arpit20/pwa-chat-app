import React from 'react';

export const FilterPanelComponent = (props) =>{

    return(
        <div className={(props.isFilterPanelVisible?'filter-panel__visible':'') + " filter-panel"}>
            <div className="filter-panel__header">
                Filters
                <button onClick={()=>
                    props.applyFilter({sortBy:this.sortbyValue,filterBy:this.filterbyValue})}
                >DONE
                </button>
            </div>
            <div className="filter-panel__content">
                <div>
                    <div className="filter-label">Sort by</div>
                    <div className="filter-cats">
                        {
                            props.sortCategories.map((cat)=>
                                <div onClick={()=>this.sortbyValue=cat.value}
                                 className={props.filter.sortBy==cat.value?'active':''}>{cat.name}</div>
                            )
                        }
                    </div>
                </div>
                <div>
                    <div className="filter-label">Filter by</div>
                    <div className="filter-cats">
                        {
                            props.filterCategories.map((cat)=>
                                <div onClick={()=>this.filterbyValue=cat.value}
                                    className={props.filter.filterBy==cat.value?'active':''}>{cat.name}</div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}