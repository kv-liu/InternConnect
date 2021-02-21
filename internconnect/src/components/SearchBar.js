import React, {Component} from 'react';
import {Link} from 'react-router-dom';

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
            <button type="submit" className="search-btn"
            // onClick={getAPI}
            />
            </Link>
            <i className="fa fa-search"></i>
            <h1 className="test-input">Your input is: {this.state.input}</h1>
        </div>




        );
    }
}

export default SearchBar;
