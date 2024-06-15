import React from "react";
import { makeStyles } from "@mui/styles";
import LockIcon from "@mui/icons-material/Lock";

import Form from "./Form";

const useStyles = makeStyles({
    container: {
        width: "100%",
        marginTop:'3rem',
        "& h1":{
            margin:'0',
            fontSize:'4rem',
            '@media screen and (max-width: 1200px)': {
                fontSize:'3rem',
            },
            "& span":{
                color: "#00aeff",
            },
        },
    },
    subContainer: {
        maxWidth: "1440px",
        margin: "0 auto",
        padding: "50px 30px",
        display: "flex",
        justifyContent: "space-between",
        '@media screen and (max-width: 840px)': {
            flexDirection: 'column',
            alignItems: 'center'
        },
    },
    formContainer: {
        width: '65vw',
        '@media screen and (max-width: 900px)': {
            width: '100%',
        },
        '& ._info_container': {
            display: 'flex',
            '@media screen and (max-width: 900px)': {
                flexDirection: 'column'
            },
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
                marginRight: '50px',
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

    mapContainer: {
        background: 'rgba(0, 0, 0, 0.8)',
        width: '90%',
        maxWidth: '400px',
        height: '400px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        '@media screen and (max-width: 840px)': {
            marginTop: '50px'
        },
        '& h1': {
            color: 'white',
        }
    },
});

export const BookPlumber = () => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.subContainer}>
                <div className={classes.formContainer}>
                    <h1>Book a <span>plumber</span> near you</h1>
                    <Form />
                    <div className="_info_container">
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
                <div className={classes.mapContainer}>
                    <h1>Map</h1>
                </div>
            </div>
        </div>
    );
};
