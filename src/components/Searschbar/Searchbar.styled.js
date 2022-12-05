import styled from 'styled-components';

export const Header = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
`;

export const Form = styled.form`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #3f51b5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;
export const Button = styled.button`
  height: 25px;
  border-radius: 2px;
  border: 1px solid blue;
  color: #fff;
  background-color: blue;
`;

export const Input = styled.input`
  outline: none;
  height: 23px;
  border-radius: 2px;
  border: none;
`;
