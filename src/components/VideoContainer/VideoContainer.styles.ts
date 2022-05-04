import styled from 'styled-components';

const BaseButton = styled.button`
  margin: 16px;
  padding: 4px 16px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  border: none;
  background-color: blue;
  color: #fff;
  min-width: 80px;
  transition: all ease-in-out 0.2s;
  cursor: pointer;

  :active {
    transform: scale(.96);
  }
`;

const Styled = {
  Container: styled.div`
    width: 540px;
    height: 340px;
  `,
  Video: styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  `,
  ActionsContainer: styled.div`
    display: flex;
    justify-content: space-evenly;
  `,
  StopButton: styled(BaseButton)`
    background-color: #8d2629;
  `,
  SnapshotButton: styled(BaseButton)`
    background-color: #087729;
  `,
  ClearListButton: styled(BaseButton)`
    background: #436;
  `,
};

export default Styled;
