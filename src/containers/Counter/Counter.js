import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import {connect} from 'react-redux'

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={ this.props.anyNameIncrementForExample} />
                <CounterControl label="Decrement" clicked={this.props.decrementHandler}  />
                <CounterControl label="Add 30" clicked={this.props.addHandler}  />
                <CounterControl label="Subtract 30" clicked={this.props.subtractHandler}  />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ctr: state.counter
    }
}

const mapDispatchToProps = (dispatch) => {
    console.log('sfe')
    return {
        anyNameIncrementForExample : () => dispatch({
            type: 'INCREMENT'
        }),
        decrementHandler : () => dispatch({
            type: 'DECREMENT'
        }),
        addHandler : () => dispatch({
            type: 'ADD',
            value: 30
        }),
        subtractHandler : () => dispatch({
            type: 'SUBTRACT',
            value: 30
        })
    
    }
        
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);