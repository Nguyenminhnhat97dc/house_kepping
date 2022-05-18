import * as Types from "../../constants/ActionType";
var initState = []

const rootReducer = (state = initState, action) => {
    switch(action.type){
        case Types.FETCH_PROVIDER:
            state = {...action.providers}
            return state 

        default: return state
    }
}

export default rootReducer;