import { classes } from 'istanbul-lib-coverage';
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { getAllUsers, getAllCities } from '../utils/fetch';
import { AppBar, TextField, } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';

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
  }
}))

const SearchBar = () => {
  const classes = useStyles();
  const [users, setUsers] = useState([]);
  const [cities, setCities] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [filteredCities, setFilteredCities]

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    const newFilter = users.filter((value) => {
      const userName = `${value.name} ${value.lastName}`.toLowerCase();
      console.log(userName.includes(searchWord.toLowerCase()));
      return userName.includes(searchWord.toLowerCase());
    });
    if (searchWord !== "") {
      setFilteredUsers(newFilter);
    } else {
      setFilteredUsers([])
    }
  }

  console.log(filteredUsers)

  useEffect(() => {
    getAllUsers().then((usersJson) => {
      setUsers(usersJson);
    })
  }, []);
  return (
    <AppBar className={classes.navbar}>
        <Autocomplete options={users} 
                      getOptionLabel={(option) =>`${option.name} ${option.lastName}`}
                      renderInput={(params) => {
                      return (<TextField {...params} label="Usuarios" variant="outlined" />)
                    }}
                      onChange={(event, value) => {
                        console.log(value)
                      }}
                      className={classes.search}/>
        {/* <div className={classes.searchInput}>
          <input type="text" 
                onChange={handleFilter}
                className={classes.input} />
          <div className={classes.searchIcon}></div>
        </div> */}
        {/* {filteredUsers.length > 0 && (
          <div className={classes.dataResult}>
            {filteredUsers.map((value, key) => {
              return (
                <a key={key} className={classes.dataItem} href={`/users/${value.id}`}>
                  <p >{`${value.name} ${value.lastName}`}</p>
                </a>
              );
            })} */}
        {/* </div>
        )} */}
    </AppBar>
  );
}

export default SearchBar;