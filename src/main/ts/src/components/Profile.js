import react, {Component} from 'react';
import App from '../App';
import SearchView from './SearchView';


export default class Profile extends Component {

    componentDidMount() {
        let users = {
            client: 111,
            client2: 222,
            admin: 321,
            expert: 123
        }

        if (this.props && this.props.location && this.props.location.state) {
            const {user, pass} = this.props.location.state;
            let isAthenticated = Object.keys(users).includes(user) && Object.values(users).includes(pass);

            this.setState({hasUserPass: true, isAthenticated})
        } else {
            this.setState({hasUserPass: false, isAthenticated: false})
        }

    }


    state = {
        isAthenticated: false,
        hasUserPass: false
        //     user: this.props.user,
        //     pass: this.props.pass
    }

    render() {
        return (
            <div>
                {(this.state.isAthenticated) ? <SearchView/> : <App/>}
            </div>
        )
    }
}

