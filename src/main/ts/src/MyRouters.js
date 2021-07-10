import react, {Component} from 'react';
import App from './App';
import {Route, Switch} from 'react-router';
import {HashRouter} from 'react-router-dom';
import Profile from './components/Profile';
import HomeServices from './components/HomeServices';
import CarServices from './components/CarServices';
import MaintenanceServices from './components/MaintenanceServices';
import Submission from './components/Submission';


export default class MyRouters extends Component {
    render() {
        return (
            <HashRouter>
                <>
                    <Switch>
                        <Route exact path='/' component={App}></Route>
                        <Route exact path='/profile' component={Profile}></Route>
                        <Route exact path='/submission' component={Submission}></Route>
                        <Route exact path='/MaintenanceServices' component={MaintenanceServices}></Route>
                        <Route exact path='/HomeServices' component={HomeServices}></Route>
                        <Route exact path='/CarServices' component={CarServices}></Route>
                    </Switch>
                </>
            </HashRouter>

        )
    }
}

