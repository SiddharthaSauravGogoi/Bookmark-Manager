import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { searchFilter } from '../../actions/actions';
import SearchComponent from './SearchComponent/index.jsx';

const mapStateToProps = (state) => ({
  filter: state.search.filter,
});

const mapDispatchToProps = (dispatch) => {
  const setSearchFilter = (param) => dispatch(searchFilter(param));
  return {
    setSearchFilter,
  };
};

export function Search(props) {
  return (
    <main>
      <div className="row">
        <SearchComponent
          search={props.filter}
          setSearchFilter={props.setSearchFilter}
        />
      </div>
    </main>
  );
}

Search.propTypes = {
  filter: PropTypes.string,
  setSearchFilter: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
