import React from "react";
import { makeStyles } from "@mui/styles";

import PlumberImg from "./images/I-am-a-plumber-GÇô-what-do-I-need-in-my-business-terms-and-conditions1.webp";

const useStyles = makeStyles({
    container: {
        background: '#4facf7',
    },
    innerContainer: {
        maxWidth: '1440px',
        margin: 'auto',
        height: '600px',
        display: 'flex',
        justifyContent: 'space-between',
        borderTop: '6px solid white',
        '@media screen and (max-width: 1200px)': {
            height: '500px',
            position: 'relative',
            flexDirection: 'column',
            justifyContent: 'space-between',
            backgroundImage: `url(${PlumberImg})`,
            '&::before': {
                position: 'absolute',
                content: '""',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'rgba(0, 0, 0, 0.6)',
            }
        },
        '@media screen and (max-width: 680px)': {
            height: '100%',
        },
        '& > div:nth-child(1)': {
            width: '40%',
            '@media screen and (max-width: 1200px)': {
                width: 'fit-content',
            },
        },
        '& > div:nth-child(2)': {
            width: '60%',
            '@media screen and (max-width: 1200px)': {
                width: 'fit-content',
            },
        },
    },
    contentContainer: {
        padding: '50px',
        color: 'white',
        '@media screen and (max-width: 1200px)': {
            zIndex: 2,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
        },
        '& h1': {
            fontSize: '4rem',
            margin: 0,
            '@media screen and (max-width: 1200px)': {
                fontSize: '3rem',
            }
        },
        '& p': {
            fontSize: '14px',
            lineHeight: 2
        },
        '& ._cards': {
            display: 'flex',
            '@media screen and (max-width: 680px)': {
                flexDirection: 'column'
            },
            '& > div': {
                margin: '10px -10px',
                padding: '20px 40px',
                background: 'white',
                color: '#4facf7',
                clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0% 100%)',
                width: '300px',
                '@media screen and (max-width: 920px)': {
                    width: '250px'
                },
                '@media screen and (max-width: 768px)': {
                    width: '200px'
                },
                '@media screen and (max-width: 680px)': {
                    width: '80%'
                },
                '& p': {
                    fontSize: '14px',
                    margin: 0,
                    lineHeight: 1.2
                }
            }
        }
    },
    imageContainer: {
        clipPath: "polygon(17% 0 , 100% 0%, 100% 100%, 0% 100%)",
        paddingLeft: '6px',
        background: 'white',
        '@media screen and (max-width: 1200px)': {
            display: 'none',
        },
        '& img': {
            height: '100%',
            objectFit: 'cover',
            clipPath: "polygon(17% 0 , 100% 0%, 100% 100%, 0% 100%)",
        }
    }
});

export const WhatWeDeliver = () => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.innerContainer}>
                <div className={classes.contentContainer}>
                    <div>
                        <h1>What we deliver</h1>
                        <p>
                            As a family-owned business, we take immense pride in offering a 24/7
                            Service that sets us apart from the rest. With a focus on transparency
                            and customer convenience, we believe in keeping things simple and
                            hassle-free for our valued customers. That’s why we proudly offer a $0
                            callout, upfront pricing & Lifetime labour warranty, ensuring that you
                            know exactly what to expect right from the start.
                        </p>
                    </div>
                    <div className="_cards">
                        <div>
                            <h3>Lifetime labour warranty</h3>
                            <p>We pride ourselves on our workmanship and guarantee our service.</p>
                        </div>
                        <div>
                            <h3>Fully licensed & insured</h3>
                            <p>Our professionals are reliable and provide compliance certificates for your peace of mind</p>
                        </div>
                    </div>
                </div>
                <div className={classes.imageContainer}>
                    <img className={classes.border} src={PlumberImg} width="100%" />
                </div>
            </div>
        </div>
    );
};
