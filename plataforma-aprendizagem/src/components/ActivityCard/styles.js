import styled from "styled-components";

export const MainContainer = styled.div`
&:hover{
    transform: scale(1.1);
}
    display: flex;
    transition: transform .2s;
    border-left: 8px solid #2D9CDB;
    padding: 10px;
    flex-direction: row;
    width: 100%;
    height: 50px;
    max-height: 80px;
    justify-content: space-evenly;

`;

export const AvatarContainer = styled.div`
  height: 100%;
  width: 4%;
  display: flex;
  justify-content: end;

`;

export const Title = styled.span`
    color: black;
    font-size: 14px;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
`;

export const Icon = styled.div`
    width: 32px;
    height: 21px;
`;

export const InfoContainer = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

export const UserInfo = styled.div`
   
`;


export const LabelName = styled.span`
    color: black;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 600;
    margin-right: 3px;
`;

export const Label = styled.span`
    color: black;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 300;
`;

export const ContentInfo = styled.div`
   
`;

