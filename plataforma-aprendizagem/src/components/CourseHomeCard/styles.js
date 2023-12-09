import styled from "styled-components";

export const MainContainer = styled.div`
&:hover{
    transform: scale(1.1);
}
    display: flex;
    transition: transform .2s;
    border-radius: 10px;
    border: 1px solid #EBEBEB;
    background: rgba(151, 71, 255, 0.25);
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.25);
    height: 80%;
    max-height: 100%;
    width: 25%;
    overflow: hidden;
    overflow-wrap: break-word;
    flex-direction: column;
    text-overflow: ellipsis;
`;

export const HeaderContainer = styled.div`
  height: 20%;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
`;


export const TitleContainer = styled.div`
  max-height: 45px;
  overflow: hidden;
  width: 90%;
  display: flex;
  flex-direction: column;
  text-transform: capitalize;
  padding-left: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  overflow-wrap: break-word;
  gap: 10px;

`;

export const Title = styled.span`
    overflow: hidden;
    text-overflow: ellipsis;
    font-family: 'Poppins', sans-serif;
    color: #4F4F4F ;            
    font-size: 16px; 
    font-style: normal;
    font-weight: 400;
    overflow-wrap: break-word;
    line-height: normal;
    text-overflow: ellipsis;
`;

export const Icon = styled.img`
    width: 30px;
    height: 30px;
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

export const HostContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: start;
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