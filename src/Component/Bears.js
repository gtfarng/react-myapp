import React, { Component } from 'react';
import { getBears } from '../App'
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
                return (<li key={index}> <strong>{git.id}.Name</strong> : {git.name}, <strong>Weight</strong> : {git.weight} Kilograms

               &nbsp; <button onClick={() => this.getBears()}>GET</button>
                    &nbsp; <button onClick={() => this.getBears()}>DELETE</button>
                    &nbsp; <button onClick={() => this.getBears()}>PUT</button>


                </li>
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
                <input name="id" onChange={this.handleChange} placeholder="Bear ID..." /><br />
                <input name="name" onChange={this.handleChange} placeholder="Bear Name..." /><br />
                <input name="weight" onChange={this.handleChange} placeholder="Bear Weight..." /><br />
                <br />
                <button onClick={() => this.getBears()}>GET</button>
                <button onClick={() => this.getBears()}>POST</button>
                <button onClick={() => this.getBears()}>DELETE</button>
                <button onClick={() => this.getBears()}>PUT</button>

                <br /><br /><br />
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