import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import test from './actions/actions';
import './App.css';

const mapStateToProps = (state) => ({
  test: state.test.payload,
});

const mapDispatchToProps = (dispatch) => {
  const updateTestText = (param) => dispatch(test(param));
  return { updateTestText };
};

function App(props) {
  return (
    <div className="App">
      Bookmark manager
      {props.test}
      <button onClick={() => props.updateTestText('all set')}>
        Click
      </button>
    </div>
  );
}

App.propTypes = {
  test: PropTypes.string,
  updateTestText: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
