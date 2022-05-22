import * as Types from "../../constants/ActionType";

export const actFetchProvider = (providers) => {
    return{
        type : Types.FETCH_PROVIDER,
        providers 
    }
}

export const actFetchRequirementCustomer = (requirementCustomer) =>{
    return{
        type : Types.FETCH_REQUIREMENTCUSTOMER,
        requirementCustomer
    }
}

export const actFetchServices = (services) => {
    return{
        type : Types.FETCH_SERVICES,
        services
    }
}