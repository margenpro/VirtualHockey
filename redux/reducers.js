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
        const email = action.payload.email ? action.payload.email : state.user.email
        const username = action.payload.username ? action.payload.username : state.user.username
        const role = action.payload.role ? action.payload.role : state.user.role
        const lastVideo = action.payload.lastVideo ? action.payload.lastVideo : state.user.lastVideo
        console.log("entre a SETTER USER")
        return {
            ...state,
            user: { email, username, role, lastVideo }
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