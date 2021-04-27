import { SET_VIDEOS } from "../actions/videosActions.js";

const initialState = {
    user: {
        email: "",
        username: "",
        role: 0,
        lastVideo: 0,
    },
    videos: []
}

export const videosReducer = (state = initialState, action) => {
    if (action.type === SET_VIDEOS) {
        return {
            ...state,
            videos: action.payload.videos 
        }
    }
    return state
}