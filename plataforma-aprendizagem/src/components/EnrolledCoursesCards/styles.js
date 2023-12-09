import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    border-radius: 8px;
    border-bottom: 1px solid #EBEBEB;
    background: #FFF;
    flex-direction: row;
    min-height: 100px;
    height: 100px;
    max-height: 100px;

    align-items: center;
`;

export const IconContainer = styled.div`
    display: flex;
    height: 80%;
    width: 8%;
    padding: 10px;
`;


export const Background = styled.div`
    flex: 1;
    background-color: ${props => props.odd == true ? "#E5D1FF" : "#C6D9FB"};
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    display: flex;
`;

export const Icon = styled.img`
    width: 35px;
    height: 35px;
    
`;

export const ProgressContainer = styled.div`
    display: flex;
    height: 90%;
    width: 70%;
    padding: 10px;
    justify-content: center;
    flex-direction: column;
`;

export const LabelCourse = styled.span`
    color: black;
    font-family: 'Poppins', sans-serif;
    font-size: 21px;
    font-weight: 500;
`;


export const Progress = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
`;

export const LabelProgress = styled.span`
    color: black;
    font-family: 'Poppins', sans-serif;
    font-size: 15px;
    font-weight: 300;
    
`;


export const InfoContainer = styled.div`
    display: flex;
    height: 90%;
    flex: 1;
    padding: 10px;
    justify-content: center;
    align-items: center;
    flex-direction: column;

`;

export const Stack = styled.div`
    display: flex;

    padding: 10px;
    align-items: center;
    gap: 7px;
    border-radius: 100px;
    border: 1px solid #F3F3F3;
    background-color: ${props => props.$background == true ? "#2D9CDB" : null};
    background: ${props => props.$background != true ? "linear-gradient(90deg, #E1F3FF 74.51%, rgba(241, 247, 251, 0.00) 75%)" : null};
    justify-content: center;
    align-items: center;

`;

export const IconStack = styled.img`
    width: 20px;
    height: 20px;
    
`;

export const LabelProgressCompleted = styled.span`
    color: white;
    font-family: 'Poppins', sans-serif;
    font-size: 15px;
    font-weight: 300;
    
`;