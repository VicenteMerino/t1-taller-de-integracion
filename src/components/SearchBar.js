import { classes } from 'istanbul-lib-coverage';
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { getAllUsers, getAllCities } from '../utils/fetch';
import { AppBar, TextField, } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import PersonIcon from '@material-ui/icons/Person';

const useStyles = makeStyles((theme) => ({
  navbar: {
    paddingBottom: "10px",
    paddingTop: "20px",
    textAlign: "center",
    alignItems: "center",
  },
  search: {
    width: "20vw",
    backgroundColor: "white",
    marginRight: "20px"
  },
  submit: {
    color: "red"
  },
}))

const SearchBar = () => {
  const classes = useStyles();
  const [users, setUsers] = useState([]);
  const [type, setType] = useState("");
  const [query, setQuery] = useState("");
  const [cities, setCities] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [filteredCities, setFilteredCities] = useState([]);


  useEffect(() => {
    getAllUsers().then((usersJson) => {
      setUsers(usersJson);
    })
  }, []);
  return (
    <AppBar className={classes.navbar}>
    <Paper className={classes.root} >

      <IconButton className={classes.iconButton}  
                  aria-label="menu" onClick={() => setType("cities")}
                  style={type === "cities" ? {backgroundColor: "#f7dfaf"} : {backgroundColor: "white"}} >
        <LocationCityIcon />
      </IconButton>
      <IconButton className={classes.iconButton}
                  aria-label="menu" onClick={() => setType("users")}
                  style={type === "users" ? {backgroundColor: "#f7dfaf"} : {backgroundColor: "white"}} >
        <PersonIcon />
      </IconButton>
      <InputBase
        className={classes.input}
        placeholder="Usuario o ciudad"
        inputProps={{ 'aria-label': 'search google maps' }}
        onChange={(e) => setQuery(e.currentTarget.value)}
      />
        <a href={query ? `${window.location.origin}/${type}?query=${query}`: "#"}>
          <IconButton type="submit" className={classes.iconButton} aria-label="search">
            <SearchIcon />
          </IconButton>
        </a>
      </Paper>
    </AppBar>
  );
}

export default SearchBar;