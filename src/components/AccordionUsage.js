import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { makeStyles } from "@mui/styles";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
const useStyles = makeStyles({
  root: {
    display: "flex",
    
    justifyContent: 'space-between',
    '@media screen and (max-width: 920px)': {
        flexWrap: "wrap",
        justifyContent:'center',
    },
    "& .MuiAccordion-root": {      
      width:'100%',
      maxWidth:'700px',
      margin: "0 10px",
      backgroundColor: "transparent",
      boxShadow: "none",
      borderBottom: "dashed 1px #c5c5c5",
    //   '@media screen and (max-width: 1440px)': {
    //     maxWidth:'550px',
    // },
      
      "&::before": {
        backgroundColor: "transparent",
      },
    },
    '& .MuiAccordionSummary-content':{
      fontWeight: '700',
    },
  },
});
export default function AccordionUsage() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        <Accordion>
          <AccordionSummary
            expandIcon={<AddIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            What types of services do you offer?
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<AddIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            How do I schedule an appointment?
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<AddIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            What areas do you service?
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
      </div>
      <div>
        <Accordion>
          <AccordionSummary
            expandIcon={<AddIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Do you provide emergency plumbing services?
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<AddIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            How do you charge for your services?
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<AddIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            Are you licensed and insured?
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
