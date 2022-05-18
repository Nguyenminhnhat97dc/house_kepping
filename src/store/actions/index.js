import * as Types from "../../constants/ActionType";

export const actFetchProvider = (providers) => {
    return{
        type : Types.FETCH_PROVIDER,
        providers 
    }
}