import styled from "styled-components";


export const MainContainer = styled.div`
  height: 100%;
  display: flex;
  width: 100%;
  flex-direction: row;
  background-color: #FEFEFE;

`;

export const BodyContainer = styled.div`
  display: flex;
  flex: 1;
  background-color: #FEFEFE;
  flex-direction: column;
`;

export const HeaderContainer = styled.div`
  height: 10%;
  width: 100%;
  display: flex;
`;

export const MenuOptions = styled.div`
  height: 100%;
  width: 16%;
  display: flex;
  flex-direction: column;
  background-color: #F9F9F9;
`;

export const HeaderMenuContainer = styled.div`
  height: 8%;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 20px;
  cursor: pointer;
`;

export const ButtonCourse = styled.button`
  border: none;
  color: white;
  justify-content: center;
  align-items: center;
  display: flex;
  border-radius: 4px;
  background-color: #2D9CDB;
  box-shadow: 1px 1px 2px 0px rgba(0, 0, 0, 0.25);
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  text-transform: uppercase;
  font-size: 14px;
  cursor: pointer;

`;

export const LabelHeader = styled.span`
    font-family: 'Poppins', sans-serif;
    color: black;
    font-size: 21px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

export const Icon = styled.img`
    width: ${props => props.tam};
    height: ${props => props.tam};
`;

export const BodyMenuContainer = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  padding-left: 20px;
  flex-direction: column;
  
`;

export const MenuContainer = styled.div`
  height: 8%;
  width: 100%;
  display: flex;
  align-items: center;

`;
export const CardContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const LabelMenu = styled.span`
    font-family: 'Poppins', sans-serif;
    color: #828282;
    font-size: 21px;
    font-style: normal;
    font-weight: 400;
    text-transform: uppercase;
`;

export const PageContainer = styled.div`
  flex: 1;
  display: flex;
  padding-left: 20px;
  padding-right: 20px;
  overflow-y: scroll;
  flex-direction: column;
`;

export const TitleContainer = styled.div`
  width: 100%;
  height: 10%;
  display: flex;

`;

export const TitleLabel = styled.span`
    font-family: 'Poppins', sans-serif;
    color: #333;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;