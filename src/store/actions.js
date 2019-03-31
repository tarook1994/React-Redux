export const INCREAMENT = 'INCREAMENT'
export const DECREMENT = 'DECREMENT'
export const ADD = 'ADD'
export const SUBTRACT = 'SUBTRACT'
export const STORE_RESULT = 'STORE_RESULT'

export const increament = () => {
    return {
        type: 'INCREAMENT'
    }
}

export const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}

export const add = (value) => {
    return {
        type: 'ADD',
        value: value
    }
}
export const subtract = (value) => {
    return {
        type: 'SUBTRACT',
        value: value
    }
}


//AsyncMethod that gets the request then calls the syncMethod to inform the reducer with the 
//values needed.
export const store = (result) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(saveResult(result))

        }, 2000)
    }

}

//SyncMethod that has the action to be dispatched to the reducer
export const saveResult = (result) => {
    return {
        type: 'STORE_RESULT',
        result: result
    }
}

