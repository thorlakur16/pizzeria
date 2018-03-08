import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import RemoteSelectItem from '../RemoteSelectItem/RemoteSelectItem';
import countryService from '../../services/countryService';

class CountrySelection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            region:'',
            city:'',
            country:'is'
        }
    }
    render() {
        const {country,region,city} = this.state;
        const {onCountrySelection} = this.props;
        return (
            <div className='country-selection-wrapper'>

                <RemoteSelectItem value={region} name='region' onSelect={e => {
                    this.setState({city:'', region: e.target.value});
                    onCountrySelection(e);
                }}
                defaultOption='-- Pick a Region --'
                populationMethod={countryService.getRegions.bind(null, country, val=> {return{value: val.region, display: val.region}})}
                />
                <RemoteSelectItem value={city} name='city' onSelect={(e) => {
                    this.setState({city:e.target.value});
                }} defaultOption='-- Pick a city --'
                populationMethod={countryService.getCities.bind(null,country,region,val => {return {value: val.city, display: val.city}})}
                disabled={region === ''}/>
            </div>
        );
    }
}

CountrySelection.propTypes = {
    onCountrySelection:PropTypes.func.isRequired,
};

export default CountrySelection;
