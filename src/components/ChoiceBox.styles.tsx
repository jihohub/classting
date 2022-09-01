import styled from "styled-components";

const ChoiceBox = styled.div<{ isSelected: boolean }>`
  background: ${(props) => (props.isSelected ? "#00c896" : "transparent")};
  border: 1px solid #00c896;
  border-radius: 8px;
  height: 5rem;
  min-width: 10rem;
  color: ${(props) => (props.isSelected ? "#ffffff" : "#00c896")};
  margin: 0 1em;
  padding: 0.25em 1em;
  -webkit-transition: width 0.5s, height 0.5s, background-color 0.5s,
    -webkit-transform 0.5s;
  transition: width 0.5s, height 0.5s, background-color 0.5s, transform 0.5s;
  
  &:hover {
    color: #ffffff;
    background-color: #00c896;
    cursor: pointer;
    -webkit-transform: translateY(-0.2rem);
    transform: translateY(-0.2rem);
  }
`;

const ChoiceText = styled.p`
  font-size: 1rem;
`;

export default { ChoiceBox, ChoiceText };
