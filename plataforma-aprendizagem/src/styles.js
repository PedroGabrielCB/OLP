import styled from "styled-components";


export const MainContainer = styled.div`
  height: 100%;
  display: flex;
  position: fixed;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: row;

`;

export const AppContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;


export const LogoContainer = styled.div`
  height: 30%;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  
`;

export const Logo = styled.img`
    width: 350px;
    height: 350px;
`;

export const FieldContainer = styled.div`
  height: 20%;
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 10%;
  height: 5%;
  margin-top: 40px;
`;

export const Button = styled.button`
  height: 100%;
  width: 100%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #BB6BD9;
  align-items: center;
  color: white;
  border: none;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;
`;

