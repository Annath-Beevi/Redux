const initialStateCustomer = {
    fullName: "",
    nationalID: "",
    createdAt: "",
}

export function customerReducer(state = initialStateCustomer, action) {
    switch (action.type) {
        case "customer/createCustomer":
            return {
                ...state,
                fullName: action.payload.fullName,
                nationalID: action.payload.nationalID,
                createdAt: action.payload.createdAt,
            };
        case "customer/updateName":
            return {
                ...state,
                fullName: action.payload
            }
        default:
            return state
    }
}

export function createCustomer(fullName, nationalID, createdAt) {
    return {
        type: "customer/createCustomer",
        payload: {
            fullName: fullName,
            nationalID : nationalID,
            createdAt: new Date().toISOString(),
        }
    }
}

export function updateName(fullName){
    return {
        type: "account/updateName",
        payload: fullName
    }
}
