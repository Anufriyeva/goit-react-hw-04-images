import React, { Component } from 'react';
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

class App extends Component {
  state = {
  searchQuery: '',
  images: [],
  page: 1,
  quantityPage: null,
  isModalOpen: false,
  isLoading: false,
  largeImageURL: null,
  error: null,
  tags: null,
};
  
componentDidUpdate(_, prevState) {
    const { page, searchQuery } = this.state;

    if (
      page !== prevState.page ||
      searchQuery !== prevState.searchQuery
    ) {
      this.handleSubmit();
    }
  }

  // handleInputChange = (e) => {
  //   this.setState({ searchQuery: e.target.value });
  // };


  handleSubmit = async () => {
    const { searchQuery, page } = this.state;

    this.setLoadingState(true);
    
    try {
      const { hits, totalHits } = await fetchImages(searchQuery, page);
    
    if (hits.length === 0) {
      window.alert('Error fetching images');
      return;
    }
      
    this.updateImages(hits, totalHits);
    } catch (err) {
      this.setState({ error: err.message });
    } finally {
      this.setLoadingState(false);
    }
  };
  
  setLoadingState = isLoading => {
    this.setState({ isLoading });
  };

  updateImages = (hits, totalHits) => {
    this.setState(prev => ({
      images: [...prev.images, ...hits],
      quantityPage: Math.ceil(totalHits / ITEMS_PER_PAGE),
    }));
  };

  handleSubmitSearch = searchQuery => {
  this.resetImages();
  this.setState({ searchQuery });
  };

  resetImages = () => {
    this.setState({
      page: 1,
      quantityPage: null,
      images: [],
      error: null,
    });
  };



  openModal = (data) => {
    this.setLoadingState(true);
    this.setState({ isModalOpen: true, ...data });
  };  

  closeModal = () => {
    this.setLoadingState(false);
    this.setState({ isModalOpen: false });
  };

  loadMoreImages = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };
  

//   loadMoreImages = async () => {
//   const { searchQuery, page, perPage } = this.state;
//   try {
//     const newImages = await fetchImages(searchQuery, page + 1);
//     this.setState((prevState) => ({
//       images: [...prevState.images, ...newImages.slice(0, perPage)], 
//       page: prevState.page + 1,
//     }));
//   } catch (error) {
//     console.error('Error fetching more images:', error);
//   }
// };

  render() {
    const {
      images,
      page,
      quantityPage,
      isLoading,
      isModalOpen,
      largeImageURL,
      tags,
      error
    } = this.state;


    return (
      <StyledAppContainer>
        <Searchbar onSubmit={this.handleSubmitSearch} />
        {/* <StyledImageList>
          {images.map((image) => (
            <div key={image.id} onClick={() => this.openModal(image.largeImageURL)}>
              <img src={image.webformatURL} alt="" />
            </div>
          ))}
        </StyledImageList> */}

        {isLoading && <Loader />}

        {error ? ( // Перевіряємо, чи є помилка
        <div className="error-message">{error}</div>
      ) : (
        <>
          {isModalOpen && (
            <Modal
              largeImageURL={largeImageURL}
              tags={tags}
              closeModal={this.closeModal}
            />
          )}

          {images.length > 0 && (
            <ImageGallery
              hits={images}
              onClick={this.openModal}
            />
          )}

          {page < quantityPage && (
            <Button loadMoreImages={this.loadMoreImages} />
          )}
        </>
      )}

      </StyledAppContainer>
    );
  }
}

export default App;
