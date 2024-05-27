import { Box, Grid } from "@mui/material";
import React from "react";
import PromtsViewer from "../Promtsviewer/PromtsViewer";
import Promptinput from "../promtinput/Promptinput";
import DefaultPromts from "../default/DefaultPromts";

const Newpromts = ({
  handleQuestion,
  questionAnswers,
  saveToLocal,
  handleFeedBack,
  handleRating,
}) => {
  return (
    <>
      {questionAnswers.length < 1 ? (
        <DefaultPromts
          entryText={
            "Start typing your question or click on one of the promts to begin..."
          }
          handleQuestion={handleQuestion}
        />
      ) : (
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Grid container rowSpacing={4}>
            {questionAnswers.map((promts, ind) => (
              <PromtsViewer
                handleFeedBack={handleFeedBack}
                handleRating={handleRating}
                promts={promts}
                key={ind}
              />
            ))}
          </Grid>
          <Promptinput
            saveToLocal={saveToLocal}
            handleQuestion={handleQuestion}
          />
        </Box>
      )}
    </>
  );
};

export default Newpromts;
