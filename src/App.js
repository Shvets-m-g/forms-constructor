import logo from './logo.svg';
import React from 'react';
import './App.css';
import Form from './views/Form'
import SForms from "./service/SForms";
import axios from 'axios';


console.log('SForms',SForms)
const serviceForm = new SForms();


export default class PersonList extends React.Component {
    state = {
        forms: []
    }

    componentDidMount() {
        axios.get(`http://localhost:3000/local/Get.json`)
            .then(res => {
                const forms = res.data.form;
                console.log('response', res.data.form)
                this.setState({ forms });
                console.log(this.state)
            })
    }

    render() {
        return (
            <div>
                <Form form={this.state.forms}/>
            </div>
        )
    }
}
/*
function App() {
    console.log('result')
    return (
    <div className="App">
        <Form/>
    </div>
    );
}

export default App;
*/