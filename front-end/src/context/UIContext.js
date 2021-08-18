export const initialUIState = {
    postModel: false,
    message: null,
    notifications: [],
    loading: false,
}

export const UIReducer = (state, action) => {
    switch (action.type) {
        case 'SET_MESSAGE':
            return {
                ...state,
                message: action.payload,
            }
        
        case 'SET_NOTIFICATIONS':
            return { ...state, notifications: action.payload}

        case 'SET_LOADING':
            return { ...state, loading: action.payload}

        case 'SET_POST_MODEL':
            return { ...state, postModel: action.payload}

        case 'ADD_NOTIFICATION':
            return { ...state, notifications: [action.payload, ...state.notifications]}

        default:
            throw new Error(`action type ${action.type} not supported`)
    }
}