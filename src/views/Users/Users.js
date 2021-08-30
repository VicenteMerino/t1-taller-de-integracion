import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { getAllUsers } from '../../utils/fetch/getAllUsers';

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: "30vw",
    marginTop: "30vh",   
  },
  usersContainer: {
    maxWidth: "10vw",
  },
  userItem: {
    border: "1px solid red",
    marginBottom: "20px",
    display: "flex",
    justifyContent: "center"
  },
  userText: {
  }
}));
const Users = () => {
  const classes = useStyles();

  const [users, setUsers] = useState([]);
  useEffect(() => {
    getAllUsers().then((usersJson) => {
      setUsers(usersJson);
    })
  }, []);

  console.log(users);
  return (
    <div className={classes.root}>
      <List className={classes.usersContainer}>
      {users.map((user, index) => {
        return (
          <ListItem button component="a" href="#" key={index} className={classes.userItem}>
            <span>
              {`${user.name} ${user.lastName}`}
            </span>
          </ListItem>
          )
      })}
      </List>
    </div>
  );
};

export default Users;
