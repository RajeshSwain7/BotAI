import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Promptinput from "../promtinput/Promptinput";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: "111px",
}));
const BasicQuestions = ({handleQuestion}) => {
  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
        <Grid item xs={12} sm={6}>
          <Item onClick={() => handleQuestion("Hi, what is the weather")} className="itemHover">
            <Typography
              sx={{
                fontSize: {xs: "20px",  sm: "15px", md: "20px"},
                fontWeight: "bold",
                textAlign: "left",
                color: "black",
              }}
              
            >
              Hi, what is the weather
            </Typography>
            <Typography
              sx={{
                fontSize: {xs: "16px",sm: "12px", md: "16px"},
                fontWeight: "lighter",
                textAlign: "left",
                pt: 2,
              }}
            >
              Get immediate AI generated response
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} >
          <Item onClick={() => {
            handleQuestion("Hi, what is my location"); 
          }} className="itemHover">
            <Typography
              sx={{
                fontSize: {xs: "20px",  sm: "15px", md: "20px"},
                fontWeight: "bold",
                textAlign: "left",
                color: "black",
              }}
            >
              Hi, what is my location
            </Typography>
            <Typography
              sx={{
                fontSize: {xs: "16px",sm: "12px", md: "16px"},
                fontWeight: "lighter",
                textAlign: "left",
                pt: 2,
              }}
            >
              Get immediate AI generated response
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} >
          <Item onClick={() => handleQuestion("Hi, what is the temperature")} className="itemHover">
            <Typography
              sx={{
                fontSize: {xs: "20px",  sm: "15px", md: "20px"},
                fontWeight: "bold",
                textAlign: "left",
                color: "black",
              }}
            >
              Hi, what is the temperature
            </Typography>
            <Typography
              sx={{
                fontSize: {xs: "16px",sm: "12px", md: "16px"},
                fontWeight: "lighter",
                textAlign: "left",
                pt: 2,
              }}
            >
              Get immediate AI generated response
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} >
          <Item onClick={() => handleQuestion("Hi, how are you")} className="itemHover">
            <Typography
              sx={{
                fontSize: {xs: "20px",  sm: "15px", md: "20px"},
                fontWeight: "bold",
                textAlign: "left",
                color: "black",
              }}
            >
              Hi, how are you
            </Typography>
            <Typography
              sx={{
                fontSize: {xs: "16px",sm: "12px", md: "16px"},
                fontWeight: "lighter",
                textAlign: "left",
                pt: 2,
              }}
            >
              Get immediate AI generated response
            </Typography>
          </Item>
        </Grid>
        <Promptinput handleQuestion={handleQuestion}/>
      </Grid>
    </Box>
  );
};

export default BasicQuestions;
