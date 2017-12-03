export const sortMessages = (messages,sortBy)=>{


  if(sortBy=="user")
    messages.sort(function(a,b){
       return a.user.toLowerCase().localeCompare(b.user.toLowerCase());
    })

  else if(sortBy=="timestamp")  
    messages.sort(function(a,b){
        if(a.timestamp > b.timestamp)
            return -1 ;
        else if(a.timestamp<b.timestamp)
            return 1;
        else 
            return 0;
    })
    return messages;
}


export const filterMessages = (messages,filterBy)=>{
    if(!filterBy || filterBy=="")
        return messages;
    else {
        return messages.filter((msg)=>{
            return  msg.dataType==filterBy
        })
    }
}

export const searchMessages = (messages,query) =>{
    if(!query || query=="")
        return messages;
    else {
        return  messages.filter((msg)=>{
            return (msg.user.toLowerCase().indexOf(query.toLowerCase())>=0 ||
                    msg.text.toLowerCase().indexOf(query.toLowerCase())>=0)
        })
    }
}