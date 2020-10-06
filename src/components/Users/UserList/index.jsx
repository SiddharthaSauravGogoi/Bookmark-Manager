import React from 'react';
import PropTypes from 'prop-types';

export default function UserList() {
  return (
    <div className="list-group">
      {/* {props.results
        ? Object.entries(props.results).map((users) => (
          <li className="list-group-item list-group-item-action" key={users.login}>
            {users[0]} : {users[1]}
          </li>
        )) : null
      } */}
    </div>
  );
}

UserList.propTypes = {
  results: PropTypes.object,
};
