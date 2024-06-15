import React from 'react'
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  containerfuild: {
    width: "100%",
  },
  container: {
    maxWidth: "1440px",
    margin: "0 auto",
    padding: "0 30px",
  },
  d_flex: {
    display: "flex",
  },
});
export const BrandsIncuding = () => {
  const classes = useStyles();
  return (
    <div className={`${classes.containerfuild}`}>
    <div
        className={`${classes.container}`}
      >
        
      </div>
   </div>
  )
}
