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


export const ProgressContainer = styled.div`
  height: 30%;
  width: 100%;
  display: flex;
  padding-left: 40px;
  justify-content: space-between;


`;  

export const ProgressViewContainer = styled.div`
  height: 100%;
  width: 90%;
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
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #E5D1FF;
  border-radius: 10px;
  flex-direction: column;
`;

export const CounterLabel = styled.span`
    color: black;
    font-size: 45px;
    font-family: 'Poppins', sans-serif;
    font-weight: 800;
`;

export const CardLabel = styled.span`
    color: black;
    font-size: 30px;
    font-family: 'Poppins', sans-serif;
    font-weight: 200;
`;

export const StatusContainer = styled.div`
  height: 20%;
  width: 100%;
  display: flex;
  padding-left: 40px;

`;

export const StatusViewContainer = styled.div`
  height: 100%;
  width: 90%;
  display: flex;
  flex-direction: column;
`;

export const CardStatusContainer = styled.div`
    transition: transform .2s;
    border: 1px solid #ccc;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 8px;
    border: 1px solid #EBEBEB;
    background: #FFF;
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.25);
    flex-direction: column;
    height: 90%;
    display: grid;
    grid-template-columns: repeat(3, 1fr); 
    gap: 50px;

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
  height: 80%;
  width: 33%;
  display: flex;
  flex-direction: column;

`;

export const ActivityCardContainer = styled.div`
  width: 80%;
  display: flex;
  height: 100%;
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

export const EnrolledCoursesContainer = styled.div`
  height: 35%;
  width: 100%;
  display: flex;
  padding-left: 40px;

`;

export const EnrolledCoursesViewContainer = styled.div`
  height: 100%;
  width: 90%;
  display: flex;
  flex-direction: column;

`;

export const EnrolledCoursesHeaderContainer = styled.div`
  height: 20%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

`;

export const ButtonCourse = styled.button`
  border: none;
  color: white;
  justify-content: center;
  align-items: center;
  display: flex;
  height: 100%;
  border-radius: 4px;
  background-color: #2D9CDB;
  box-shadow: 1px 1px 2px 0px rgba(0, 0, 0, 0.25);
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  text-transform: uppercase;
  font-size: 16px;
  cursor: pointer;
`;

//35 px
export const Icon = styled.img`
    width: ${props => props.tam};
    height: ${props => props.tam};
`;

export const EnrolledCoursesCardContainer = styled.div`
    height: 70%;
    display: flex;
    width: 100%;
    flex-direction: column;
    overflow-y: auto;
`;

export const BodyContainer = styled.div`
   display: flex;
   flex-direction: row;
   height: 100%;
`;
export const FirstColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 100%;
  gap: 40px;
`;

export const SecondColumn = styled.div`
   display: flex;
   flex: 1;
   height: 100%;
   flex-direction: column;
   align-items: center;
   
`;


export const CalendarContainer = styled.div`
  height: 15%;
  width: 100%;
  display: flex;
  padding-left: 40px;
  justify-content: space-between;


`;  

export const CalendarViewContainer = styled.div`
  height: 100%;
  width: 90%;
  display: flex;
  flex-direction: column;
  
`;

export const CalendarHeader = styled.div`
  height: 40%;
  width: 100%;
  flex-direction: row;
  display: flex;
  justify-content: space-between;
`;

export const ButtonContainer = styled.div`
  height: 100%;
  width: 20%;
  display: flex;
  justify-content: end;
  align-items: center;

`;

export const IconArrow = styled.img`
    width: 35px;
    height: 35px;
    cursor: pointer;
`;

export const BodyCalendar = styled.div`
   display: flex;
   flex: 1;
   flex-direction: column;
   gap: 10px;
`;

export const DaysContainer = styled.div`
   display: grid;
   grid-template-columns: repeat(7,1fr);
   width: 100%;
   height: 20%;
   justify-content: center;
   align-items: center;
   column-gap: 30px;
`;

export const LabelDay = styled.span`
    font-family: 'Poppins', sans-serif;
    color: #828282;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: center;
`;

export const LabelWeek = styled.span`
    font-family: 'Poppins', sans-serif;
    color: ${props => props.background ? "white" : "#333"}; ;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    background-color: ${props => props.background ? "#2D9CDB" : ""};
    padding: 5px;
    border-radius: 4px;
    height: 16px;
    justify-content: center;
    align-items: center;
    display: flex;
`;

export const CalendarAlertContainer = styled.div`
&:hover{
  transform: scale(1.1);
}
    transition: transform .2s;
    border: 1px solid #ccc;
    padding: 15px;
    box-sizing: border-box;
    border-radius: 8px;
    border: 1px solid #EBEBEB;
    background: #FFF;
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.25);
    flex-direction: column;
    height: 20%;
    width: 90%;
    display: grid;
    
`;

export const CalendarAlertHeaderContainer = styled.div`
  height: 60%;
  width: 100%;
  flex-direction: row;
  display: flex;
  justify-content: space-between;
 
`;

export const DueDateContainer = styled.div`
  height:100%;
  width: 35%;
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  
`;

export const DueDateLabel = styled.span`
    font-family: 'Poppins', sans-serif;
    color: black;

    font-size: 21px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

export const DateContainer = styled.div`
  height:100%;
  width: 100%;
  flex-direction: row;
  display: flex;
  justify-content: space-evenly;
  
  
`;

export const CalendarIconContainer = styled.div`
  height: 100%;
  display: flex;
  width: 45%;
  justify-content: space-between;
  
`;


export const BodyCalendarAlert = styled.div`
   height: 100%;
  
`;

export const LabelAlert = styled.span`
    font-family: 'Poppins', sans-serif;
    color: #4F4F4F;

    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`;