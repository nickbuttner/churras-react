import styled, { css } from "styled-components";

export const Button = styled.button`
  ${({ theme, outline }) => css`
    border: ${outline ? "2px solid black" : "none"};
    border-radius: ${theme.borderRadius.small}px;
    background: ${outline ? "white" : "black"};
    padding: ${theme.spacing.base}px ${theme.spacing.small}px;
    color: ${outline ? "black" : "white"};
    cursor: pointer;
    transition: all 100ms ease;

    &:active {
      transform: scale(0.98);
    }

    &:not(:first-of-type) {
      margin-left: ${theme.spacing.base}px;
    }
  `}
`;
