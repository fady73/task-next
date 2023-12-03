import React from "react";
import { Button, Grid, makeStyles } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import {
  navigateNext,
  navigatePrevious,
  navigateTo,
} from "../../../store/store";

const useStyles = makeStyles((theme) => ({
  navigationContainer: {
    marginTop: theme.spacing(2),
    textAlign: "center",
  },
}));

export function ImageNav({ images }) {
  const classes = useStyles();
  const currentIndex = useSelector((state) => state.currentIndex);
  const dispatch = useDispatch();

  return (
    <Grid container spacing={2} className={classes.navigationContainer}>
      <Grid item>
        <Button
          variant="outlined"
          color="primary"
          disabled={currentIndex === 0}
          onClick={() => dispatch(navigatePrevious())}
        >
          Previous
        </Button>
      </Grid>
      {images.map((image, index) => (
        <Grid item key={index}>
          <Button
            variant="outlined"
            color={index === currentIndex ? "primary" : "default"}
            onClick={() => dispatch(navigateTo(index))}
          >
            {index + 1}
          </Button>
        </Grid>
      ))}
      <Grid item>
        <Button
          variant="outlined"
          color="primary"
          disabled={currentIndex === images.length - 1}
          onClick={() => dispatch(navigateNext())}
        >
          Next
        </Button>
      </Grid>
    </Grid>
  );
}
