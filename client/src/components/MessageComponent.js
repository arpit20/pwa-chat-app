import React from 'react';

export const MessageComponent = (props) => {
   return( props.messages.map((msg,index)=>{
      

            return <div key={index} className="msg-list__item"
                             onClick={(e)=>props.userClickHandler(msg.user)}>
                        <div><i className="material-icons">person</i></div>     
                        <div className="msg-content">
                            <div className="msg-info">
                                <div>{msg.user}</div>
                                <div>Yesterday</div>
                            </div>    
                            <div className="msg-text">{msg.text}</div>
                        </div>    
                        <div><i className="material-icons">chevron_right</i></div>     
                       
                    </div>
        
        })
    )
}