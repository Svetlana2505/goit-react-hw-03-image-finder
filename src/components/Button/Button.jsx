import { ButtonLoad } from './Button.styled.js';

export const Button = ({ text, clickHandler }) => {
  return <ButtonLoad onClick={clickHandler}>{text}</ButtonLoad>;
};
