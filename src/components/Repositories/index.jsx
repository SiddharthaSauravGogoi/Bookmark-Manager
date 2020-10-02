import React from 'react';
import RepositoryList from './RepositoryList/index.jsx';

export default function Repositories() {
  return (
    <main>
      <a href="/search" className="btn btn-outline-primary"> Add </a>
      <RepositoryList />
    </main>
  );
}
