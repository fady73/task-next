import React from "react";
import { ImageList, ImageListItem } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { navigateTo } from "../../../store/store";

export function ImageDisplay({ images }) {
  const currentIndex = useSelector((state) => state.currentIndex);
  const dispatch = useDispatch();
  const onImageClick = (index) => {
    if (index + 1 < images.length) {
      dispatch(navigateTo(index + 1));
    } else {
      dispatch(navigateTo(0));
    }
  };

  return (
    <ImageList>
      <ImageListItem
        key={currentIndex}
        onClick={() => onImageClick(currentIndex)}
      >
        <img src={images[currentIndex]} alt="" />
      </ImageListItem>
    </ImageList>
  );
}
