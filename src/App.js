import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from './_helpers';
import { alertActions } from './_actions';
import { PrivateRoute } from './_components';
import { HomePage } from './HomePage';
import { LoginPage } from './LoginPage';
import { RegisterPage } from './RegisterPage';

class App extends React.Component {
    constructor(props) {
        super(props);

        history.listen((location, action) => {
            // clear alert on location change
            this.props.clearAlerts();
        });
    }

    render() {
        const { alert } = this.props;
        return (
            <div className="jumbotron">
                <div className="container">
                    <div className="col-sm-8 col-sm-offset-2">
                        {alert.message &&
                            <div className={`alert ${alert.type}`}>{alert.message}</div>
                        }
                        <Router history={history}>
                            <Switch>
                                <PrivateRoute exact path="/" component={HomePage} />
                                <Route path="/login" component={LoginPage} />
                                <Route path="/register" component={RegisterPage} />
                                <Redirect from="*" to="/" />
                            </Switch>
                        </Router>
                    </div>
                </div>
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
