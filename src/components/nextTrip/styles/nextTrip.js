import styled from "styled-components";

export const Container = styled.div`
  font-size: 36px;
  margin-top: 58px;
  margin-bottom: 58px;
  /* max-width: calc(92px + 306px + 757px); */
  /* margin: auto; */
  @media (min-width: 600px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Date = styled.span`
  color: #ff8906;
`;

export const Seat = styled.span`
  color: #e53170;
`;

export const Header = styled.h1`
  font-size: 64px;
`;

export const Place = styled.span`
  font-size: 64px;
  font-weight: 300;
  color: #e53170;
`;

export const Wrapper = styled.div``;

export const Button = styled.button`
  background: #e53170;
  color: #ffffff;
  font-size: 36px;
  border: none;
  padding-top: 25px;
  padding-bottom: 25px;
  padding-right: 61px;
  padding-left: 61px;
  &:disabled {
    background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.7),
        rgba(255, 255, 255, 0.7)
      ),
      #e53170;
  }
`;
