import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    background-color: ${props => props.$active ? "#2D9CDB" : ""};
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const TitleContainer = styled.div`
  height: 30%;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.span`
    color: black;
    font-size: 14px;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
`;

export const Icon = styled.img`
    width: 35px;
    height: 35px;
`;

export const InfoContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    padding: 10px;
`;

export const Label = styled.span`
    color: black;
    font-family: 'Poppins', sans-serif;
    font-size: 42px;
    font-weight: bold;
`;