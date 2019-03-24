import React, { Component } from 'react';
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import TaskList from './Todo/InputTast'
import InputTask from './Todo/TaskList'

export const put = (x, y) => ({ type: 'PUT', payload: x, payload2: y })
const initState = {
    tasks: [{ id: 1, task: 'Programming', task2: 'GT Studio co.,ltd.' }, { id: 2, task: 'Maintenance', task2: 'GT Studio co.,ltd.' }],
}

export const taskReducer = (state = initState, action) => {
    switch (action.type) {
        case 'PUT':
            return state = {
                ...state,
                tasks: [...state.tasks, { id: state.tasks.id += 1, task: action.payload, task2: action.payload2 }]
            }
        default:
            return state
    }


}
//export const rootReducer = combineReducers({ tasks: taskReducer })
//export const store = createStore(rootReducer, applyMiddleware(logger, thunk))



export default class Todo extends Component {
    state = {
        tasks: [
            { id: 1, task: 'Do homework', task2: 'Do homework' },
            { id: 2, task: 'Read book', task2: 'Do homework' }],
        id: 3
    }

    render() {
        return (
            <div style={{ margin: '20px' }}>
                <h2>Render TODO</h2>
                <br />
                

                    <TaskList tasks={this.state.tasks} />
                    <br />  <h2>ADD TODO </h2> <br />
                    <InputTask addTask={this.addTask} id={this.state.id} />
                    <br />


            </div>
        );
    }
}



