import React from 'react';

export default function HeaderLogin(props) {

  if (!props.user.loggedIn) {
    return (
      <button>Login</button>
    )
  } else {
    return (
      <div>
        <h3>Hi there {props.user.userName}!</h3>
        <button>Logout</button>
      </div>
    );
  }
}