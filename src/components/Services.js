import React from "react";
import { makeStyles } from "@mui/styles";
import HandImg from "./images/plumbing-white.png";
const useStyles = makeStyles({
  containerfuild: {
    width: "100%",
    background: "white",
  },
  container: {
    maxWidth: "1440px",
    margin: "0 auto",
    padding: "30px 30px 0 30px",
  },
  d_flex: {
    display: "flex",
  },
  shape: {
    // clipPath: 'polygon(0 0, 86% 0, 100% 100%, 0% 100%)',
    clipPath: "polygon(0 0, 89% 0, 100% 100%, 0% 100%)",
  },
  bg_grey: { background: "#808080" },
  bg_darkblue: { background: "#002440" },
  bg_skyblue: { background: "#00aeff" },
  textwhite: { color: "#fff" },
  textskyblue: { color: "#00aeff" },
  flexWrapwrap: { flexWrap: "wrap" },
  justifContentbetween: { justifyContent: "space-between" },
  justifContentcenter: { justifyContent: "center" },
  alignItemsflexend: { alignItems: "flex-end" },
  alignItemscenter: { alignItems: "center" },
  textAligncenter: { textAlign: "center" },
  w350: { width: "350px" },
  w50: { width: "50%" },
  w90: { width: "90%" },
  h250px: { height: "250px" },
  medaiw100_920:{
    '@media screen and (max-width: 920px)': {
     width: "100% !important"
  },
  },
  p5px: {
    padding: "5px",
  },
  p0_1: {
    padding: "0 1rem",
  },
  m0_5: { margin: "0.5rem" },
  m0auto: { margin: "0 auto" },
});
const ServicesContent = [
  {
    name: "BLOCKED DRAINS",
  },
  {
    name: "HOT WATER",
  },
  {
    name: "LEAKING PIPES",
  },
  {
    name: "GAS FITTING",
  },
  {
    name: "LEAKING TAPS",
  },
  {
    name: "PIPE RELINING",
  },
  {
    name: "LEAKING TOILETS",
  },
  {
    name: "LEAK DETECTION",
  },
];
export const Services = () => {
  const classes = useStyles();
  return (
    <div className={`${classes.containerfuild} `}>
      <div className={`${classes.container} `}>
        <div
          className={`${classes.textAligncenter} ${classes.w50} ${classes.medaiw100_920} ${classes.m0auto}`}
        >
          <h1>
            Plumbing <span className={classes.textskyblue}>services</span> we
            offer
          </h1>
          <h5>
            We are industry leaders providing quality plumbing, drainage, hot
            water, and roofing-related services to our Community of Customers.
          </h5>
        </div>
        <div className={`${classes.d_flex} ${classes.flexWrapwrap} ${classes.justifContentcenter}`}>
          {ServicesContent.map((data) => (
            <div className={`${classes.w350}`}>
              <div
                className={` ${classes.h250px} ${classes.d_flex} ${classes.alignItemsflexend} ${classes.bg_grey} ${classes.m0_5}`}
              >
                <div
                  className={`${classes.d_flex} ${classes.w90} ${classes.bg_darkblue} ${classes.shape} ${classes.textwhite}`}
                >
                  <div
                    className={`${classes.bg_skyblue} ${classes.p5px} ${classes.d_flex} ${classes.alignItemscenter} ${classes.justifContentcenter} `}
                  >
                    <img
                      className={classes.border}
                      src={HandImg}
                      width="30px"
                      alt="img"
                    />
                  </div>
                  <h5 className={classes.p0_1}>{data.name}</h5>
                </div>
              </div>{" "}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
