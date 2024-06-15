import React from "react";
import { makeStyles } from "@mui/styles";
import { Button } from "@mui/material";
const useStyles = makeStyles({
  containerfuild: {
    width: "100%",
    background: "#0074ff",
    color: "#fff",
  },
  container: {
    maxWidth: "1440px",
    margin: "0 auto",
    padding: "0 30px",
  },
  d_flex: {
    display: "flex",
  },
  flexWrapwrap:{
flexWrap:'wrap',
  },
  justifContentbetween: { justifyContent: "space-between" },
  alignItemsflexend: { alignItems: "flex-end" },
  alignItemscenter: { alignItems: "center" },
  w50: { width: "50%" },
  mt5px: { marginTop: "5px" },
  medaijustifContentcenter_920:{
    '@media screen and (max-width: 920px)': {
   justifyContent: "center !important" ,
  },
  },
  btncontainer: {
    backgroundColor: " #004881 !important",
    display: "flex",
    width: "500px",
    justifyContent: "space-evenly",
    padding: "1.5rem",
    position: "absolute",
    right: "0",
    clipPath: 'polygon(5% 0%, 100% 0%, 100% 100%, 0% 100%)',
    '@media screen and (max-width: 920px)': {
    backgroundColor: " transparent !important",
    width: "100%",
      position: "relative",
      flexDirection: 'column',
   },
  },
  bluebtn: {
    backgroundColor: "#f0f0f0 !important",
    color: "#00aeff !important",
    borderRadius: "0 !important",
    boxShadow: "none !important",
    transform: "skew(-26deg) !important",
    textTransform: "none !important",
    marginRight: "0.5rem",
    "& span": {
      transform: "skew(26deg) !important",
    },
    '@media screen and (max-width: 920px)': {
     margin:'0.5rem 1rem !important'
   },
  },
  outlinebtn: {
    border: "1px solid #fff !important",
    transform: "skew(-26deg) !important",
    color: "#fff !important",
    borderRadius: "0 !important",
    boxShadow: "none !important",
    marginLeft: "0.5rem",
    "& span": {
      transform: "skew(26deg) !important",
    },
    "&:hover": {
      border: "1px solid #fff !important",
    },
    '@media screen and (max-width: 920px)': {
    backgroundColor: "#004881 !important",
    border: "none !important",
      margin:'0.5rem 1rem !important'
    },
  },
});
export const QuoteBanner = () => {
  const classes = useStyles();
  return (
    <div className={`${classes.containerfuild}`}>
      <div
        className={`${classes.container} ${classes.d_flex} ${classes.medaijustifContentcenter_920} ${classes.flexWrapwrap} ${classes.justifContentbetween} ${classes.alignItemscenter}`}
      >
        <div>
          <h1>Get a free onsite quote</h1>
        </div>
        <div className={classes.btncontainer}>
          <Button className={classes.outlinebtn}><span>1300 000 000</span></Button>
          <Button className={classes.bluebtn}><span>Get a free quote</span></Button>
        </div>
      </div>
    </div>
  );
};
