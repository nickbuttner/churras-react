import styled, { css } from "styled-components";

export const Content = styled.main`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    height: calc(100vh - 350px);
  `}
`;

export const Form = styled.form`
  width: 300px;
  padding: 0 20px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: -100px;
`;

export const Label = styled.label`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    font-weight: bold;
    width: 100%;

    > input {
      margin: ${theme.spacing.small}px 0 ${theme.spacing.medium}px 0;
      border: none;
      padding: 10px;
      border-radius: ${theme.borderRadius.small}px;

      &::placeholder {
        font-style: italic;
      }
    }
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css`
    border: none;
    background-color: black;
    padding: 10px;
    width: 100%;
    color: white;
    margin-top: ${theme.spacing.big}px;
    border-radius: ${theme.borderRadius.big}px;
    cursor: pointer;
    transition: all 100ms ease;

    &:active {
      transform: scale(0.98);
    }
  `}
`;
