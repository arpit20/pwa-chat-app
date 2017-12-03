import React from 'react';

export const UserListComponent = (props) =>{
    // Array.prototype.push.apply(props.users,["arpit","john","rohan"]);
    return(
        <div className="user-list">
            {
                props.users.map((user,index)=>{
                    return <div key={index} className="user-list__item" 
                                    onClick={(e)=>props.userClickHandler(user)}>
                                <div><i class="material-icons">person</i></div>     
                                <div>
                                    <div>{user}</div>
                                    <i class="material-icons">chevron_right</i>
                                </div>
                           </div>
                })
            }
        </div>
    );
}
