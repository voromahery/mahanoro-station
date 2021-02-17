import styled from "styled-components";

export const Container = styled.div`
  padding-left: 34px;
  padding-right: 34px;
  @media (min-width: 850px) {
    padding-left: 68px;
    padding-right: 68px;
  }
`;

export const Heading = styled.h1``;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 16px;
`;

export const ListItem = styled.li``;

export const Button = styled.button`
  background-color: #0f0e17;
  color: #ffffff;
  text-transform: uppercase;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 20px;
  padding-right: 20px;
  border: none;
  width: 100%;
`;
