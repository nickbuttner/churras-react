import styled, { css } from "styled-components";

export const Form = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
  `}
`;

export const Label = styled.label`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    font-weight: bold;
    width: 100%;

    > input {
      margin: ${theme.spacing.small}px 0 ${theme.spacing.medium}px 0;
      border: 2px solid black;
      padding: 10px;
      border-radius: ${theme.borderRadius.small}px;

      &::placeholder {
        font-style: italic;
      }
    }
  `}
`;
