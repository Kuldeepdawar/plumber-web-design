import React from "react";
import { makeStyles } from "@mui/styles";
import HandImg from "./images/payment-card.png";
import { Button } from "@mui/material";
const useStyles = makeStyles({
  containerfuild: {
    width: "100%",
    marginTop: '-2.5rem',

  },
  container: {
    maxWidth: "1440px",
    margin: "0 auto",
    padding: "0 30px",
    "@media screen and (max-width: 920px)": {
      padding: "30px 30px",
    },
  },
  logo: {
    background: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "30px",
    fontWeight: "900",
    borderRadius: "60%",
    width: "100px",
    height: "150px",
    color: "#004881",
    padding: "5px 40px",
  },
  bgdarkblue: {
    background: "#004881",
  },
  bgwhite: {
    background: "#fff",
  },
  positionrelative: { position: "relative",padding:'1rem', },

  d_flex: {
    display: "flex",
  },
  textCenter: { textAlign: "center" },
  flexWrapwrap: { flexWrap: "wrap" },
  justifyContentbetween: { justifyContent: "space-between" },
  justifyContentevenly: { justifyContent: "space-evenly" },
  justifyContentaround: { justifyContent: " space-around" },
  medaijustifContentcenter_920: {
    "@media screen and (max-width: 920px)": {
      justifyContent: "center !important",
    },
  },
  alignItemscenter: { alignItems: "center" },
  positionrelativezindex: { position: "relative", zIndex: "3" },
  paymentplans: {
    color: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& h3": {
      margin: "0",
      fontSize: "2rem",
      fontWeight: "300",
    },
    "& h1": {
      margin: "0",
      fontSize: "3rem",
      marginBottom: "1rem",
    },
  },
  w70: {
    width: "70%",
  },
  medaiw90_920: {
    "@media screen and (max-width: 920px)": {
      width: "90%",
    },
  },
  w20: {
    width: "200px",
  },
  ml0_5: {
    marginLeft: "0.5rem",
  },
  medaip1_920: {
    "@media screen and (max-width: 920px)": {
      padding: "1rem",
    },
  },
  bluebtn: {
    backgroundColor: "#f0f0f0 !important",
    color: "#00aeff !important",
    borderRadius: "0 !important",
    boxShadow: "none !important",
    textTransform: "none !important",
    marginLeft: "0.5rem !important",
  },
  outlinebtn: {
    border: "1px solid #fff !important",
    color: "#fff !important",
    borderRadius: "0 !important",
    boxShadow: "none !important",
    marginRight: "0.5rem !important",
    "&:hover": {
      border: "1px solid #fff !important",
    },
  },
  stepscontainer: {
    padding: "2rem",
    "& h1": {
      margin: "0",
      color: "#00aeff",
    },
    "& h4": {
      margin: "0",
    },
    "& h5": {
      margin: "0",
      fontWeight: "500",
    },
  },
  imgcontainer: {
    scale: "1.3",
    bottom: "0px",
    right: "100px",
    transform: "rotate(-13deg)",
    position: "absolute",
    "@media screen and (max-width: 920px)": {
      display: "none !important",
    },
  },
});
export const PayLater = () => {
  const classes = useStyles();
  return (
    <div className={`${classes.containerfuild}`}>
      <div className={`${classes.container}`}>
        <div className={`${classes.positionrelative} ${classes.bgdarkblue}`}>
          <div
            className={`${classes.w70} ${classes.textCenter} ${classes.medaiw90_920} ${classes.medaip1_920} ${classes.d_flex} ${classes.flexWrapwrap} ${classes.medaijustifContentcenter_920} ${classes.positionrelative} ${classes.bgdarkblue} ${classes.justifyContentevenly} ${classes.alignItemscenter}`}
          >
            <div>
              <h1 className={`${classes.logo}`}>Logo</h1>
            </div>
            <div className={classes.paymentplans}>
              <h3>Ask about our payment plans</h3>
              <h1>Repair now, Pay Later</h1>
              <div className={`${classes.d_flex}`}>
                <Button className={classes.outlinebtn}>1300 000 000</Button>
                <Button className={classes.bluebtn}>Get a free quote</Button>
              </div>
            </div>
          </div>
          <div className={classes.imgcontainer}>
            <img
              className={classes.border}
              src={HandImg}
              width="300px"
              alt="img"
            />
          </div>
        </div>
        <div
          className={`${classes.d_flex} ${classes.positionrelativezindex} ${classes.bgwhite} ${classes.flexWrapwrap} ${classes.justifyContentbetween} ${classes.justifyContentaround} ${classes.stepscontainer}`}
        >
          <div className={`${classes.d_flex} ${classes.w20}`}>
            <div>
              <h1>01</h1>
            </div>
            <div className={classes.ml0_5}>
              <h4>Do it now</h4>
              <h5>Big jobs or little jobs, repaired today.</h5>
            </div>
          </div>
          <div className={`${classes.d_flex} ${classes.w20}`}>
            <div>
              <h1>02</h1>
            </div>
            <div className={classes.ml0_5}>
              <h4>Pay later</h4>
              <h5>Pay it off in small, affordable installments.</h5>
            </div>
          </div>
          <div className={`${classes.d_flex} ${classes.w20}`}>
            <div>
              <h1>03</h1>
            </div>
            <div className={classes.ml0_5}>
              <h4>No interest ever</h4>
              <h5>Talk to us to find out more.</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
