import React, {Component} from 'react';
import { Route, Redirect } from 'react-router';
import TextInput from '../TextInput/TextInput';

const initalState = {
    fields: {
        fullName:'',
        address:'',
        telephone:'',
        city:'',
        zipcode:'',
    }
};
class DeliveryForm extends Component {
    constructor(props) {
        super(props);
        this.success = false;
        this.state = initalState;


    }
    onInput(e) {
        let fields = Object.assign({},this.state.fields);
        fields[e.target.name] = e.target.value;
        this.setState({fields});
    }
    onFormSubmit(e) {
        e.preventDefault();
        const{ fullName,address,telephone,city,zipcode} = this.state;
        if(fullName === '' || telephone === '' || address === '' || city === '' || zipcode === '' ) {return false;}
        else {
            localStorage.setItem('user', JSON.stringify(this.state.fields));
        }
        this.setState(initalState);
        this.success = true;
}
render() {
const {fullName,address,telephone,zipcode,city} = this.state.fields;
return (
    this.success ? <Redirect to="/review"/> :
    <div className='form-container'>
        <h2>Fill out for delivery </h2>
        <form action='' method='get' onSubmit={(e) => this.onFormSubmit(e)}>
            <TextInput
                onChange={e => this.onInput(e)}
                name='fullName'
                value={fullName}
                validate={val => !val ? 'Full name is required':''}/>
            <TextInput
                onChange={e => this.onInput(e)}
                name='address'
                value={address}
                validate={val => !val ? 'Address is required':''}/>
            <TextInput
                onChange={e => this.onInput(e)}
                name='telephone'
                value={telephone}
                validate={val => !val ? 'Telephone is required':''}/>
            <TextInput
                onChange={e => this.onInput(e)}
                name='city'
                value={city}
                validate={val => !val ? 'A city is required':''}/>
            <TextInput
                onChange={e => this.onInput(e)}
                name='zipcode'
                value={zipcode}
                validate={val => !val ? 'Postal code is required':''}/>

            <button type='submit' className='btn'>Submit</button>
        </form>
    </div>
);
}
}


export default DeliveryForm;