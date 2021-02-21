import React, {Component, useState} from 'react';
import {Link} from 'react-router-dom';


const AWS_ENDPOINT = "https://783uqf6eeg.execute-api.us-west-1.amazonaws.com/prod/recruiter?company=Apple";

function getAPI() {
    fetch(AWS_ENDPOINT)
    .then(response => response.json())
    .then(data => {
        console.log(data);
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
        this.state = {input: ''};
    }
    
    handleChange = event  => {
        this.setState({input: event.target.value})
    }

    render() {
        return (
        <div className="search-div" action="">
            <input type="search" className="search-bar" placeholder="Type to search..." required value={this.state.input} onChange={this.handleChange}></input>
            <Link to='/results'>
            <button type="submit" className="search-btn" onClick={getAPI}/>
            </Link>
            <i className="fa fa-search"></i>
            <h1 className="test-input">Your input is: {this.state.input}</h1>
        </div>

        
                
            
        );
    }
}

export default SearchBar;


