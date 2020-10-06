import React from 'react';
import PropTypes from 'prop-types';
import Repositories from '../Repositories/index.jsx';
import Users from '../Users/index.jsx';

export default function Results(props) {
  return (
    <>
    {
      props.flag === 'users'
        ? <Repositories results={props.results}/>
        : <Users results={props.results}/>}
    </>
  );
}

Results.propTypes = {
  flag: PropTypes.string,
  results: PropTypes.object,
};
