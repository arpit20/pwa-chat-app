export const addUser  = (user) =>{
  return{
      type:"ADD_USER" ,
      payload:user
  }
}

export const selectUser = (user)=>{
    return{
        type:"SELECT_USER",
        payload:user
    }
}

export const sendMessage  = (msg) =>{
    return{
        type:"SEND_MESSAGE" ,
        payload:msg
    }
}

export const receiveMessage  = (msg) =>{
    return{
        type:"RECEIVE_MESSAGE" ,
        payload:msg
    }
}

export const loginUser = (emailId) => {
    return{
        type:"LOGIN",
        payload:emailId
    }
}

export const validateSend = (isValid) => {
    return{
        type:"DISABLE_SEND",
        payload:isValid
    }
}

export const filterMessages = (filter) => {
    return{
        type:"FILTER_MSG",
        payload:filter
    }
}

export const toggleFilterPanel = () =>{
    return{
        type:"TOGGLE_FILTER_PANEL",
        payload:""
    }
}


export const searchMessages = (query) =>{
    return{
        type:"SEARCH_MSGS",
        payload:query
    }
}
