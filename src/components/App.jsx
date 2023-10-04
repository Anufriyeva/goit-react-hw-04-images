import React, { useEffect, useState } from 'react';
import {fetchImages} from '../Service/Service';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import {
  StyledAppContainer,
  // StyledImageList,
} from './App.styled';

const ITEMS_PER_PAGE = 12;

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [quantityPage, setQuantityPage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState(null);
  const [tags, setTags] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleSubmit = async () => {
      if (!searchQuery) return;

      setIsLoading(true);

      try {
        const { hits, totalHits } = await fetchImages(searchQuery, page);

        if (hits.length === 0) {
          setError('Error fetching images');
          return;
        }

        setImages((prevImages) => [...prevImages, ...hits]);
        setQuantityPage(Math.ceil(totalHits / ITEMS_PER_PAGE));
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    handleSubmit();
  }, [searchQuery, page]);

  const handleSubmitSearch = (newSearchQuery) => {
    resetImages();
    setSearchQuery(newSearchQuery);
  };

  const resetImages = () => {
    setPage(1);
    setQuantityPage(null);
    setImages([]);
    setError(null);
  };

  const openModal = (data) => {
    setIsLoading(true);
    setIsModalOpen(true);
    setLargeImageURL(data.largeImageURL);
    setTags(data.tags);
  };

  const closeModal = () => {
    setIsLoading(false);
    setIsModalOpen(false);
  };

  const loadMoreImages = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <StyledAppContainer>
      <Searchbar onSubmit={handleSubmitSearch} />
      {isLoading && <Loader />}

      {error ? (
        <div className="error-message">{error}</div>
      ) : (
        <>
          {isModalOpen && (
            <Modal
              largeImageURL={largeImageURL}
              tags={tags}
              closeModal={closeModal}
            />
          )}

          {images.length > 0 && (
            <ImageGallery hits={images} onClick={openModal} />
          )}

          {page < quantityPage && (
            <Button loadMoreImages={loadMoreImages} />
          )}
        </>
      )}
    </StyledAppContainer>
  );
};

export default App;
