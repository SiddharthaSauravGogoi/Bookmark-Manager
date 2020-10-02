import React from 'react';

export default function Dropdown() {
  const getDropdownValue = (event) => {
    if (event.target.innerHTML.toLowerCase() === 'users') {
      // do stuff
    } else if (event.target.innerHTML.toLowerCase() === 'repositories') {
      // do stuff
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
        Dropdown button
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <li className="dropdown-item">Users</li>
        <li className="dropdown-item">Repositories</li>

      </div>
    </div>
  );
}
