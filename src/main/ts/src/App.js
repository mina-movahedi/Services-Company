import Login from './components/Login';
import './App.css';
import {Component} from 'react';
import SideMenu from './components/SideMenu';
// import HomeServices from './components/HomeServices'
// import Profile from './components/Profile';


export default class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Login/>
                    <SideMenu/>
                    {/* {(this.props.location.pathname === '/')? [<Login/>, <SideMenu/>]:
         (this.props.location.pathname === '/profile')? <Profile/> :null}
           */}
                </header>
            </div>
        );
    }
}

