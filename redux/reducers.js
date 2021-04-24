// function reducers() {
//     return {
//         testing: 'pruebando'
//     }
// }
import React from 'react';
import { USER } from "./actions";


const initialState = {
    user: {
        mail: "",
        username: "something",
        role: 0,
        lastVideo: 0,
    }
}

export const reducers = (state = initialState, action) => {
    if (action.type === 'USER') {
        return {
            state
        }
    }
    else return state
}