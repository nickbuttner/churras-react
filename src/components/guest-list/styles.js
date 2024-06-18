import styled, { css } from "styled-components";

export const GuestList = styled.ul`
  ${({ theme }) => css`
    list-style: none;
    margin: ${theme.spacing.big}px 0 0 0;
    padding: 0;
    display: flex;
    flex-direction: column;
  `}
`;

export const Guest = styled.li`
  ${({ theme }) => css`
    border-bottom: 1px solid ${theme.colors.primary};
    padding: ${theme.spacing.base}px;
    font-weight: bold;
    display: flex;
    justify-content: space-between;

    > label {
      cursor: pointer;
    }
  `}
`;

export const Value = styled.div`
  ${({ paid }) => css`
    ${paid && `text-decoration: line-through`};
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css`
    border: none;
    border-radius: ${theme.borderRadius.small}px;
    background: black;
    padding: ${theme.spacing.base}px;
    color: white;
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

export const Actions = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: flex-end;
    margin-top: ${theme.spacing.medium}px;
  `}
`;

export const GuestActions = styled.div`
  ${({ theme }) => css`
    display: flex;

    > button {
      margin-left: ${theme.spacing.base}px;
    }
  `}
`;

export const Form = styled.form`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    flex-direction: column;
    margin-bottom: ${theme.spacing.base}px;

    ${Actions} {
      margin-top: 0;
    }
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    margin: ${theme.spacing.small}px 0 ${theme.spacing.medium}px 0;
    border: 2px solid black;
    padding: 10px;
    border-radius: ${theme.borderRadius.small}px;

    &::placeholder {
      font-style: italic;
    }
  `}
`;
