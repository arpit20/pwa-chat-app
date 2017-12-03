

const initialState= {
    users:[],
    messages:[],
    loggedUser:"",
    receiver:"",
    isSendValid:false,
    filter:{sortBy:"timestamp",filterBy:""},
    isFilterPanelVisible:false,
    searchMsgQuery:""
}

export const reducer = (state=initialState,action) =>{
    let newState;
    switch(action.type){
        case "LOGIN":
            newState= Object.assign({},state,{loggedUser:action.payload})
            return newState;
        case "ADD_USER":
            let users= [...state.users,...action.payload]
            newState = Object.assign({},state,{users})
            return newState;
        case "SEND_MESSAGE":
            action.payload.type="send";
            let updatedMessages = [...state.messages,action.payload];
            newState = Object.assign({},state,{messages:updatedMessages})
            return newState;
        
        case "RECEIVE_MESSAGE":
            action.payload.type="receive";
            action.payload.timestamp=Date.now();
            let newMessages = [...state.messages,action.payload];
            newState = Object.assign({},state,{messages:newMessages})
            return newState;

        case "SELECT_USER" :
             newState =  Object.assign({},state,{receiver:action.payload})
             return newState;

        case "DISABLE_SEND" :
            newState =  Object.assign({},state,{isSendValid:action.payload})
            return newState;

        case "FILTER_MSG" :
           
            newState =  Object.assign({},state,{filter:action.payload})
            return newState;

        case "TOGGLE_FILTER_PANEL":
            newState =  Object.assign({},state,{isFilterPanelVisible:!state.isFilterPanelVisible})
            return newState;

        case "SEARCH_MSGS":
            newState =  Object.assign({},state,{searchMsgQuery:action.payload})
            return newState;
            
        default:
            return initialState;

    }
}