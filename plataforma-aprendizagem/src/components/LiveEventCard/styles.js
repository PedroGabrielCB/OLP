import styled from "styled-components";

export const MainContainer = styled.div`
&:hover{
    transform: scale(1.1);
}
    width: 90%;
    display: flex;
    transition: transform .2s;
    border: 1px solid #ccc;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 8px;
    border: 1px solid #EBEBEB;
    background: #FFF;
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.25);
    flex-direction: row;
`;

export const EventImageContainer = styled.div`
  height: 100%;
  width: 20%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

`;


export const Icon = styled.img`
    width: 80px;
    height: ${props => props.tam};
`;

export const InfoEventContainer = styled.div`
  height: 100%;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.span`
    color: black;
    font-size: 14px;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
`;

export const HostEventContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const IconHost = styled.img`
    width: 20px;
    height: 20px;
`;

export const LabelHost = styled.span`
    color: black;
    font-size: 14px;
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
    margin-left: 5px;
`;

export const EventStatusContainer = styled.div`
    flex:1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const IconStatus = styled.img`
    width: 50px;
    height: 50px;
`;

export const LabelStatus = styled.span`
    color: #F31A1A;
    font-size: 14px;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    margin-left: 5px;

`;