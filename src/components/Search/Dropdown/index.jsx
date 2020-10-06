import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function Dropdown(props) {
  const [dropdownLabel, setDropdownLabel] = useState('Select');

  const getDropdownValue = (event) => {
    if (event.target.innerHTML.toLowerCase() === 'users') {
      setDropdownLabel('Users');
      props.setSearchFilter('users');
    } else if (event.target.innerHTML.toLowerCase() === 'repositories') {
      setDropdownLabel('Repositories');
      props.setSearchFilter('repositories');
    }
  };
  return (
    <div className="dropdown" onClick={getDropdownValue}>
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button" id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        >
        {dropdownLabel}
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <li className="dropdown-item">Users</li>
        <li className="dropdown-item">Repositories</li>
      </div>
    </div>
  );
}

Dropdown.propTypes = {
  setSearchFilter: PropTypes.func,
};
