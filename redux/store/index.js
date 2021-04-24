import { createStore } from 'redux'

function reducers() {
    return {
        testing: 'pruebando'
    }
}

export default () => {
    return {
        ...createStore(reducers)
    }
}