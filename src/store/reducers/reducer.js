import * as actionTypes from '../actions'


const initialState = {
    result : []
}

const reducer = (state = initialState, action) => {
    if(action.type===actionTypes.INCREAMENT){
        return {
            ...state,
            counter: state.counter+1
        }
    } else if(action.type===actionTypes.DECREMENT){
        return {
            ...state,
            counter: state.counter-1
        }

    } else if(action.type===actionTypes.ADD){
        return {
            ...state,
            counter: state.counter+action.value
        }
        
    } else if(action.type===actionTypes.SUBTRACT){
        return {
            ...state,
            counter: state.counter-action.value
        }
        
    } else if(action.type === actionTypes.STORE_RESULT) {
        return {
            ...state,
            result : state.result.concat(state.counter)
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