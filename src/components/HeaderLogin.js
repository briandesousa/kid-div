import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import PersonIcon from '@material-ui/icons/Person';

export default function HeaderLogin(props) {

  // generate dynamic styles based on Material UI theme
  const styles = makeStyles(theme => ({
    leftIcon: {
      marginRight: theme.spacing(1)
    },
    userName: {
      marginRight: theme.spacing(1),
      verticalAlign: 'middle',
      display: 'inline'
    }
  }))();

  if (!props.user.loggedIn) {
    return (
      <Button variant="contained" color="primary">
        <PersonIcon className={styles.leftIcon} />
        Login
      </Button>
    )
  } else {
    return (
      <div>
        <h3 className={styles.userName}>Hi there {props.user.userName}!</h3>
        <Button variant="contained" color="primary">
          Logout
        </Button>
      </div>
    );
  }
}