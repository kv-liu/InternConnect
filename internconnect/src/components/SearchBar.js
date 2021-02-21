import React, {Component} from 'react';

class SearchBar extends Component {
    render() {
        return (
            <form className="search-form" action="">
                <input type="search" className="search-bar" placeholder="Type to search..." required></input>
                <i class="fa fa-search"></i>
            </form>
                
            
        );
    }
}

export default SearchBar;