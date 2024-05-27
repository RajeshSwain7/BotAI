import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { Grid, Rating, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import you from "../../assets/you.svg";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { TextareaAutosize } from "@mui/base";
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import ClearIcon from '@mui/icons-material/Clear';
import logoMain from "../../assets/logo.svg";



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: "111px",
}));

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#FAF7FF",  
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const PromtsViewer = ({ promts, handleRating, handleFeedBack }) => {
  const [showQuestion, setShowQuestion] = useState("");
  const [showResponse, setShowResponse] = useState("");

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [rating, setRating] = useState(promts.ratings);
  const [feedback, setFeedback] = useState(promts.feedback);

  const [showRating, setShowRating] = useState(false);
  const [showFeedBack, setShowFeedBack] = useState("");
  useEffect(() => {
    setShowQuestion(promts.question);
    setTimeout(() => {
      setShowResponse(promts.response);
    }, 1000);

    
  }, []);


  // send the id along with the rating and feedback to the parent component!
  const handleFeed = (e, id) => {
    e.preventDefault();
    handleFeedBack(feedback, id);
    setShowFeedBack(feedback);
    handleClose();
  };



  
  return (
    <>
      <Grid item xs={12} rowSpacing={4}>
        <Item
          sx={{
            backgroundColor: "#D7C7F4",
            borderRadius: "10px",
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            gap: "10px",
            height: "100%",
          }}
        >
          <img src={you} alt="your_logo" />
          <div>
            <Typography
              sx={{
                fontSize: { xs: "20px", sm: "15px", md: "20px" },
                fontWeight: "bold",
                textAlign: "left",
                color: "black",
              }}
            >
              You
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "16px", sm: "12px", md: "16px" },
                fontWeight: "lighter",
                textAlign: "left",
                pt: 2,
              }}
            >
              {showQuestion}
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "16px", sm: "12px", md: "16px" },
                fontWeight: "lighter",
                textAlign: "left",
                pt: 2,
              }}
            >
              {promts.time}
            </Typography>
          </div>
        </Item>
      </Grid>
      <Grid item xs={12} rowSpacing={4}>
        <Item
          sx={{
            backgroundColor: "#D7C7F4",
            borderRadius: "10px",
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            gap: "10px",
            height: "100%",
          }}
        >
          <img src={"https://iconape.com/wp-content/files/dz/36366/svg/buddy.svg"} height={60} alt="bot_logo" />
          <div>
            <Typography
              sx={{
                fontSize: { xs: "20px", sm: "15px", md: "20px" },
                fontWeight: "bold",
                textAlign: "left",
                color: "black",
              }}
            >
              BotAi
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "16px", sm: "12px", md: "16px" },
                fontWeight: "lighter",
                textAlign: "left",
                pt: 2,
              }}
            >
              {showResponse ? (
                <>
                  <p>{showResponse} </p>
                  <div className="d-flex gap-3 flex-column">
                    <div className="d-flex flex-column gap-2">
                      <ThumbUpIcon
                        fontSize="10px"
                        sx={{ margin: "1px" }}
                        onClick={() => setShowRating(!showRating)}
                      />
                      {showRating && (
                        <Rating
                          name="simple-controlled"
                          value={rating}
                          onChange={(event) => {
                            setRating(event.target.value);
                            handleRating(event.target.value, promts.id);
                          }}
                          sx={{color: "#bb8fef"}}
                        />
                      )}
                    </div>
                    <div>
                      <ThumbDownIcon fontSize="10px" onClick={handleOpen} />

                      <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                      >
                        <Box sx={style}>
                          <Box sx={{display: "flex", justifyContent: "space-between"}}>
                          <Typography
                            id="modal-modal-title"
                            variant="h6"
                            component="h2"
                          >
                            {<TipsAndUpdatesIcon />} Provide Additional Feedback
                          </Typography>
                          <button
                              style={{border: "none", backgroundColor: "transparent"}}
                              onClick={() => handleClose()}
                              type="button"
                            >
                              <ClearIcon />
                            </button>
                          </Box>
                          <form
                            onSubmit={(e) => handleFeed(e, promts.id)}
                            className="d-flex flex-column justify-content-center align-items-center gap-3"
                          >
                            <textarea
                              type="text"
                              style={{ width: "100%", height: "100px", padding: "10px", border: "none" }}
                              value={feedback}
                              onChange={(e) => setFeedback(e.target.value)}
                            />
                            {feedback && <button style={{ width: "100px", height: "50px", border: "none", borderRadius: "0.5rem"}} type="submit" className="btnHover">
                              Submit
                            </button>}
                           
                          </form>
                        </Box>
                      </Modal>
                    </div>
                  </div>
                </>
              ) : (
                " Hold on a moment..."
              )}
            </Typography>
            {showFeedBack && (
              <Typography
                sx={{
                  fontSize: { xs: "16px", sm: "12px", md: "16px" },
                  fontWeight: "lighter",
                  textAlign: "left",
                  pt: 2,
                }}
              >
                Feedback: {showFeedBack}
              </Typography>
            )}
          </div>
        </Item>
      </Grid>
    </>
  );
};

export default PromtsViewer;
