import React, { Component } from 'react';
import { getBears } from './App'
import { connect } from 'react-redux'

class Bears extends Component {

    componentDidMount() {
        console.log('props bear', this.props)
        this.props.getBears()
    }

    renderBears = () => {
        if (this.props.bears) {
            return this.props.bears.map((git, index) => {
                console.log(git.name)
                return (<li key={index}> <strong>Name</strong> : {git.name}, <strong>Weight</strong> : {git.weight} Kilograms </li>
                )
            })
        }
    }



render() {
    return (
        <div style={{ margin: '20px' }}>
            <h2>Render Bears</h2>
            <br />
            {this.renderBears()}
          
            <br />
        </div>
    );
}
}

const mapStateToProps = ({ bears }) => {
    return { bears }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getBears: () => dispatch(getBears())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Bears);