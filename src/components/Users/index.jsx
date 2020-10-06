import React from 'react';
import PropTypes from 'prop-types';
import UserList from './UserList/index.jsx';

export default function Users(props) {
  return (
      <UserList results={props.results}/>
  );
}

Users.propTypes = {
  results: PropTypes.object,
};
