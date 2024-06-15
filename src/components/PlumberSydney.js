import React from "react";
import { makeStyles } from "@mui/styles";
import AccordionUsage from "./AccordionUsage";
import { Button } from "@mui/material";
const useStyles = makeStyles({
  containerfuild: {
    width: "100%",
  },
  container: {
    maxWidth: "1440px",
    margin: "0 auto",
    padding: "30px 30px",
    "& h1":{
      fontSize:'4rem !important',
"& span":{
color:'#00aeff',
},
    },
  },
  d_flex: {
    display: "flex",
  },
  flexWrapwrap: { flexWrap: "wrap" },
  justifyContentcenter: { justifyContent: "center" },
  btncontainer:{
    display:'flex',
    flexWrap:'wrap',
    margin:'2rem 0',
  },
  bluebtn: {
    backgroundColor: "#00aeff !important",
    color: "#f0f0f0 !important",
    borderRadius: "0 !important",
    boxShadow: "none !important",
    transform: "skew(-26deg) !important",
    textTransform: "none !important",
    marginRight: "0.5rem !important",
    "& span": {
      transform: "skew(26deg) !important",
    },
  },
  darkbluebtn: {
    backgroundColor: "#003356 !important",
    color: "#f0f0f0 !important",
    borderRadius: "0 !important",
    boxShadow: "none !important",
    transform: "skew(-26deg) !important",
    textTransform: "none !important",
    marginLeft: "0.5rem !important",
    "& span": {
      transform: "skew(26deg) !important",
    },
  },
});
export const PlumberSydney = () => {
  const classes = useStyles();
  return (
    <div className={`${classes.containerfuild}`}>
      <div className={`${classes.container}`}>
        <h1>Plumber sydney <span>faqs</span></h1>
        <p>
          We are industry leaders providing quality plumbing, drainage, hot
          water, and roofing-related services to our Community of Customers.
          We’re ready to assist you with all your needs. From routine
          maintenance to emergency repairs and quality installations, we have
          you covered.
        </p>
        <AccordionUsage />
        <div className={`${classes.justifyContentcenter} ${classes.d_flex} ${classes.btncontainer}`}>
          <Button className={`${classes.bluebtn}`}><span>1300 000 000</span> </Button>
          <Button className={`${classes.darkbluebtn}`}><span>Get a free quote</span></Button>
        </div>
      </div>
    </div>
  );
};
