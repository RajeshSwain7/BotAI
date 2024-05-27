import { Box, Grid, Paper, Rating, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { styled } from "@mui/material/styles";
import DefaultPromts from '../default/DefaultPromts';
import you from "../../assets/you.svg";
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    background: "rgb(191,172,226) linear-gradient(90deg, rgba(191,172,226,1) 0%, rgba(215,199,244,1) 100%)",
    height: "111px",
  }));

const Pastconversations = () => {

    const [promtListLocal, setPromtListLocal] = useState([]);

    useEffect(() => {
        let fromLocal = JSON.parse(localStorage.getItem('promtLists'));
        setPromtListLocal(fromLocal)
    }, [])

  return (
    <><DefaultPromts entryText={"Conversation History"}/>
    
    <Box sx={{ width: "100%", height: "100%" }}>
      <Grid container rowSpacing={7} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {/*map */}
        {promtListLocal.map((promt, ind) => <Grid key={promt.id} item xs={12}>
        <Typography 
              sx={{
                fontSize: {xs: "20px",  sm: "15px", md: "20px"},
                fontWeight: "bold",
                textAlign: "left",
                color: "black",

              }}
            >
              On {promt.list[0].time.split(",")[0]}
            </Typography>
          <Item sx={{display: "flex", justifyContent: "start", height: "100%", gap: "20px", flexDirection: "column"}}>
          
            {promt.list.map((promtItem, ind) =>
                <div key={promtItem.id}>
                    
                    <div className='d-flex justify-content-start align-items-center gap-3'>
            <img src={you} alt="your_logo" height={70}/>
            <div>
            <Typography
              sx={{
                fontSize: {xs: "20px",  sm: "15px", md: "20px"},
                fontWeight: "bold",
                textAlign: "left",
                color: "black",
              }}
            >
              You
            </Typography>
            <Typography
              sx={{
                fontSize: {xs: "16px",sm: "12px", md: "16px"},
                fontWeight: "lighter",
                textAlign: "left",
                pt: 2,
              }}
            >
              {promtItem.question}
            </Typography>
            <Typography
              sx={{
                fontSize: {xs: "12px",sm: "10px", md: "12px"},
                fontWeight: "lighter",
                textAlign: "left",
                pt: 2,
              }}
            >
              {promtItem.time.split(",")[1]}
            </Typography>
            </div>
            </div>
            <div className='d-flex justify-content-start align-items-center gap-3'>
            <img src={you} alt="your_logo" height={70}/>
            <div>
                <hr />
            <Typography
              sx={{
                fontSize: {xs: "20px",  sm: "15px", md: "20px"},
                fontWeight: "bold",
                textAlign: "left",
                color: "black",
              }}
            >
              Bot Ai
            </Typography>
            <Typography
              sx={{
                fontSize: {xs: "16px",sm: "12px", md: "16px"},
                fontWeight: "lighter",
                textAlign: "left",
                pt: 2,
              }}
            >
               {promtItem.response}
            </Typography>
            <Typography
              sx={{
                fontSize: {xs: "12px",sm: "10px", md: "12px"},
                fontWeight: "lighter",
                textAlign: "left",
                pt: 2,
              }}
            >
              <h6>{promtItem.time.split(",")[1]}</h6>
              {promtItem.rating > 0 && <Rating
                          name="simple-controlled"
                          value={promtItem.rating}
                          readOnly
                          sx={{color: "black", fontSize: "1rem"}}
                          
                        />}
            </Typography>
            <Typography
              sx={{
                fontSize: {xs: "16px",sm: "12px", md: "16px"},
                fontWeight: "lighter",
                textAlign: "left",
                pt: 2,
              }}
            >
              {promtItem.feedBack && `Feedback: ${promtItem.feedBack}` }
            </Typography>
            </div>
            </div>
                </div> 
            )}
            
          </Item>
        </Grid>)}

        
      </Grid>
    </Box>
    </>
  )
}

export default Pastconversations