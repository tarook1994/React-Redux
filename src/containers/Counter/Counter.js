import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from '../../store/actions'
import { connect } from 'react-redux'

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = (action, value) => {
        switch (action) {
            case 'inc':
                this.setState((prevState) => { return { counter: prevState.counter + 1 } })
                break;
            case 'dec':
                this.setState((prevState) => { return { counter: prevState.counter - 1 } })
                break;
            case 'add':
                this.setState((prevState) => { return { counter: prevState.counter + value } })
                break;
            case 'sub':
                this.setState((prevState) => { return { counter: prevState.counter - value } })
                break;
        }
    }

    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.anyNameIncrementForExample} />
                <CounterControl label="Decrement" clicked={this.props.decrementHandler} />
                <CounterControl label="Add 30" clicked={this.props.addHandler} />
                <CounterControl label="Subtract 30" clicked={this.props.subtractHandler} />
                <hr />

                <button onClick={() => this.props.storeHandler(this.props.ctr)}>Store result</button>
                <ul>
                    {this.props.rslt.map(result => {
                        return <li onClick= {this.deleteHandler}>{result}</li>
                    })}
                </ul>


            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ctr: state.ctr.counter,
        rslt: state.res.result
    }
}

const mapDispatchToProps = (dispatch) => {
    console.log('sfe')
    return {
        anyNameIncrementForExample: () => dispatch({
            type: actionTypes.INCREAMENT
        }),
        decrementHandler: () => dispatch({
            type: actionTypes.DECREMENT
        }),
        addHandler: () => dispatch({
            type: actionTypes.ADD,
            value: 30
        }),
        subtractHandler: () => dispatch({
            type: actionTypes.SUBTRACT,
            value: 30
        }),
        storeHandler: (result) => dispatch({
            type: actionTypes.STORE_RESULT,
            result : result
        }),
        deleteHandler: () => dispatch({
            type: 'DELETE_RESULT'
        })

    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);