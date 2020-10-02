import React from 'react';
import Dropdown from './Dropdown/index.jsx';
import SearchComponent from './SearchComponent/index.jsx';

export default function Search() {
  return (
    <main>
      <div className="display-flex">
        <SearchComponent />
        <Dropdown />
      </div>
    </main>
  );
}
