import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import PersonIcon from '@material-ui/icons/Person';
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles((theme) => ({
  navbar: {
    paddingBottom: "10px",
    paddingTop: "20px",
    textAlign: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
  },
  search: {
    width: "30vw",
    backgroundColor: "white",
    marginRight: "20px",
    marginLeft: "30%"
  },
  home: {
    marginLeft: "5%",
    backgroundColor: "white",
    padding: "5px",
    borderRadius: "6px",
  }

}))

const SearchBar = () => {
  const classes = useStyles();
  const [type, setType] = useState("");
  const [query, setQuery] = useState("");

  return (
    <AppBar className={classes.navbar}>
    <a href="/" className={classes.home}>
      <HomeIcon />
    </a>
    <Paper className={classes.search} >

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
        placeholder="Usuario o ciudad"
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