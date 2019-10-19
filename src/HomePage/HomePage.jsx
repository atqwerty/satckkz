import React from 'react';
import { connect } from 'react-redux';
import Post from '../components/molecules/Post/Post'

import { userActions } from '../_actions';
import LinkWrapper from '../components/atoms/Link/Link';

class HomePage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            data: ['a', 'b', 'c']
        }
    }

    componentDidMount() {
        this.props.getUsers();
    }

    handleDeleteUser(id) {
        return (e) => this.props.deleteUser(id);
    }

    render() {
        const { user, users } = this.props;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h1>Hi {user.firstName}!</h1>
                <p>You're logged in with React!!</p>
                <h3>All registered users:</h3>
                {users.loading && <em>Loading users...</em>}
                {users.error && <span className="text-danger">ERROR: {users.error}</span>}
                <ul style={{ width: '50%', listStyleType: 'none' }}>
                    {this.state.data.map((something, index) =>
                      <li><LinkWrapper to={'/post-detail/'+index}>{something}</LinkWrapper></li>
                        // <Post key={index}>{something}</Post>
                    )}
                </ul>
                {/* <p> */}
                    {/* <Link to="/login">Logout</Link> */}
                {/* </p> */}
                {/* <Post /> */}
            </div>
        );
    }
}

function mapState(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return { user, users };
}

const actionCreators = {
    getUsers: userActions.getAll,
    deleteUser: userActions.delete
}

const connectedHomePage = connect(mapState, actionCreators)(HomePage);
export { connectedHomePage as HomePage };
