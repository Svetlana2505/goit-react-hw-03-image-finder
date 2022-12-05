import { fetchImage } from '../services/imageApi';
import { Component } from 'react';
import { Button } from './Button/Button';
import { imageMapper } from '../utils/mapper';
import { ImageGallery } from './ImageGallery/ImageGallery';
import Searchbar from './Searschbar/Searchbar';
import ModalWindow from './Modal/Modal';
import { Circles } from 'react-loader-spinner';
import { Section } from './Section/Section';

class App extends Component {
  state = {
    images: [],
    showButton: false,
    page: 1,
    isLoading: false,
    query: '',
    currentImage: null,
  };

  componentDidUpdate = (_, prevState) => {
    const { query, page } = this.state;
    if (query !== prevState.query || page !== prevState.page) {
      this.getImage(query, page);
    }
  };

  handleButtonClick = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  getImage = (query, page) => {
    this.setState({ isLoading: true });
    fetchImage(page, query)
      .then(({ data: { hits } }) => {
        this.setState(prevState => ({
          images: [...prevState.images, ...imageMapper(hits)],
          showButton: true,
          isLoading: false,
        }));
      })
      .catch(console.log);
  };

  searchQuery = query => {
    this.setState({ query, images: [], page: 1, showButton: false });
  };

  openModal = data => {
    this.setState({ currentImage: data });
  };

  closeModal = () => {
    this.setState({ currentImage: null });
  };

  render() {
    const { showButton, images, isLoading, currentImage } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.searchQuery} />
        <Section>
          {isLoading ? (
            <Circles
              height="100"
              width="100"
              color="#3f51b5"
              ariaLabel="circles-loading"
              wrapperStyle={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translete(-50%,-50%)',
              }}
              wrapperClass=""
              visible={true}
            />
          ) : (
            <ImageGallery images={images} openModal={this.openModal} />
          )}
          {showButton && (
            <Button text="Load more" clickHandler={this.handleButtonClick} />
          )}
        </Section>

        {currentImage && (
          <ModalWindow image={currentImage} onClose={this.closeModal} />
        )}
      </>
    );
  }
}

export default App;
