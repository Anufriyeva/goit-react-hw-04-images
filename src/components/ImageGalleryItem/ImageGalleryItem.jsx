// import { Component } from "react";
import { GalleryImage, GalleryItemWrapper } from "./ImageGalleryItem.styled";

const ImageGalleryItem = ({ webformatURL, tags, onClick }) => {
  const handleClick = () => {
    onClick({ largeImageURL: webformatURL, tags });
  };

  return (
    <GalleryItemWrapper onClick={handleClick}>
      <GalleryImage
        src={webformatURL}
        alt={tags}
      />
    </GalleryItemWrapper>
  );
};

export default ImageGalleryItem;