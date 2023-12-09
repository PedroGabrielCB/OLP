import styled from "styled-components";

export const MainContainer = styled.div`
&:hover{
    transform: scale(1.1);
}
    display: flex;
    transition: transform .2s;
    width: 229px;
    height: 40px;
    padding: 12px;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    border-radius: 4px;
    background: ${props => props.active ? "#2D9CDB" : "#FFF"};
    box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.25);
    justify-content: center;
    align-items: center;
`;

export const TitleContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis; 
`;

export const Title = styled.span`
    font-family: 'Poppins', sans-serif;
    color: ${props => props.active ? "#FFF" : " #828282"};;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis; 
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
`;

export const Label = styled.span`
    color: black;
    font-family: 'Poppins', sans-serif;
    font-size: 42px;
    font-weight: bold;
`;