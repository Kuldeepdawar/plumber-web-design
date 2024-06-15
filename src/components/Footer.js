import React from "react";
import { makeStyles } from "@mui/styles";
import { Button, Divider } from "@mui/material";
const useStyles = makeStyles({
  containerfuild: {
    width: "100%",
    paddingBottom: "1rem",
    "& h3": {
      margin: "0",
    },
  },
  container: {
    maxWidth: "1440px",
    margin: "0 auto",
    padding: "30px 30px",
  },
  logo: {
    background: "#fff",
    fontSize: "30px",
    fontWeight: "900",
    color: "#004881",
    borderRadius: "10px",
    padding: "5px 40px",
  },
  clippath: {
    clipPath: "polygon(5% 25%, 100% 25%, 100% 100%, 0 100%, 0 0)",
    "@media screen and (max-width: 912px)": {
      clipPath: "polygon(5% 0, 100% 0, 100% 100%, 0 100%, 0 0)",
    },
  },
  d_flex: {
    display: "flex",
  },
  textwhite: {
    color: "#fff !important",
  },
  bluedivider: {
    borderWidth: "3px !important",
    borderColor: "#00aeff !important",
  },
  bluetransdivider: {
    width: "80% !important",
    margin: "0 auto !important",
    borderWidth: "1px !important",
    borderColor: "#325b77 !important",
  },
  bgdarkblue: {
    background: "#003356",
  },
  flexWrapwrap: {
    flexWrap: "wrap",
  },
  medaicolumn_920: {
    "@media screen and (max-width: 920px)": {
      flexDirection: "column !important",
      width:'100%',
    },
  },
  justifContentbetween: { justifyContent: "space-between" },
  alignItemsflexend: { alignItems: "flex-end" },
  alignitemscenter: { alignItems: "center" },
  liststylenone: {
    listStyle: "none",
  },
  listpadding0: {
    padding: "0",
    "& li":{
padding:'0.5rem 0'
    },
  },
  w20px: {
    width: "20px",
  },
  w50: { width: "50%" },
  w80: {
    width: "80%",
  },
  m0auto: {
    margin: "0 auto",
  },
  centermobile:{
   "@media screen and (max-width: 920px)": {
      width:'30%',
      display: 'flex',
      textAlign: 'center',
      flexDirection: 'column',
      alignItems: 'center',
    },
    "@media screen and (max-width: 600px)": {
      width:'50%',
      display: 'flex',
      textAlign: 'center',
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  mt5px: { marginTop: "5px" },
  pt8: { paddingTop: "8rem" },
  pb1: { paddingBottom: "1rem !important" },
  bluebtn: {
    backgroundColor: "#f0f0f0 !important",
    color: "#00aeff !important",
    borderRadius: "0 !important",
    boxShadow: "none !important",
    transform: "skew(-26deg) !important",
    textTransform: "none !important",
    marginTop: "0.5rem !important",
    "& span": {
      transform: "skew(26deg) !important",
    },
  },
});
export const Footer = () => {
  const classes = useStyles();
  return (
    <div
      className={`${classes.containerfuild} ${classes.bgdarkblue} ${classes.clippath}`}
    >
      <div className={`${classes.container} ${classes.textwhite}`}>
        <div
          className={`${classes.d_flex} ${classes.medaicolumn_920}  ${classes.flexWrapwrap} ${classes.justifContentbetween} ${classes.alignitemscenter} ${classes.pt8} ${classes.pb1} ${classes.w80} ${classes.m0auto}`}
        >
          <div>
            <h1 className={classes.logo}>LOGO</h1>
          </div>
          <div className={`${classes.centermobile}`}>
            <h3>Services</h3>
            <Divider className={`${classes.bluedivider} ${classes.w20px}`} />
            <ul className={`${classes.liststylenone} ${classes.listpadding0}`}>
              <li>Blocked Drains</li>
              <li>Hot Water</li>
              <li>Repairs & Maintenance</li>
              <li>View All Services</li>
            </ul>
          </div>
          <div className={`${classes.centermobile}`}>
            <h3>Quick links</h3>
            <Divider className={`${classes.bluedivider} ${classes.w20px}`} />
            <ul className={`${classes.liststylenone} ${classes.listpadding0}`}>
              <li>Services</li>
              <li>About us</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div className={`${classes.centermobile}`}>
            <h3>Contact us</h3>
            <Divider className={`${classes.bluedivider} ${classes.w20px}`} />
            <ul className={`${classes.liststylenone} ${classes.listpadding0}`}>
              <li>P: 1300 000 000</li>
              <li>E: info@plumber.com.au</li>
              <li>
                <Button className={`${classes.bluebtn}`}>
                  <span>Get a free quote</span>
                </Button>
              </li>
            </ul>
          </div>
        </div>
        <Divider className={`${classes.bluetransdivider} `} />
        <div
          className={`${classes.d_flex} ${classes.flexWrapwrap} ${classes.justifContentbetween} ${classes.w80} ${classes.m0auto}  ${classes.alignitemscenter}`}
        >
          <p>
            © 2023 . All rights reserved. Here’s our Terms and Conditions and
            Privacy Policy
          </p>
          <h3>Services by MEDIACO</h3>
        </div>
      </div>
    </div>
  );
};
