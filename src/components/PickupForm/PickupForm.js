import React, {Component} from 'react';
import { Route, Redirect } from 'react-router';
import TextInput from '../TextInput/TextInput';

const initalStat2 = {
    fields: {
        fullName:'',
        telephone:''
    }

};
class PickupForm extends Component {

    constructor(props) {
        super(props);
        this.success = false;
        this.state = initalStat2;
    }

    onInput(e) {
        let fields = Object.assign({},this.state.fields);
        fields[e.target.name] = e.target.value;
        this.setState({fields});
    }
    onFormSubmit(e) {
        e.preventDefault();
        const {fullName, telephone} = this.state;
        if (fullName === '' || telephone === '') {
            return false;
        }
        else{
            localStorage.setItem('user', JSON.stringify(this.state.fields));
        }
        this.setState(initalStat2);
        this.success = true;

    }
    render() {
        const {fullName,telephone} = this.state.fields;
        return (
            this.success ? <Redirect to="/review"/> :
            <div className='form-container'>
                <h2>Fill out for pickup </h2>
                <form action='' method='get' onSubmit={ (e) => this.onFormSubmit(e)}>
                    <TextInput
                        onChange={e => this.onInput(e)}
                        name='fullName'
                        value={fullName}
                        validate={val => !val ? 'Full name is required':''}/>
                    <TextInput
                        onChange={e => this.onInput(e)}
                        name='telephone'
                        value={telephone}
                        validate={val => !val ? 'Telephone is required':''}/>
                    <button type='submit' className='btn'>Submit</button>

                </form>
                
            </div>
        );
    }
}


export default PickupForm;
