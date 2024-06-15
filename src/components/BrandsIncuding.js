import React from "react";
import { makeStyles } from "@mui/styles";
import { Divider } from "@mui/material";
import Logo1 from "./images/vulcan.jpg";
import Logo2 from "./images/thermann.png";
import Logo3 from "./images/parisi.jpg";
import Logo4 from "./images/grohe.png";
import Logo5 from "./images/DUX.jpg";
import Logo6 from "./images/aquamax.jpg";
import Logo7 from "./images/rheem.png";

const useStyles = makeStyles({
  containerfuild: {
    width: "100%",
    background: "#fff",
    paddingBottom: "3rem",
  },
  container: {
    maxWidth: "1440px",
    margin: "0 auto",
    padding: "0 30px",
    "& img":{
      padding:'0.5rem',
    }
  },
  d_flex: {
    display: "flex",
  },
  flexWrapwrap: { flexWrap: "wrap" },
  justifContentbetween: { justifyContent: "space-between" },
  justifContentcenter_600: {
    "@media screen and (max-width: 600px)": {
      justifyContent: "center",
      display: "flex",
      flexDirection: "column",
      textAlign: "center",
      alignItems: 'center',
    },
  },
  alignItemsflexend: { alignItems: "flex-end" },
  alignItemsflexcenter: { alignItems: "center" },
  w50: { width: "50%" },
  w40: { width: "40%" },
  w60: { width: "60%" },
  medaiwidth_600: {
    "@media screen and (max-width: 920px)": {
      width: "100%",
    },
  },
  mt5px: { marginTop: "5px" },
});
export const BrandsIncuding = () => {
  const classes = useStyles();
  return (
    <div className={`${classes.containerfuild}`}>
      <div className={`${classes.container}`}>
        <div
          className={`${classes.d_flex} ${classes.justifContentbetween} ${classes.alignItemsflexcenter} ${classes.justifContentcenter_600}`}
        >
          <h3 className={`${classes.w40} ${classes.medaiwidth_600}`}>
            We use well known brands including
          </h3>
          <Divider className={`${classes.w60}`} />
        </div>
        <div
          className={`${classes.d_flex} ${classes.justifContentbetween} ${classes.justifContentcenter_600} ${classes.flexWrapwrap}`}
        >
          <img src={Logo1} width="100" height="50" alt="img"/>
          <img src={Logo2} width="100" height="50" alt="img"/>
          <img src={Logo3} width="100" height="50" alt="img"/>
          <img src={Logo4} width="100" height="50" alt="img"/>
          <img src={Logo5} width="100" height="50" alt="img"/>
          <img src={Logo6} width="100" height="50" alt="img"/>
          <img src={Logo7} width="100" height="50" alt="img"/>
        </div>
      </div>
    </div>
  );
};
