import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../../App.css'

class TaskList extends Component {
    render() {
        if (this.props.tasks)
            return (<ul > {
                this.props.tasksList.tasks.map((item) => (
                   <h4> <li className="bullet" key={item.id}><small> {item.task} at {item.task2}</small></li></h4>
                ))
            }
            </ul>)
    }
}
const mapStateToProps = (state) => {
    return {
        tasksList: state.tasks
    }
}
export default connect(mapStateToProps)(TaskList)
