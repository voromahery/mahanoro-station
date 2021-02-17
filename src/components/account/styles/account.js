import styled from "styled-components";

export const Container = styled.div`
  padding-left: 34px;
  padding-right: 34px;
  @media (min-width: 850px) {
    display: flex;
    flex-wrap: wrap;
    padding-left: 68px;
    padding-right: 68px;
  }
`;

export const Heading = styled.h1`
  flex-basis: 100%;
`;

export const Input = styled.input`
  height: 44px;
  max-width: 444px;
  background: #000000;
  color: #ff8906;
`;

export const Update = styled.button`
  padding-top: 16px;
  padding-bottom: 16px;
  padding-right: 32px;
  padding-left: 32px;
  max-width: fit-content;
  background: #e53170;
  color: #ffffff;
  border: none;
`;

export const Cancel = styled.button`
  background: #ff8906;
  text-transform: uppercase;
  border: none;
  color: #ffffff;
  padding: 10px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3`
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  text-transform: uppercase;
`;

export const Wrapper = styled.div`
  display: flex;
`;

export const Span = styled.span`
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
`;

export const BookedPlace = styled.div`
  display: "flex";
  flex-direction: "column";
  gap: "47px";
  @media (min-width: 850px) {
    flex-basis: 50%;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (min-width: 850px) {
    flex-basis: 50%;
  }
`;

export const Text = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
`;
