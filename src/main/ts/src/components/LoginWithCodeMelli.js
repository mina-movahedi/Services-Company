import React, {Component} from 'react';
import '../css/Login.css';
import {Link} from 'react-router-dom';
import axios from 'axios'


export default class Login extends Component {

    state = {
        user: '',
        pass: ''
    }

    render() {

        axios.defaults.baseURL = "http://127.0.0.1:8080";
        return (
            <div className='codeMelli'>
                <p>Enter to your profile</p>
                <form className='access' onSubmit={this.handleSubmit}>
                    <label htmlFor='codeMelli'>
                        Code melli:
                        <input id='codeMelli' type="text"
                               onChange={(e) => {
                                   this.setState({user: e.target.value})
                               }}/>
                    </label>
                    <br/>
                    <label htmlFor='password'>
                        Password:
                        <input id='password' type="text"
                               onChange={(e) => {
                                   this.setState({pass: e.target.value})
                               }}/>
                    </label>
                    <br/>
                    {/* <input type="submit" value="Submit" onClick= {this.handleClock}/> */}
                </form>
                <button className='b'>
                    <Link to={{
                        pathname: 'profile',
                        state: {"user": this.state.user, "pass": this.state.pass}
                    }}
                          style={{textDecoration: 'none'}}

                          onClick={() => console.log(this.state)}
                    >Enter</Link>
                </button>


            </div>
        )


    }

    // history = useHistory();
    handleClick() {
        alert('salaam');
    }

    // handleClock(){
    // window.open("Profile");
    // }

}
