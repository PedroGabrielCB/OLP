import styled from "styled-components";


export const MainContainer = styled.div`
  height: 100%;
  display: flex;
  width: 100%;
  flex-direction: column;
  background-color: #FEFEFE;
`;




export const HeaderContainer = styled.div`
  height: 10%;
  width: 100%;
  display: flex;
`;


export const OverviewLiveContainer = styled.div`
  height: 22%;
  width: 100%;
  display: flex;
  padding-left: 40px;
  justify-content: space-between;
`;  

export const OverViewContainer = styled.div`
  height: 70%;
  width: 60%;
  display: flex;

  flex-direction: column;
`;

export const Title = styled.span`

    color: black;
    font-size: 30px;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
`;

export const CardContainer = styled.div`
  flex: 1;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 colunas com tamanhos iguais */
  gap: 50px; /* Espaço entre os cards */

`;

export const LiveEventsContainer = styled.div`
  height: 80%;
  padding-left: 10px;
  width: 35%;
  display: flex;
  flex-direction: column;
 
`;

export const CardLiveContainer = styled.div`
  width: 90%;
  height: 100%;
  display: flex;

`;


export const StasticsActivityContainer = styled.div`
  height: 42%;
  width: 100%;
  display: flex;
  justify-content: space-between;
`; 

export const StasticsProgressContainer = styled.div`
  height: 100%;
  width: 60%;
  display: flex;
  gap: 50px;
  padding-left: 40px;
 
`; 


export const StasticsContainer = styled.div`
  height: 80%;
  width: 70%;
  display: flex;
  flex-direction: column;

`;


export const ProgreessContainer = styled.div`
  height: 80%;
  width: 30%;
  display: flex;
  flex-direction: column;
`;

export const ActivityContainer = styled.div`
  height: 100%;
  width: 33%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

export const ActivityCardContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const MyCoursesContainer = styled.div`
  height: 24%;
  width: 60%;
  display: flex;
  padding-left: 40px;
  flex-direction: column;

`; 

export const MyCourseCardContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  gap: 20px;

`; 

export const Icon = styled.img`
    width: ${props => props.tam};
    height: ${props => props.tam};
`;

export const HeaderTitle = styled.div`

  display: flex;
  width: 80%;
  justify-content: space-between;

`; 

export const IconContainer = styled.div`

  display: flex;
  width: 10%;
  gap: 10px;

`; 