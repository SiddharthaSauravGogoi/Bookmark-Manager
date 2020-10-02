import React, { useState } from 'react';

export default function SearchComponent() {
  const [searchTerm, updateSearchTerm] = useState('');

  const handleSearch = (event) => {
    updateSearchTerm(event.target.value);
  };

  return (
    <input
      type="text"
      className="form-control"
      value={searchTerm}
      onChange={handleSearch}
    />
  );
}
