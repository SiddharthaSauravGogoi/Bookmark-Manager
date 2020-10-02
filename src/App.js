import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import test from './actions/actions';
import './App.css';
import Navigation from './components/Navigation/index.jsx';

const mapStateToProps = (state) => ({
  test: state.test.payload,
});

const mapDispatchToProps = (dispatch) => {
  const updateTestText = (param) => dispatch(test(param));
  return { updateTestText };
};

export function App() {
  return (
    <div className="container-fluid">
      <h1> Bookmark Manager</h1>
      <Navigation />
      {/* <a href="/search" className="btn btn-outline-primary"> Add </a> */}
    </div>
  );
}

App.propTypes = {
  test: PropTypes.string,
  updateTestText: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
