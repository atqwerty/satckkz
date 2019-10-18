import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';
import Input from '../components/atoms/Input/Input';
import LinkWrapper from '../components/atoms/Link/Link';
import './styles.css';

class RegisterPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                firstName: '',
                lastName: '',
                username: '',
                password: ''
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state)
        this.setState({ submitted: true });
        const { user } = this.state;
        if (user.firstName && user.lastName && user.username && user.password) {
            this.props.register(user);
        }
    }

    render() {
        const { registering  } = this.props;
        const { user, submitted } = this.state;
        return (
            <div className="form-wrapper">
                <h2>Register</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (submitted && !user.firstName ? ' has-error' : '')}> 
                      <Input
                        style={{ marginTop: '10px' }}
                        onChange={this.handleChange}
                        value={user.firstName}
                        name='firstName'
                        type='text'
                        placeHolder='first name'
                        bgColor='white'
                        componentWidth='100%'
                        componentHeight='100%'
                      />
                      {submitted && !user.firstName &&
                          <div className="help-block">first name is required</div>
                      }
                    </div>
                    <div className={'form-group' + (submitted && !user.lastName ? ' has-error' : '')}> 
                      <Input
                        style={{ marginTop: '10px' }}
                        onChange={this.handleChange}
                        value={user.lastName}
                        name='lastName'
                        type='text'
                        placeHolder='last name'
                        bgColor='white'
                        componentWidth='100%'
                        componentHeight='100%'
                      />
                      {submitted && !user.lastName &&
                        <div className="help-block">last name is required</div>
                      }
                    </div>
                    <div className={'form-group' + (submitted && !user.username ? ' has-error' : '')}> 
                      <Input
                        style={{ marginTop: '10px' }}
                        onChange={this.handleChange}
                        value={user.username}
                        name='username'
                        type='text'
                        placeHolder='username'
                        bgColor='white'
                        componentWidth='100%'
                        componentHeight='100%'
                      />
                      {submitted && !user.username &&
                          <div className="help-block">username is required</div>
                      }
                    </div>
                    <div className={'form-group' + (submitted && !user.password ? ' has-error' : '')}> 
                      <Input
                        style={{ marginTop: '10px' }}
                        onChange={this.handleChange}
                        value={user.password}
                        name='password'
                        type='text'
                        placeHolder='password'
                        bgColor='white'
                        componentWidth='100%'
                        componentHeight='100%'
                      />
                      {submitted && !user.password &&
                          <div className="help-block">password is required</div>
                      }
                    </div>
                    <div className='container flex align-center justify-content'>
                        <Input
                          style={{ marginTop: '10px' }}
                          type='submit'
                          bgColor='#B7DDC8'
                          containedValue='Register'
                          componentWidth='50%'
                          componentHeight='100%'
                        />
                      <LinkWrapper to="/login" className="btn btn-link" width='50%'>Login</LinkWrapper>
                        {registering && 
                            <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                        }
                    </div>
                </form>
            </div>
        );
    }
}

function mapState(state) {
    const { registering } = state.registration;
    return { registering };
}

const actionCreators = {
    register: userActions.register
}

const connectedRegisterPage = connect(mapState, actionCreators)(RegisterPage);
export { connectedRegisterPage as RegisterPage };
