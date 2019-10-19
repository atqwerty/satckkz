import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PostDetail from './components/molecules/PostDetail/PostDetail';

import { history } from './_helpers';
import { alertActions } from './_actions';
import { PrivateRoute } from './_components';
import { HomePage } from './HomePage';
import { LoginPage } from './LoginPage';
import { RegisterPage } from './RegisterPage';
import Header from './components/molecules/Header/Header'
import Post from './components/molecules/Post/Post';

class App extends React.Component {
    constructor(props) {
        super(props);

        history.listen((location, action) => {
            // clear alert on location change
            this.props.clearAlerts();
        });
    }

    loginRedirect() {
        history.push('/login');
    }

    registerRedirect() {
        history.push('register')
    }

    render() {
        const { alert } = this.props;
        return (
            <div className="jumbotron">
                <Router history={history}>
                    <Header
                        loginCallback={this.loginRedirect}
                        registerCallback={this.registerRedirect}
                    />
                    <div className="container">
                        <div className="col-sm-8 col-sm-offset-2">
                            {alert.message &&
                                <div className={`alert ${alert.type}`}>{alert.message}</div>
                            }
                            
                                <Switch>
                                    <PrivateRoute exact path="/" component={HomePage} />
                                    <Route path="/login" component={LoginPage} />
                                    <Route path="/register" component={RegisterPage} />
                                    <Route path="/post-detail/:id" component={PostDetail} />
                                    <Redirect from="*" to="/" />
                                </Switch>
                        </div>
                    </div>
                </Router>
            </div>
        );
    }
}

function mapState(state) {
    const { alert } = state;
    return { alert };
}

const actionCreators = {
    clearAlerts: alertActions.clear
};

const connectedApp = connect(mapState, actionCreators)(App);
export { connectedApp as App };





// import React from 'react'
// import './App.css'
// import Input from './components/atoms/Input/Input'

// function pp() {

//   const callback = (value = '') => {
//     alert('callback answer ' + value)
//   }

//   return (
//     <div className='App'>
//       <div style={{ width: '200px', height: '30px', position: 'relative', marginTop: '20px', marginLeft: '20px' }}>
//         <label>Button:</label>
//         <Input
//           type='button'
//           bgColor='orange'
//           containedValue='button'
//           callback={callback}
//           componentWidth='100%'
//           componentHeight='100%'
//         />
//       </div>
//       <div style={{ width: '200px', height: '30px', position: 'relative', marginTop: '20px', marginLeft: '20px' }}>
//         <label>Submit:</label>
//         <Input
//           type='submit'
//           bgColor='orange'
//           containedValue='submit'
//           callback={callback}
//           componentWidth='100%'
//           componentHeight='100%'
//         />
//       </div>
//       <div style={{ width: '200px', height: '30px', position: 'relative', marginTop: '30px', marginLeft: '20px' }}>
//         <label>Text:</label>
//         <Input
//           type='text'
//           bgColor='orange'
//           componentWidth='100%'
//           componentHeight='100%'
//         />
//       </div>
//       <div style={{ width: '200px', height: '30px', position: 'relative', marginTop: '30px', marginLeft: '20px' }}>
//         <label>Search (maybe redo a little):</label>
//         <Input
//           type='search'
//           bgColor='orange'
//           componentWidth='100%'
//           componentHeight='100%'
//           placeHolder='Search...'
//         />
//       </div>
//       <div style={{ width: '200px', height: '30px', position: 'relative', marginTop: '30px', marginLeft: '20px' }}>
//         <label>Checkbox:</label>
//         <Input
//           type='checkbox'
//           bgColor='orange'
//           containedValue='test'
//           callback={callback}
//           componentWidth='20px'
//           componentHeight='20px'
//         />
//         <Input
//           type='checkbox'
//           bgColor='orange'
//           containedValue='test'
//           callback={callback}
//           componentWidth='20px'
//           componentHeight='20px'
//         />
//         <Input
//           type='checkbox'
//           bgColor='orange'
//           containedValue='test'
//           callback={callback}
//           componentWidth='20px'
//           componentHeight='20px'
//         />
//       </div>
//     </div>
//   )
// }

// export default App
