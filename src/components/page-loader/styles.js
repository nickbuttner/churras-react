import styled, { css } from "styled-components";

export const PageLoader = styled.div`
  ${({ theme }) => css`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.primary};
    font-size: 24px;
  `}
`;
