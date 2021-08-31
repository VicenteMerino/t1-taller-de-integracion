import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { getAllCities } from '../../utils/fetch';
import { useQuery } from '../../utils/query'

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
const Cities = () => {
  const classes = useStyles();
  const query = useQuery();
  const param = query.get("query") ? query.get("query").split(" ").join("+") : "";
  const [cities, setCities] = useState([]);
  useEffect(() => {
    getAllCities(param).then((citiesJson) => {
      console.log(citiesJson)
      setCities(citiesJson);
    })
  }, [param]);

  return (
    <div className={classes.root}>
      <List className={classes.usersContainer}>
      {cities.map((city, index) => {
        return (
          <ListItem button component="a" href={`/cities/${city.id}`}
                    key={index} className={classes.userItem}>
            <span>
              {`${city.name}, ${city.country}`}
            </span>
          </ListItem>
          )
      })}
      </List>
    </div>
  );
};

export default Cities;
