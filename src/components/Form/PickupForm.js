import React, {Component} from 'react';
//import {PropTypes} from 'prop-types';
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
        this.state = initalStat2;
    }

    onInput(e) {
        let fields = Object.assign({},this.state.fields);
        fields[e.target.name] = e.target.value;
        this.setState({fields});
    }
    onFormSubmit(e) {
        e.preventDefault();
        //let {succsess} = this.state;
        const {fullName, telephone} = this.state;
        if (fullName === '' || telephone === '') {
            return false;
        }
        console.log(this.state.fields);
        console.log('form submitted');
        this.setState(initalStat2);
    }
    render() {
        const {fullName,telephone} = this.state.fields;
        return (
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
                        validate={val => !val ? 'telephone is required':''}/>
                    <button type='submit' className='btn'>Submit</button>

                </form>
                
            </div>
        );
    }
}


export default PickupForm;
