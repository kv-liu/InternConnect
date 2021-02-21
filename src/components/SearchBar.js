import { declareExportDeclaration } from '@babel/types';
import React, {Component, useState} from 'react';
import {Link} from 'react-router-dom';
import Results from './Results';


const AWS_ENDPOINT = "https://783uqf6eeg.execute-api.us-west-1.amazonaws.com/prod/recruiter?company=";


function getAPI() {
    fetch(AWS_ENDPOINT)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        console.log(AWS_ENDPOINT);
        // return fetch(AWS_ENDPOINT, fetchData).then(response => response.json()) <-- errors?
        // const fetchData = {
        //     method: 'GET',
        //     body: JSON.stringify(data),
        // }

    })

    .catch(err => {
        console.log(err);
    })
}


class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {input: '', recruiters:[]};
    }
    
    handleChange = event  => {
        this.setState({input: event.target.value})
    }

    handleAPI = event => {
        const AWS_ENDPOINT_FINAL = AWS_ENDPOINT + this.state.input.charAt(0).toUpperCase() + this.state.input.slice(1).toLowerCase();
        fetch(AWS_ENDPOINT_FINAL)
        .then(response => response.json())
        .then(data => {
            console.log(data); //obj
            console.log(AWS_ENDPOINT_FINAL);
            this.setState({recruiters: data})
        })

        .catch(err => {
            console.log(err);
        })
        
    }

    render() {
        return (
        <div className="search-div" action="">
            <input type="search" className="search-bar" placeholder="Type to search..." required value={this.state.input} onChange={this.handleChange}/>
            {/* <Link to='/results'> */}
            <button type="submit" id="Button" className="search-btn" onClick={this.handleAPI}/>
            {/* </Link> */}
            <i className="fa fa-search"></i>
            <h1 className="test-input">Your input is: {this.state.input}</h1>
            <Results recruiters={this.state.recruiters}></Results>

        </div>
        );
    }
}


export default SearchBar;


