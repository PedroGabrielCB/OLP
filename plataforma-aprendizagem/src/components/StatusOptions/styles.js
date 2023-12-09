import styled from "styled-components";

export const MainContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const TitleContainer = styled.div`
  height: 30%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.span`
    color: black;
    font-size: 18px;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
`;

export const Icon = styled.img`
    width: 40px;
    height: 40px;
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