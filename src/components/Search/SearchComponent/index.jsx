import React, { useState } from 'react';
import PropTypes from 'prop-types';
import dataService from '../../../services/dataService';
import Results from '../../Results/index.jsx';
import Dropdown from '../Dropdown/index.jsx';

export default function SearchComponent(props) {
  const [searchTerm, updateSearchTerm] = useState('');
  const [searchResults, updateSearchResults] = useState({});

  const handleSearch = (event) => {
    event.preventDefault();
    const search = dataService.getUser(searchTerm, props.search);
    search
      .then((data) => {
        updateSearchResults(data);
      });
  };

  return (
    <>
      <input
        type="text"
        className="form-control w-50"
        value={searchTerm}
        onChange={(e) => updateSearchTerm(e.target.value)}
      />
      <Dropdown
        setSearchFilter={props.setSearchFilter}
      />
      <button className="btn btn-primary" onClick={handleSearch}>
        Submit
        </button>
      <Results
        flag={'repos'}
        results={searchResults}
      />
    </>
  );
}

SearchComponent.propTypes = {
  search: PropTypes.string,
  setSearchFilter: PropTypes.func,
};
