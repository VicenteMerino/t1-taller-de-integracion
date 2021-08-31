import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { getCity, getUsersSet } from '../../utils/fetch';
import { Typography, List, ListItem } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    marginLeft: "10vw",
    marginTop: "15vh",
    display: "flex",
  },
  city: {
    marginRight: "10vw"
  },
  image: {
    borderRadius: "8px",
    width: "400px"
  },
  dataInformation: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "40px",
    borderRadius: "12px",
    border: "3px black solid",
    height: "60vh",
    padding: "30px"
  },
  dataCard: {
    display: "flex",
    flexDirection: "column",
  },
  dataContainer: {
    display: "flex",
  },
  userItem: {
    border: "1px solid red",
    marginBottom: "20px",
    display: "flex",
    justifyContent: "center"
  },
  typography: {
    display: "flex",
  },
  keyTypography: {
    fontWeight: "bold",
    marginRight: "5px",
    fontSize: "30px"
  },
  valueTypography: {
    fontSize: "30px"
  }
}));
const City = () => {
  const classes = useStyles();
  const { cityId } = useParams();

  const [city, setCity] = useState({});
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getCity(cityId).then(({res}) => {
      setCity(res);
    });
  }, [cityId]);

  useEffect(() => {
    if (city.users) {
      getUsersSet(city.users).then((usersJson) => {
        setUsers(usersJson);
      });
    }
  }, [city])
  
  console.log(city);
  console.log(users);
  return (
    <div className={classes.root}>
      <div className={classes.city}>
        <div className={classes.dataContainer}>
          <div>
            <div className={classes.typography}>
              <Typography className={classes.keyTypography}>Ciudad:</Typography>
              <Typography className={classes.valueTypography}>{`${city.name}`}</Typography>
            </div>
            <div className={classes.typography}>
              <Typography className={classes.keyTypography}>País:</Typography>
              <Typography className={classes.valueTypography}>{`${city.country}`}</Typography>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.dataInformation}>
        <Typography variant="h5" color="primary">Usuarios con dirección registrada</Typography>
        <List>
        {users.map((user, index) => {
          return (
            <ListItem button component="a" href={`/users/${user.id}`}
                      key={index} className={classes.userItem}>
              <span>
                {`${user.name} ${user.lastName}`}
              </span>
            </ListItem>
          )
        })}
        </List>
      </div>
    </div>
  );
};

export default City;