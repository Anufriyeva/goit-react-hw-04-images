import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryContainer } from './ImageGallery.styled';

const ImageGallery = ({ hits, onClick }) => (
  <ImageGalleryContainer>
      {hits.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          key={id}
          id={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          alt={tags}
          onClick={onClick}
        />
      ))}
  </ImageGalleryContainer>
);

export default ImageGallery;