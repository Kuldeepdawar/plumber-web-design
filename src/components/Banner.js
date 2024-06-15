import React from "react";
import { makeStyles } from "@mui/styles";

import PlumbingImg from './images/plumbing-cost-hydro-blog-cont-img.jpg';
import PlumberImg from './images/technician-banner.png';

const useStyles = makeStyles({
    container: {
        width: "100%",
        height: '600px',
        overflow: 'hidden',
        backgroundColor: "#231f20",
        backgroundImage: `url(${PlumbingImg})`,
        backgroundRepeat: 'no-repeat',
        // backgroundSize: 'cover',
        position: 'relative',
        borderTop: '4px solid white',
        '@media screen and (max-width: 1000px)': {
            height: '100%',
        },
        '&::after': {
            position: 'absolute',
            content: '""',
            top: 0,
            left: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            width: '100%',
            height: '100%',
        }
    },
    subContainer: {
        maxWidth: "1440px",
        margin: "0 auto",
    },
    technicianContainer: {
        maxWidth: '1440px',
        display: 'flex',
        zIndex: 2,
        position: 'relative',
        '@media screen and (max-width: 1000px)': {
            flexDirection: 'column'
        },
        '& img': {
            position: 'absolute',
            top: 0,
            right: 0,
            height: '600px',
            '@media screen and (max-width: 1250px)': {
                right: '-10%'
            },
            '@media screen and (max-width: 1150px)': {
                right: '-20%'
            },
            '@media screen and (max-width: 1050px)': {
                right: '-25%'
            },
            '@media screen and (max-width: 1000px)': {
                display: 'none'
            }
        }
    },
    contentContainer: {
        padding: '50px',
        '& h1': {
            fontSize: '5rem',
            color: 'white',
            margin: 0,
            fontWeight: '900',
            padding: '0 30px 0 10px',
            '@media screen and (max-width: 1000px)': {
                fontSize: '3rem'
            }
        },
        '& h1:nth-child(2)': {
            position: 'relative',
            backgroundColor: 'blue',
            clipPath: 'polygon(0 -100%, 99% 0%, 90% 100%, -87% 100%)',
        },
        '& ._content': {
            color: 'white',
            marginTop: '30px',
            '& > div': {
                padding: '10px'
            },
            '& h3': {
                margin: 0
            },
            '& p': {
                margin: 0,
                fontSize: '12px'
            }
        }
    },
    ratingContainer: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        display: 'flex',
        '@media screen and (max-width: 1000px)': {
            position: 'relative',
            padding: '50px',
            justifyContent: 'flex-end'
        },
        '@media screen and (max-width: 580px)': {
            flexWrap: 'wrap',
            justifyContent: 'center'
        },
        '& > div': {
            width: '100px',
            textAlign: 'center',
            color: 'white',
            padding: '20px 40px',
            margin: '0 -10px',
            clipPath: 'polygon(20% 0, 100% 0, 80% 100%, 0% 100%)',
            '@media screen and (max-width: 580px)': {
                margin: '10px -10px',
            },
            '& h2': {
                margin: 0,
                fontSize: '3rem',
                fontWeight: '900'
            },
            '& p': {
                fontSize: '8px',
                margin: '0 0 10px 0',
            },
            '& > div:nth-child(2)': {
                color: 'yellow'
            }
        },
        '& > div:nth-child(1)': {
            backgroundColor: 'blue',
        },
        '& > div:nth-child(2)': {
            backgroundColor: 'red',
        },
        '& > div:nth-child(3)': {
            backgroundColor: 'yellow',
            color: 'black',
            marginRight: '20px'
        },
    }
});

const bannerContent = [
    {
        title: "Upfront pricing",
        description: "Know the price of the job before we start.",
    },
    {
        title: "$0 Call out",
        description: "No call out fees",
    },
    {
        title: "$50 off for online bookings",
        description: "Book online to receive a discount",
    },
];

const Banner = () => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.subContainer} >
                <div className={classes.technicianContainer}>
                    <img src={PlumberImg} alt="plumber" />

                    <div className={classes.contentContainer}>
                        <h1>YOUR LOCAL</h1>
                        <h1>HOT WATER</h1>
                        <h1>EXPERTS</h1>
                        
                        <div className="_content">
                            {bannerContent.map((content) => 
                                <div>
                                    <h3>{content.title}</h3>
                                    <p>{content.description}</p>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className={classes.ratingContainer}>
                        <div>
                            <h2>4.9</h2>
                            <div>★★★★★</div>
                            <p>Average Rating</p>
                            <div>Facebook</div>
                        </div>
                        <div>
                            <h2>5.0</h2>
                            <div>★★★★★</div>
                            <p>Average Rating</p>
                            <div>Google</div>
                        </div>
                        <div>
                            <h2>24h</h2>
                            <h3>Emergency <br/> Services</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
