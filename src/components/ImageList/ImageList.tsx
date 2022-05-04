import React from 'react';
import Styled from './ImageList.styles';

type Props = {
  images: string[];
};

const ImageList: React.FC<Props> = ({ images }) => (
  <Styled.Container>
    {images.map((image) => (
      <Styled.Image key={image} src={image} />
    ))}
  </Styled.Container>
);

export default ImageList;
