import { SETTER_USER } from "../actions/userActions";

const initialState = {
    user: {
        email: "",
        username: "",
        role: 0,
        lastVideo: 0,
    },
    videos: []
}

export const userReducer = (state = initialState, action) => {
    if (action.type === SETTER_USER) {
        const email = action.payload.email ? action.payload.email : state.user.email
        const username = action.payload.username ? action.payload.username : state.user.username
        const role = action.payload.role ? action.payload.role : state.user.role
        const lastVideo = action.payload.lastVideo ? action.payload.lastVideo : state.user.lastVideo
        return {
            ...state,
            user: { email, username, role, lastVideo }
        }

    }
    return state
}