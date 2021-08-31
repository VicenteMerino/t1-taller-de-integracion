import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { getUser, getUserCreditCards, getUserAddresses } from '../../utils/fetch';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    marginLeft: "10vw",
    marginTop: "15vh",
    display: "flex",
  },
  image: {
    borderRadius: "8px",
    width: "400px"
  },
  character: {
    border: "solid black 3px",
    borderRadius: "12px",
    backgroundColor: "#F6F6EB"
  },
  dataInformation: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "10vw",
    textAlign: "center",
    borderRadius: "12px",
    border: "solid black 3px",
    padding: "20px",
    height: "60vh"
    
  },
  dataCard: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#F6F6EB",
    borderRadius: "12px",
    border: "solid black 1px",
    padding: "10px",
    marginTop: "20px"
  },
  dataContainer: {
    display: "flex",
    justifyContent: "center",
    padding: "20px",
    textAlign: "center",
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
const User = () => {
  const classes = useStyles();
  const { userId } = useParams();

  const [user, setUser] = useState({});
  const [creditCards, setCreditCards] = useState([]);
  const [addresses, setAddresses] = useState([])

  useEffect(() => {
    getUser(userId).then(({res}) => {
      setUser(res);
    });
    getUserAddresses(userId).then(({res}) => {
      setAddresses(res);
    });
    getUserCreditCards(userId).then(({res}) => {
      setCreditCards(res);
    });
  }, [userId]);

  return (
    <div className={classes.root}>
      <div >
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
        {addresses.map((address, index) => {
        return (
          <div key={index} className={classes.dataCard}>
            <div className={classes.typography}>
              <Typography className={classes.keyTypography}>Ciudad:</Typography>
              <Link to={`/cities/${address.city.id}`}>
              <Typography>{`${address.city.name}`}</Typography>

              </Link>
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
      </div>
    </div>
  );
};

export default User;