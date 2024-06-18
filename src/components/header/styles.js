import styled, { css } from "styled-components";
import bg from "../../assets/img/bg.svg";

export const Header = styled.header`
  ${({ theme, fade }) => css`
    width: 100vw;
    height: ${fade ? "350px" : "200px"};
    background-image: url("${bg}");
    background-repeat: repeat;
    background-color: ${theme.colors.primary};
    display: flex;
    justify-content: center;
    position: relative;

    ${
      fade &&
      `&:after {
        content: "";
        width: 100vw;
        position: absolute;
        top: 250px;
        height: 100px;
        background: linear-gradient(0deg, ${theme.colors.primary} 0%, rgba(255, 255, 255, 0) 100%);
      }`
    }
  `}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    font-weight: bold;
    font-size: 32px;
    margin-top: ${theme.spacing.huge}px;
  `}
`;

export const Username = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: ${theme.spacing.small}px;
    right: ${theme.spacing.small}px;
  `}
`;

export const LogoutButton = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
`;
