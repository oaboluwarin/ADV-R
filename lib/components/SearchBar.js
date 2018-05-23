import React, { PureComponent } from 'react';
import debounce from 'lodash.debounce';
import { withStore } from './withStore';

class SearchBar extends PureComponent {
  state = {
    searchTerm: '',
  }

  doSearch = debounce(() => {
    this.props.store.setSearchTerm(this.state.searchTerm);
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

export default withStore()(SearchBar);

