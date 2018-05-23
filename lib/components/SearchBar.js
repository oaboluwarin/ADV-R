import React, { Component } from 'react';
import debounce from 'lodash.debounce';

export default class SearchBar extends Component {
  state = {
    searchTerm: '',
  }

  doSearch = debounce(() => {
    this.props.doSearch(this.state.searchTerm);
  }, 300)

  handleSearch = (event) => {
    event.persist();
    this.setState(() => ({
      searchTerm: event.target.value
    }), () => this.doSearch());
  }

  render() {
    const {
      state: { searchTerm },
      handleSearch
    } = this;

    return (
      <input
        type="search"
        value={searchTerm}
        name="search"
        placeholder="Enter Search Term"
        onChange={handleSearch}
      />
    );
  }
}

