import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: "30vw",
    marginTop: "30vh",   
    display: "flex",
    flexWrap: "wrap-reverse"
  },
  button: {
    paddingLeft: "100px",
    paddingRight: "100px",
    paddingTop: "30px",
    paddingBottom: "30px",
    margin: "30px"
  }
}));

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Button variant="outlined" color="primary" 
              size="large" href="/users" className={classes.button}>
        Usuarios
      </Button>
      <Button variant="outlined" color="secondary"
              size="large" href="/cities" className={classes.button}>
        Ciudades
      </Button>
    </div>

  );
};

export default Home;
