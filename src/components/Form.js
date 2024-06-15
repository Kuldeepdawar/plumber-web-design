import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";


const useStyles = makeStyles({
    inputContainer:{
        '& > div' :{
            display:'flex',
            '& .MuiTextField-root': {
                width: '100%',
                maxWidth: '250px'
            }
        },
        '& > div:nth-child(3)': {
            '& .MuiTextField-root': {
                width: '100%',
                maxWidth: '415px'
            }
        }
    },
    gridContainer: {
        padding: '80px 20px 20px',
        '& > .MuiGrid-item': {
            padding: '5px !important'
        }
    },
    blueBtn: {
        width: '100%',
        backgroundColor: "#00aeff !important",
        color: "#f0f0f0 !important",
        borderRadius: "0 !important",
        boxShadow: "none !important",
        textTransform: "none !important",
        margin: '0 !important',
        padding: "16px !important",
    },
});


export default function Form() {
    const classes = useStyles();

    return (
        <Box
            component="form"
            noValidate
            autoComplete="off"
        >
            <Grid container spacing={3} className={classes.gridContainer}>
                {/* First Row */}
                <Grid item xs={12} lg={4} md={6}>
                    <TextField
                        id="outlined-full-name"
                        label="Full Name*"
                        type="text"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} lg={4} md={6}>
                    <TextField
                        id="outlined-phone-number"
                        label="Phone Number*"
                        type="number"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} lg={4} md={6}>
                    <TextField
                        id="outlined-email-address"
                        label="Email Address*"
                        type="text"
                        fullWidth
                    />
                </Grid>
                {/* Second Row */}
                <Grid item xs={12} lg={4} md={6}>
                    <TextField
                        id="outlined-suburb"
                        label="Suburb"
                        type="text"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} lg={4} md={6}>
                    <TextField
                        id="outlined-service-type"
                        label="Service type"
                        type="text"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} lg={4} md={6}>
                    <TextField
                        id="outlined-date-time"
                        label="Date & Time"
                        type="text"
                        fullWidth
                    />
                </Grid>
                {/* Third Row */}
                <Grid item lg={8} md={6} xs={12}>
                    <TextField
                        id="outlined-additional-info"
                        label="Additional Information"
                        type="text"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} lg={4} md={6}>
                    <Button className={classes.blueBtn} variant="contained" color="primary">
                        Get a free quote
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
}
