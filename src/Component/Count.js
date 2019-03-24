import React, { Component } from 'react';
import { add, add2, minus, minus2, store, reset,set } from '../App'
import { connect } from 'react-redux'

class Count extends Component {
    constructor(props) {
        super(props)
        this.state = {
            number: ''
        }}

        onChangeNumber = (e) => {
            this.setState({ number: e.target.value})
            console.log("input:", this.state.number)
        }

        render() {
            return (
                <div style={{ margin: '20px' }}>
                    <h2>Render Counter</h2>
                    <h3>  Counter: {this.props.number} </h3>
                    <button onClick={this.props.add}>UP</button>
                    <button onClick={this.props.minus}>DOWN</button>
                    <button onClick={() => store.dispatch(add2(2))}>UP+2</button>
                    <button onClick={() => store.dispatch(minus2(2))}>DOWN-2</button><br /><br />
                    <input name="number" onChange={this.onChangeNumber} placeholder="NUMBER..." /><br /><br />
                    <button onClick={() => {store.dispatch(set(parseInt(this.state.number)))}}   >SET</button>
                    <button onClick={this.props.reset}>RESET</button><br /><br /><br />

                </div>
            );
        }
    }

    const mapStateToProps = (state) => {
        return { number: state.number }
    }

    const mapDispatchToProps = (dispatch) => {
        return {
            add: () => dispatch(add()),
            minus: () => dispatch(minus()),
            reset: () => dispatch(reset())
        }
    }

    export default connect(mapStateToProps, mapDispatchToProps)(Count);