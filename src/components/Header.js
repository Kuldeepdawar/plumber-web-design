import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { makeStyles } from "@mui/styles";
import { Button } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
// import zIndex from "@mui/material/styles/zIndex";
const useStyles = makeStyles({
  body: {
    margin: 0,
    padding: 0,
    fontFamily: '"Poppins", sans-serif',
    backgroundColor: "#fcfcfc",
  },
  container: {
    maxWidth: "1440px",
    margin: "0 auto",
    padding: "0px 30px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },
  navbar: {
    height: 80,
    backgroundColor: "#231f20",
    position: "relative",
    color: "white",
    "& .css-sghohy-MuiButtonBase-root-MuiButton-root": {
      backgroundColor: "#00aeff !important",
      borderRadius: "0",
      boxShadow: "none",
      transform: "skew(-26deg)",
      textTransform: "none",
      "& span": {
        transform: "skew(26deg)",
      },
    },
    "& .css-1rwt2y5-MuiButtonBase-root-MuiButton-root": {
      border: "1px solid #fff",
      transform: "skew(-26deg)",
      color: "#FFF",
      borderRadius: "0",
      boxShadow: "none",
      "& span": {
        transform: "skew(26deg)",
      },
      "&:hover": {
        border: "1px solid #fff",
      },
    },
  },

  logo: {
    background: "#fff",
    fontSize: "30px",
    fontWeight: "900",
    color: "#004881",
    borderRadius: "10px",
    padding: "5px 40px",
  },

  menuIcon: {
    display: "none",
  },
  navElements: {
    width: "70%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  navElementsActive: {
    width: 270,
  },
  navElementsUl: {
    display: "flex",
    width: "30%",
    justifyContent: "space-between",
    listStyleType: "none",
    padding: "0",
  },
  navElementsUlLiNotLastChild: {
    marginRight: 80,
  },
  navElementsUlA: {
    fontSize: 16,
    fontWeight: 400,
    color: "#fff",
    textDecoration: "none",
  },
  navElementsUlAActive: {
    color: "#574c4c",
    fontWeight: 500,
    position: "relative",
  },
  navElementsUlAActiveAfter: {
    content: '""',
    position: "absolute",
    bottom: -4,
    left: 0,
    width: "100%",
    height: 2,
    backgroundColor: "#574c4c",
  },
  "@media (max-width: 768px)": {
    navElementsUlLiNotLastChild: {
      marginRight: 30,
    },
  },
  "@media (max-width: 1000px)": {
    menuIcon: {
      display: "block",
      cursor: "pointer",
    },
    navElements: {
      display: "flex",
      flexDirection: "column",
      position: "absolute",
      right: 0,
      top: 80,
      backgroundColor: "#231f20",
      width: 0,
      height: "calc(100vh - 60px)",
      transition: "all 0.3s ease-in",
      overflow: "hidden",
    },
    navElementsActive: {
      width: "100%",
      zIndex: "3",
      height: "80vh",
      padding: "2rem 0",
      borderTop: "1px solid white",
      "& li": {
        padding: "20px 10px",
        borderBottom: "1px solid white",
      },
    },
    navElementsUl: {
      display: "flex",
      flexDirection: "column",
    },
    navElementsUlLi: {
      marginRight: "unset",
      marginTop: 22,
    },
  },
  d_flex: {
    display: "flex",
  },
});

const Header = () => {
  const classes = useStyles();
  const [showNavbar, setShowNavbar] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  const formatTime = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    const strTime = `${hours}:${minutes}:${seconds} ${ampm}`;
    return strTime;
  };
  return (
    <nav className={classes.navbar}>
      <div className={classes.container}>
        <div className={classes.logo}>Logo</div>
        <div className={classes.menuIcon} onClick={handleShowNavbar}>
          <MenuIcon />
        </div>
        <div
          className={`${classes.navElements} ${
            showNavbar && classes.navElementsActive
          }`}
        >
          <ul className={classes.navElementsUl}>
            <li>
              <NavLink to="/" className={classes.navElementsUlA}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className={classes.navElementsUlA}>
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={classes.navElementsUlA}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/faq" className={classes.navElementsUlA}>
                FAQ
              </NavLink>
            </li>
          </ul>
          <div className={classes.d_flex}>
            We’re Available <FiberManualRecordIcon color="success" />{" "}
            {formatTime(currentTime)}
          </div>
          <Button variant="contained">
            <span>Get a free quote</span>
          </Button>
          <Button variant="outlined">
            <span>1300 00 000</span>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
