import { ImageItem, Image } from './ImageGalleryItem.styled.js';

export const ImageGalleryItem = ({ img, largeImageURL, openModal }) => (
  <ImageItem onClick={() => openModal(largeImageURL)}>
    <Image src={img} alt="" />
  </ImageItem>
);
