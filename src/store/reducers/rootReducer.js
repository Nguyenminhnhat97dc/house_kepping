import * as Types from "../../constants/ActionType";
var initState = {
    requirement : [],
    services :[]
}

const rootReducer = (state = initState, action) => {
    switch(action.type){
        case Types.FETCH_PROVIDER:
            state = {...action.providers}
            return state 
        case Types.FETCH_REQUIREMENTCUSTOMER:
            state = {...state, requirement: action.requirementCustomer}
            return state
        case Types.FETCH_SERVICES:
            state = {...state, services : action.services}
            return state
        default: return state
    }
}

export default rootReducer;