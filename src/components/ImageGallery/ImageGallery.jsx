import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

import { List } from './ImageGallery.styled';

export const ImageGallery = ({ images, openModal }) => {
  return (
    <List>
      {images.map(({ id, webformatURL, largeImageURL }) => {
        return (
          <ImageGalleryItem
            img={webformatURL}
            key={id}
            largeImageURL={largeImageURL}
            openModal={openModal}
          />
        );
      })}
    </List>
  );
};
