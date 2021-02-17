import styled from "styled-components";

export const Container = styled.div`
  padding-left: 34px;
  padding-right: 34px;
  @media (min-width: 850px) {
    padding-left: 68px;
    padding-right: 68px;
  }
`;

export const Seats = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  max-width: max-content;
  grid-gap: 12px;
`;

export const ImageList = styled.li``;

export const ListItem = styled.li`
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  color: #94989b;
  margin-bottom: 27px;
  margin-top: 27px;
`;
export const Title = styled.h1`
  font-weight: bold;
  font-size: 64px;
  line-height: 76px;
  color: #000000;
`;

export const Info = styled.ul``;

export const Content = styled.div`
  max-width: 800px;
  margin: auto;
  @media (min-width: 850px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Heading = styled.h3`
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  text-transform: uppercase;
  color: #0f0e17;
  margin-bottom: 71px;
`;

export const Button = styled.button`
  background: #e53170;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  color: #ffffff;
  padding-top: 22px;
  padding-bottom: 22px;
  border: none;
  padding-left: 36px;
  padding-right: 36px;
  margin-top: 60px;
`;

export const ButtonSpan = styled.span`
  color: #ff8906;
`;

export const Total = styled.p`
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  text-transform: uppercase;
  color: #000000;
`;

export const Wrapper = styled.div``;
export const Price = styled.div`
  font-weight: 500;
  font-size: 48px;
  line-height: 57px;
  color: #ff8906;
`;

export const Span = styled.span`
  color: #000000;
`;
export const Image = styled.img``;
