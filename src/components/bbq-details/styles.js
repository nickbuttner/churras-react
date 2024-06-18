import styled, { css } from "styled-components";

export const Card = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 700px;
    min-width: 280px;
    height: auto;
    padding: ${theme.spacing.medium}px;
    background-color: white;
    border-radius: ${theme.borderRadius.small}px;
    margin: ${theme.spacing.small}px;
    ${theme.elevation(2)}

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `}
`;

export const Date = styled.div`
  font-weight: bold;
  font-size: 24px;
`;

export const Name = styled.div`
  ${({ theme }) => css`
    font-weight: bold;
    font-size: 16px;
    margin-top: ${theme.spacing.base}px;
  `}
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  font-size: 21px;
`;

export const Info = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    svg {
      margin-right: ${theme.spacing.base}px;
      color ${theme.colors.primary};
    }
  `}
`;

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CloseButtonWrapper = styled.div`
  position: relative;
  left: 0;
  margin: 0 0 20px 0;
`;
