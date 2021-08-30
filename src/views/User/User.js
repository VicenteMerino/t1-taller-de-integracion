import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { getUser, getUserCreditCards, getUserAddresses } from '../../utils/fetch';
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
const Users = () => {
  const classes = useStyles();
  const { userId } = useParams();

  const [user, setUser] = useState({});
  const [creditCards, setCreditCards] = useState([]);
  const [addresses, setAddresses] = useState([])

  useEffect(() => {
    getUser(userId).then(({response, res}) => {
      setUser(res);
    });
    getUserAddresses(userId).then(({response, res}) => {
      setAddresses(res);
    });
    getUserCreditCards(userId).then(({response, res}) => {
      setCreditCards(res);
    });
  }, [userId]);

  return (
    <div className={classes.root}>
      <div className={classes.character}>
        <img className={classes.image} src={user.avatar} title={`${user.name} ${user.lastName}`}
            alt={`${user.name} ${user.lastName}`} />
        <div className={classes.dataContainer}>
          <div>
            <div className={classes.typography}>
              <Typography className={classes.keyTypography}>Nombre y Apellido:</Typography>
              <Typography>{`${user.name} ${user.lastName}`}</Typography>
            </div>
            <div className={classes.typography}>
              <Typography className={classes.keyTypography}>Email:</Typography>
              <Typography>{`${user.email}`}</Typography>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.dataInformation}>
        <Typography variant="h5" color="primary">Tarjetas de crédito</Typography>
        {creditCards.map((creditCard, index) => {
          return (
            <div key={index} className={classes.dataCard}>
              <div className={classes.typography}>
                <Typography className={classes.keyTypography}>Nº de tarjeta:</Typography>
                <Typography>{`${creditCard.creditCard}`}</Typography>
              </div>
              <div className={classes.typography}>
                <Typography className={classes.keyTypography}>CVV::</Typography>
                <Typography>{`${creditCard.CVV}`}</Typography>
              </div>
            </div>
          )
        })}
      </div>
      <div className={classes.dataInformation}>
        <Typography variant="h5" color="primary">Direcciones</Typography>
        <List>
        {addresses.map((address, index) => {
        return (
          <div key={index} className={classes.dataCard}>
            <div className={classes.typography}>
              <Typography className={classes.keyTypography}>Ciudad:</Typography>
              <Typography>{`${address.city.name}`}</Typography>
            </div>
            <div className={classes.typography}>
              <Typography className={classes.keyTypography}>País:</Typography>
              <Typography>{`${address.city.country}`}</Typography>
            </div>
            <div className={classes.typography}>
              <Typography className={classes.keyTypography}>Dirección:</Typography>
              <Typography>{`${address.address}`}</Typography>
            </div>
            <div className={classes.typography}>
              <Typography className={classes.keyTypography}>Código postal:</Typography>
              <Typography>{`${address.zip}`}</Typography>
            </div>
          </div>
        )
      })}
        </List>

      </div>
    </div>
  );
};

export default Users;