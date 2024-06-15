import React from "react";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
const useStyles = makeStyles({
  containerfuild: {
    width: "100%",
   
  },
  container: {
    maxWidth: "1440px",
    margin: "0 auto",
    padding: "20px 30px",
  },
  link:{
    color:'#00aeff'
        },
  logo: {
    background: "#fff",
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: "30px",
    fontWeight: "900",
    borderRadius: '50%',
    width: '100px',
    height: '170px',
    color: "#004881",
    padding: "5px 40px",
  },
  textCenter:{textAlign: 'center',},
  bgdarkgrey: {
    background: "#dfe0e4",
  },
  d_flex: {
    display: "flex",
  },
  medaip1_920: {
    "@media screen and (max-width: 920px)": {
      padding:'2.5rem',
    },
  },
  flexWrapwrap: { flexWrap: "wrap" },
  justifyContentevenly:{ justifyContent: 'space-evenly',},
  justifyContentcenter:{ justifyContent: 'center',},
 alignItemscenter:{  alignItems: 'center',},
  w300:{
    width:'300px'
  },
  w500:{
    width:'500px'
  }
});
export const PlumbingExample = () => {
  const classes = useStyles();
  return (
    <div className={`${classes.containerfuild}`}>
      <div
        className={`${classes.container} ${classes.medaip1_920} ${classes.textCenter} ${classes.bgdarkgrey} ${classes.d_flex} ${classes.flexWrapwrap} ${classes.justifyContentevenly} ${classes.alignItemscenter}`}
      >
        <div className={`${classes.w300} ${classes.d_flex} ${classes.justifyContentcenter}`}>
          <div className={`${classes.logo}`}>LOGO</div>
        </div>
        <div className={`${classes.w500}`}>
          <h2>
            At the end of the day, our goal is simple: to provide reliable,
            exceptional plumbing services that exceed expectation
          </h2>
          <p>
            This dedication to customer satisfaction, along with our experience
            and technical expertise, is what sets us apart.
          </p>
          <p>
            Get started today with <Link className={classes.link}>plumbing example</Link>
          </p>
        </div>
      </div>
    </div>
  );
};
