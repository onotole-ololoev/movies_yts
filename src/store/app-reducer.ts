const initialState = {
    isLoading: false
}
type InitialStateType = {
    isLoading: boolean
}
type ActionType = SetLoadingACType

export const appReducer = (state: InitialStateType = initialState, action: ActionType) => {
    switch (action.type) {
        case "SET-LOADING":
            return {...state, isLoading: action.value}
        default:
            return state
    }
}

export const setLoadingAC = (value: boolean) => {
    return {type: 'SET-LOADING', value} as const
}
type SetLoadingACType = ReturnType<typeof setLoadingAC>