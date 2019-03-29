const redux = require('redux')
const createStore = redux.createStore;
const initialState = {
    time: 1,
    name: 'ahmed'
}
//Create Reducer
//we use this syntax (oldState = initialState, action ) if we want the oldState to take a default cvalue of <initialState> if 
//we did not pass a value when calling the method.
const reducer = (oldState = initialState, action) => {
    // we always return a state however here, we will return the old state just to check the basics.
    if(action.type==='INC_COUNTER') {
        return {
            ...oldState,
            time: oldState.time +1
        }
    }

    if(action.type=== 'ADD_COUNTER'){
        return {
            ...oldState,
            time: oldState.time +action.value
        }

    }

    return oldState;

}

//Create Store
const store = createStore(reducer)

//subscription 
store.subscribe(()=> {
    console.log('[Subscription]' + console.log(store.getState()))
})

//Dispatch action
store.dispatch({
    type: 'INC_COUNTER'
})

store.dispatch({
    type: 'ADD_COUNTER',
    value: 2
})



// we use payload if we need to pass
//a js object
// store.dispatch({
//     type : 'ADD_COUNTER',
//     payload : {}
// })

