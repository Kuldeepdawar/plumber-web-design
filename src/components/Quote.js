import React from "react";
import { makeStyles } from "@mui/styles";
import LockIcon from "@mui/icons-material/Lock";
import { Button, TextField, useMediaQuery } from "@mui/material";

import HandImg from "./images/phone-hand.png";

const useStyles = makeStyles({
    container: {
        maxWidth: "1440px",
        margin: "0 auto",
    },
    innerContainer: {
        width: "100%",
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: "#f1f1f1",
        position: "relative",
        paddingBottom: "10rem",
        '@media screen and (max-width: 1000px)': {
            paddingBottom: "0rem",
        },
        "& h1": {
            fontSize: '4rem',
            fontWeight: '900',
            margin: "0 0 40px 0",
            '@media screen and (max-width: 620px)': {
                fontSize: '2.5rem'
            },
        },
        '& p': {
            lineHeight: 1.5
        },
        '& > div': {
            width: '45%',
            '@media screen and (max-width: 820px)': {
                width: '95%',
            },
        }
    },
    contentContainer: {
        padding: '50px'
    },
    imageContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        overflow: 'hidden',
        paddingLeft: '1rem',
        marginBottom: "-1rem",
        '@media screen and (max-width: 1100px)': {
            marginBottom: "-3rem",
        },
        '@media screen and (max-width: 1008px)': {
            marginBottom: "-6rem",
        },
        '@media screen and (max-width: 1000px)': {
            marginBottom: "-9rem",
        },
        '@media screen and (max-width: 920px)': {
            marginBottom: "-10rem",
        },
        '@media screen and (max-width: 820px)': {
            display: 'none'
        },
        '& ._card': {
            background: '#00aeff',
            padding: '1rem',
            height: 'fit-content',
            transform: "skew(-10deg)",
            '& > div': {
                width: '150px',
                transform: "skew(0deg)",
                textAlign: 'center',
                border: "dashed 4px white",
                paddingBottom: '10px',
                '& h1, & h6': {
                    margin: '10px',
                    color: 'white',
                    transform: "skew(10deg)",
                }
            }
        }
    },
    formContainer: {
        position: 'absolute',
        bottom: '-6rem',
        left: 0,
        right: 0,
        width: '97% !important',
        margin: '0 auto',
        zIndex: '3',
        maxWidth: '1440px',
        '@media screen and (max-width: 1200px)': {
            bottom: '-9rem',
            width: '100% !important',
        },
        '@media screen and (max-width: 1000px)': {
            position: 'relative',
            bottom: '0rem'
        },
    },
    formInnerContainer: {
        background: 'white',
        padding: '2rem',
        '& > div:nth-child(1)': {
            display: 'flex',
            justifyContent: 'space-between',
            '@media screen and (max-width: 1200px)': {
                flexDirection: 'column',
            },
            '@media screen and (max-width: 768px)': {
                textAlign: 'center',
            },
            '& > div': {
                display: 'flex',
                justifyContent: 'space-between',
                '@media screen and (max-width: 1200px)': {
                    justifyContent: 'flex-start',
                },
                '@media screen and (max-width: 768px)': {
                    flexDirection: 'column',
                },
                '& > p': {
                    fontSize: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    marginLeft: '20px',
                    '@media screen and (max-width: 1200px)': {
                        marginRight: '20px',
                        marginLeft: '0px',
                    },
                    '@media screen and (max-width: 768px)': {
                        justifyContent: 'center',
                    },
                }
            }
        },
        '& ._form': {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            '@media screen and (max-width: 768px)': {
                justifyContent: 'center',
            },
            '& ._regular_field': {
                width: "24%",
                marginTop: '1rem'
            },
            '& ._description_field': {
                width: "50%",
                marginTop: '1rem'
            },
            '& button': {
                width: "24%",
                marginTop: '1rem',
                background: '#00aeff',
            },
            '& > div, & > button': {
                '@media screen and (max-width: 768px)': {
                    minWidth: '400px'
                },
                '@media screen and (max-width: 580px)': {
                    minWidth: '100%'
                },
            }
        }
    },
    textBlue: {
      color: "#00aeff",
    },
});

export const Quote = () => {
    const classes = useStyles();
    const isTab = useMediaQuery('(max-width: 1000px)');
    
    const renderForm = () => (
        <div className={classes.formContainer}>
            <div className={classes.formInnerContainer}>
                <div>
                    <h3>Describe your <span className={classes.textBlue}>plumbing</span> requirement to get a quote</h3>
                    <div>
                        <p>
                            <LockIcon color="success" />
                            Your information is 100% safe and secure
                        </p>
                        <p>
                            <LockIcon color="success" />
                            You will receive a response within minutes
                        </p>
                    </div>
                </div>
                <div className="_form">
                    <TextField
                        className="_regular_field"
                        id="outlined-password-input"
                        label="Name"
                        type="text"
                    />
                    <TextField
                        className="_regular_field"
                        id="outlined-password-input"
                        label="Phone Number"
                        type="number"
                    />
                    <TextField
                        className="_regular_field"
                        id="outlined-password-input"
                        label="Email Address"
                        type="text"
                    />
                    <TextField
                        className="_regular_field"
                        id="outlined-password-input"
                        label="Suburb"
                        type="text"
                    />
                    <TextField
                        className="_regular_field"
                        id="outlined-password-input"
                        label="Service Type:"
                        type="text"
                    />
                    <TextField
                        className="_description_field"
                        id="outlined-password-input"
                        label="Describe your plumbing job"
                        type="text"
                    />
                    <Button variant="contained">
                        Get a free quote
                    </Button>
                </div>
            </div>
        </div>
    )
    
    return (
        <div className={classes.container}>
            <div className={classes.innerContainer}>
                <div className={classes.contentContainer}>
                    <h1>
                        Request a <span className={classes.textBlue}>fast </span>quote today
                    </h1>
                    <p>
                        We are industry leaders providing quality plumbing, drainage, hot
                        water, and roofing-related services to our Community of Customers.
                        We’re ready to assist you with all your needs. From routine
                        maintenance to emergency repairs and quality installations, we have
                        you covered.
                    </p>
                </div>
                <div className={classes.imageContainer}>
                    <div className="_card">
                        <div>
                            <h1>$0</h1>
                            <h6>No Call</h6>
                            <h6>Out Fees*</h6>
                        </div>
                    </div>

                    <div>
                        <img
                            className={classes.border}
                            src={HandImg}
                            width="300px"
                            alt="img"
                        />
                    </div>
                </div>

                {/* FORM */}
                {!isTab && renderForm()}
            </div>
            {isTab && renderForm()}
        </div>
    );
};
