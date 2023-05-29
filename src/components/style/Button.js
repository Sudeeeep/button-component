import styled, { css } from "styled-components";

export const Button = styled.button`
  background-color: #e0e0e0;
  padding: 1rem 1.5rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 1.25rem;
  box-shadow: 11px 10px 22px -3px rgba(0, 0, 0, 0.2);
  margin-right: 1rem;
  &:hover,
  &:focus {
    background-color: #aeaeae;
  }
  ${(props) =>
    props.variant === "outline" &&
    css`
      background-color: white;
      box-shadow: none;
      color: #546dfe;
      border: 1.5px solid #546dfe;
      &:hover,
      &:focus {
        background-color: #eaefff;
      }
    `}
  ${(props) =>
    props.variant === "text" &&
    css`
      background-color: white;
      box-shadow: none;
      color: #546dfe;
      &:hover,
      &:focus {
        background-color: #eaefff;
      }
    `}
    ${(props) =>
    props.disableShadow &&
    css`
      box-shadow: none;
      background-color: #3d5afe;
      color: white;
    `}
    ${(props) =>
    props.disabled &&
    css`
      box-shadow: none;
      color: #9e9e9e;
      &:hover,
      &:focus {
        background-color: #e0e0e0;
      }
    `}
    ${(props) =>
    props.variant === "text" &&
    props.disabled &&
    css`
      &:hover,
      &:focus {
        background-color: white;
      }
    `}
    ${(props) =>
    (props.iconLeft || props.iconRight) &&
    css`
      display: inline-flex;
      gap: 0.5rem;
      box-shadow: none;
      color: #9e9e9e;
      background-color: #3d5afe;
      color: white;
      &:hover,
      &:focus {
        background-color: #e0e0e0;
      }
    `}
    ${(props) =>
    props.size === "sm" &&
    css`
      color: white;
      background-color: #3d5afe;
      padding: 0.5rem 1rem;
    `}
    ${(props) =>
    props.size === "md" &&
    css`
      color: white;
      background-color: #3d5afe;
      padding: 1rem 1.5rem;
    `}
    ${(props) =>
    props.size === "lg" &&
    css`
      color: white;
      background-color: #3d5afe;
      padding: 1.25rem 1.5rem;
    `}
    ${(props) =>
    props.color === "primary" &&
    css`
      color: white;
      background-color: #3d5afe;
      padding: 1rem 1.5rem;
      &:hover,
      &:focus {
        background-color: #0039cb;
      }
    `}
    ${(props) =>
    props.color === "secondary" &&
    css`
      color: white;
      background-color: #455a64;
      padding: 1rem 1.5rem;
      &:hover,
      &:focus {
        background-color: #1c313a;
      }
    `}
    ${(props) =>
    props.color === "danger" &&
    css`
      color: white;
      background-color: #d32f2f;
      padding: 1rem 1.5rem;
      &:hover,
      &:focus {
        background-color: #9a0007;
      }
    `}
`;
