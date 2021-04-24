// function reducers() {
//     return {
//         testing: 'pruebando'
//     }
// }
import { SET_USER } from "./actions";

const initialState = {
    user: {
        email: "",
        username: "something",
        role: 0,
        lastVideo: 0,
    }
}

const differentState = {
    user: {
        email: "else",
        username: "else",
        role: 0,
        lastVideo: 0,
    }
}

export const reducers = (state = initialState, action) => {
    if (action.type == "SETTER_USER") {
        console.log("entre a SETTER USER")
        return {
            ...state,
            user: {
                email: action.email ? action.email : state.user.email,
                username: action.username ? action.username : state.user.username,
                role: action.role ? action.role : state.user.role,
                lastVideo: action.lastVideo ? action.lastVideo : state.user.lastVideo,
            }
        }
    }
    if (action.type == "SET_USER") {
        console.log("entre a set user")
        return {
            differentState
        }
    }
    else {
        console.log("aca no tengo que llegar")
        return state
    }
}