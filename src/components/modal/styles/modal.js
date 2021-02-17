import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  background-color: rgba(255, 255, 255, 0.8);
  width: 100vw;
  height: 100vh;
`;

export const Wrapper = styled.div`
  border: 5px solid #e53170;
  text-align: center;
  background-color: #ffffff;
  top: 30%;
  z-index: 2;
  padding: 48px;
  max-width: 500px;
  margin: auto;
`;

export const Heading = styled.h1`
  font-size: 36px;
  line-height: 43px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
`;

export const Paragraph = styled.p`
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  color: #000000;
`;

export const Close = styled.button`
  text-align: right;
  max-width: fit-content;
  margin-left: auto;
`;

export const Button = styled.button`
  background: #e53170;
  color: #ffffff;
  padding-top: 24px;
  padding-bottom: 24px;
  padding-right: 27px;
  padding-left: 27px;
  border: none;
`;
