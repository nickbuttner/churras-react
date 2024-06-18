import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const Content = styled.main`
  ${({ theme }) => css`
    background-color: ${theme.colors.bg};
    height: calc(100vh - 200px);
  `}
`;

export const BBQList = styled.div`
  ${({ theme }) => css`
    top: -40px;
    position: relative;
    margin: 0 auto;
    max-width: 624px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  `}
`;

export const Overlay = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  background-color: white;
  position: fixed;
  top: 0;
  left; 0;
`;

export const BBQDetailsWrapper = styled(motion.div)`
  width: 100%;
  max-width: 700px;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 160px;
  z-index: 10;
`;

export const DetailsWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
`;

export const AddBBQCard = styled.div`
  ${({ theme }) => css`
    width: 280px;
    height: 200px;
    padding: ${theme.spacing.medium}px;
    background-color: ${theme.colors.lightGray};
    border-radius: ${theme.borderRadius.small}px;
    margin: ${theme.spacing.small}px;
    font-weight: bold;
    ${theme.elevation(2)}

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all 100ms ease;
    cursor: pointer;

    &:hover {
      ${theme.elevation(4)}
    }
  `}
`;

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    width: 90px;
    height: 90px;
    border-radius: 100px;
    background-color: ${theme.colors.primary};
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: ${theme.spacing.small}px;
  `}
`;
