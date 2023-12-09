import styled from "styled-components";

export const MainContainer = styled.div`
&:hover{
    transform: scale(1.1);
}
    display: flex;
    transition: transform .2s;
    border: 1px solid #ccc;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 8px;
    border: 1px solid #EBEBEB;
    background: #FFF;
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.25);
    flex-direction: column;
`;

export const TitleContainer = styled.div`
  height: 30%;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
`;

export const Title = styled.span`
    color: black;
    font-size: 14px;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
`;

export const Icon = styled.img`
    width: 32px;
    height: 21px;
`;

export const InfoContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    padding: 10px;
    white-space: nowrap;
`;

export const Label = styled.span`
    color: black;
    font-family: 'Poppins', sans-serif;
    font-size: 42px;
    font-weight: bold;
`;