import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #0f0e17;
  padding-left: 34px;
  padding-right: 34px;
  @media (min-width: 850px) {
    padding-left: 68px;
    padding-right: 68px;
  }
`;
export const Heading = styled.h1`
  font-size: 36px;
  line-height: 43px;
  color: #fffffe;
`;
export const Account = styled.p`
  font-size: 24px;
  line-height: 28px;
  color: #a7a9be;
`;
