import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { getCity, getUsersSet } from '../../utils/fetch';
import { ListItemText, Typography, List, ListItem } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: "20vw",
    marginTop: "20vh",
    display: "flex",
  },
  image: {
    borderRadius: "8px",
    width: "400px"
  },
  character: {
    border: "solid red 3px",
  },
  dataInformation: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "40px"
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
    marginRight: "5px"
  },
}));
const City = () => {
  const classes = useStyles();
  const { cityId } = useParams();

  const [city, setCity] = useState({});
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getCity(cityId).then(({response, res}) => {
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
      <div className={classes.character}>
        <div className={classes.dataContainer}>
          <div>
            <div className={classes.typography}>
              <Typography className={classes.keyTypography}>Ciudad:</Typography>
              <Typography>{`${city.name}`}</Typography>
            </div>
            <div className={classes.typography}>
              <Typography className={classes.keyTypography}>País:</Typography>
              <Typography>{`${city.country}`}</Typography>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.dataInformation}>
        <Typography variant="h5" color="primary">Usuarios con dirección registrada</Typography>
        {users.map((user, index) => {
          return (
            <div key={index} className={classes.dataCard}>
              <div className={classes.typography}>
                <Typography className={classes.keyTypography}>Nombre y Apellido:</Typography>
                <Typography>{`${user.name} ${user.lastName}`}</Typography>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default City;