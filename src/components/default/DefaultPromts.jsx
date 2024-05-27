import { Typography } from '@mui/material'
import React from 'react'
import logoMain from "../../assets/logo.svg";
import BasicQuestions from '../basicquestions/BasicQuestions';

const DefaultPromts = ({handleQuestion, entryText}) => {

  if(entryText === "Conversation History"){
    return (
      <div>
          <div className="d-flex flex-column justify-content-center align-items-center pt-5 pb-5" >
            <div className="pt-5">
              <Typography
                sx={{ fontSize: "28px", fontWeight: "bold", textAlign: "center" }}
              >
                {entryText}
              </Typography>
            </div>
            
          </div>
          
      </div>
    )
  }else{
    return (
      <div>
          <div className="d-flex flex-column justify-content-center align-items-center pt-5 pb-5" >
            <div className="pt-5">
              <Typography
                sx={{ fontSize: "28px", fontWeight: "bold" }}
              >
                {entryText}
              </Typography>
              <Typography
                sx={{ fontSize: "10px", textAlign: "center", color: "red"}}
              >
                Note: {"kindly clear your local storage, for security concerns, before exiting!!"}
              </Typography>
            </div>
            <div className="pt-2 pb-5">
              <img src={logoMain} alt="logo" />
            </div>
          </div>
          <div className="pt-5 pb-5 mt-3">
            <BasicQuestions handleQuestion={handleQuestion} />
          </div>
      </div>
    )
  }
 
}

export default DefaultPromts