import React, { Component } from 'react';
import { getGithub } from '../App'
import { connect } from 'react-redux'

class Github extends Component {
    state = {
        user: 'gtfarng'

    }

    componentDidMount() {
        console.log('props github', this.props)
        this.props.getGithub()
    }
    /*
        fetchUser = (USER) => {
            axios.get(`https://api.github.com/users/${USER}`)
                .then(response => {
                    store.dispatch(reset())
                    store.dispatch(set('' + response.data.id))
                    store.dispatch(set('' + response.data.login))
                    store.dispatch(set('' + response.data.name))
                    store.dispatch(set('' + response.data.url))
                    store.dispatch(set('' + response.data.avatar_url))
                    this.setState({ data: response.data })
                    console.log(response.data)
                })
        }
    */
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        console.log("input:",this.state.user)
    }

    renderGithub = () => {
        if (this.props.github) {
            // console.log("github data:", this.props.github)
            return (
                <ul>
                    <br />
                    <img src={this.props.github.avatar_url} alt="avatar" width="200px" /><br /><br />
                    <strong> Username</strong> : {this.props.github.login}<br />
                    <strong>ID</strong> : {this.props.github.id}<br />
                    <strong>Name </strong>: {this.props.github.name}<br />
                    <strong> Website</strong> : {this.props.github.blog}<br />
                    <strong> Update</strong> : {this.props.github.updated_at}<br />

                </ul>
            )

        }
    }

    render() {
        return (
            <div style={{ margin: '20px' }}>
                <h2>Render Github</h2>

                {this.renderGithub()}

                <input name="user" onChange={this.handleChange} placeholder="Username" /><br /><br />
                <button onClick={() => this.getGithub()}   >Search</button><br /><br /><br />

            </div>
        );
    }
}

const mapStateToProps = ({ github }) => {
    return { github }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getGithub: () => dispatch(getGithub())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Github);