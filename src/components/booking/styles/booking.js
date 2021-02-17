import styled from "styled-components";

export const Container = styled.div``;

export const Seats = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  max-width: max-content;
  grid-gap: 12px;
`;

export const ListItem = styled.li`
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  color: #94989b;
`;
export const Title = styled.h3`
  font-weight: bold;
  font-size: 64px;
  line-height: 76px;
  color: #000000;
`;

export const Info = styled.ul``;

export const Button = styled.button`
  background: #e53170;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  color: #ffffff;
  padding-top: 22px;
  padding-bottom: 22px;
  border: none;
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
