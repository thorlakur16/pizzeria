import React, { Component } from 'react';
//import {PropTypes} from 'prop-types';
import TextInput from '../TextInput/TextInput';
//import CountrySelection from '../CountrySelection/CountrySelection';

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
        this.state = initalState;


    }
    onInput(e) {
        let fields = Object.assign({},this.state.fields);
        fields[e.target.name] = e.target.value;
        this.setState({fields});
    }
    onFormSubmit(e) {
        e.preventDefault();
        //let {succsess} = this.state;
        const{ fullName,address,telephone,city,zipcode} = this.state;
        if(fullName === '' || telephone === '' || address === '' || city === '' || zipcode === '' ) {return false;}
        console.log(this.state.fields);
        console.log('form submitted');
        this.setState(initalState);

}
render() {
const {fullName,address,telephone,zipcode,city} = this.state.fields;
return (
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
                validate={val => !val ? 'address is required':''}/>
            <TextInput
                onChange={e => this.onInput(e)}
                name='telephone'
                value={telephone}
                validate={val => !val ? 'telephone is required':''}/>
            <TextInput
                onChange={e => this.onInput(e)}
                name='city'
                value={city}
                validate={val => !val ? 'Postal code is required':''}/>
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