import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import { ImageDisplay } from "../ImageDisplay/ImageDisplay";
import { ImageNav } from "../ImageNav/ImageNav";

import image1 from "../../../assets/1.jpg";
import image2 from "../../../assets/2.jpg";

const useStyles = makeStyles((theme) => ({
  carouselContainer: {
    maxWidth: 600,
    margin: "0 auto",
    padding: theme.spacing(2),
  },
}));

const ImageCarouselContainer = () => {
  const classes = useStyles();
  const [images] = useState([image1, image2, image1]);

  return (
    <div className={classes.carouselContainer}>
      <ImageDisplay images={images} />
      <ImageNav images={images} />
    </div>
  );
};

export default ImageCarouselContainer;
