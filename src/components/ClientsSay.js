import React from "react";
import { makeStyles } from "@mui/styles";
import { Rating } from "@mui/material";
const useStyles = makeStyles({
  containerfuild: {
    width: "100%",
  },
  container: {
    maxWidth: "1440px",
    margin: "0 auto",
    padding: "30px 30px",
  },
  textcenter: {
    textAlign: "center",
  },
  d_flex: {
    display: "flex",
  },
  flexWrapwrap: { flexWrap: "wrap" },
  justifyContentaround: { justifyContent: "space-around" },
  clientsayscontainer: {
    width: "350px",
    "& h2": {
      margin: "0",
      color: "#00aeff",
    },
    "& h3": {
      margin: "0",
    },
    "& h4": {
      margin: "0",
      color: "#00aeff",
    },
    "& p": {
      margin: "0",
    },
  },
});
const ClientsSayContent = [
  {
    name: "John Smith",
    text: "This is placeholder text This is placeholder textThis is placeholder textThis is placeholder textThis is placeholder textThis is placeholder text",
    contentname: "Abbotsford",
  },
  {
    name: "John Smith",
    text: "This is placeholder text This is placeholder textThis is placeholder textThis is placeholder textThis is placeholder textThis is placeholder text",
    contentname: "Five Dock",
  },
  {
    name: "John Smith",
    text: "This is placeholder text This is placeholder textThis is placeholder textThis is placeholder textThis is placeholder textThis is placeholder text",
    contentname: "Ultimo",
  },
];
export const ClientsSay = () => {
  const classes = useStyles();
  return (
    <div className={`${classes.containerfuild}`}>
      <div className={`${classes.container} ${classes.textcenter}`}>
        <h1>What our clients say.</h1>
        <div className={`${classes.d_flex} ${classes.flexWrapwrap} ${classes.justifyContentaround}`}>
          {ClientsSayContent.map((data) => (
            <div className={classes.clientsayscontainer}>
              <h2>"</h2>
              <h3>{data.name}</h3>
              <p>{data.text}</p>
              <Rating name="read-only" value={5} readOnly />
              <h4>{data.contentname}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
