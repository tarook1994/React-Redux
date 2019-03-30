import * as actionTypes from '../actions'


const initialState = {
    result : []
}

const reducer = (state = initialState, action) => {
    if(action.type === actionTypes.STORE_RESULT) {
        return {
            ...state,
            result : state.result.concat(action.result)
        }
    }
    else if(action.type === 'DELETE_RESULT') {
        const id = 0;
        const newArray = state.result
        newArray.splice(id,1)
        const updatedArray = state.result.filter(element => element===id?false:true)
        return {
            ...state,
            result : updatedArray
        }
    }
    return state;
}

export default reducer;