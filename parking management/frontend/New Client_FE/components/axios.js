import React, {Component} from 'react';
import axios from 'axios';

export default class App extends Component {
    state = {
        person: []
    }

    componentDidMount() {
        axios.post('http://103.1.237.169:3030/api/login/user').then(res => {
            console.log(res);
            this.setState({person: res.data});
        })
    }
    

    render(){
    return <ul> {this.state.persons.map(persons => <li key={person.token}>{person.name}</li>)}
        </ul>
    }
}
