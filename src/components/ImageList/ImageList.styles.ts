import styled from 'styled-components';

const Styled = {
  Container: styled.section`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 8px;
    padding: 8px;
  `,
  Image: styled.img`
    width: 100%;
    height: 200px;
    border-radius: 8px;
    object-fit: cover;
  `,
};

export default Styled;
