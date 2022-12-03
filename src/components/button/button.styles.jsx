import styled from "styled-components";

export const BaseButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: "Source Sans Pro";
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
    transition: all 0.25s ease-in-out;
  }
`;

export const ButtonGoogle = styled(BaseButton)`
  background-color: grey;
  color: black;

  &:hover {
    background-color: #357ae8;
    color: white;
    border: none;
  }
`;

export const ButtonInverted = styled(BaseButton)`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

export const LinkButton = styled(BaseButton)`
  display: flex;
  align-items: center;
  color: black;
  min-width: unset;
  border: none;
  background-color: transparent;
  font-family: "Source Sans Pro", -apple-system, sans-serif;
  padding: 10px 15px;
  font-size: 1rem;
  &:hover {
    border: 1px solid darkgrey;
    cursor: pointer;
  }
`;
