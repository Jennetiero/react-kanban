import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Field = styled.div`
  display: block;
  align-items: center;
  justify-content: center;
  flex: 0 0 18%;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 0px 15px 0px;
  border-bottom: 1px solid #F3F3F3;
  width: 100%;
`;

export const FieldBody = styled.div`
  border-right: 1px solid #F3F3F3;
  padding: 40px 10px 10px 10px;
  height: 100%;
`;

export const Card = styled.div`
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid transparent;
  border-radius: 8px;
  background-color: yellow;
`;

export const CardText = styled.p`
  margin-bottom: 10px;
`;

export const Cardtime = styled.p`

`;

export const CompletedCard = styled.div`
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid transparent;
  border-radius: 8px;
  background-color: #F0F0F0;
  color: grey;
`;

export const CompletedCardText = styled.p`
  margin-bottom: 10px;
  text-decoration-line: line-through;
`;

export const CompletedCardtime = styled.p`
  text-decoration-line: line-through;
`;

export const Status = styled.p`
  color: #222222;
  font-weight: 600;
  float: left;
`;

export const Image = styled.img`
  margin-left: 10px;
  float: left;
`;

export const StatusField = styled.div`
  flex: 0 0 28%;
  max-width: 28%;
`;

export const Button = styled.button`
  padding-left: 15px;
  padding-bottom: 4px;
  width: 100%;
  text-align: start;
  border: none;
  background: transparent;
  cursor: pointer;

  &:hover,
  &:focus {
    color: ${props => props.theme.secondary};
  }
`;