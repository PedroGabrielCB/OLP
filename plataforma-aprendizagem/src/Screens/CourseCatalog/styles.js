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


//35 px



export const BodyContainer = styled.div`
   display: flex;
   flex-direction: column;
   height: 100%;

`;

export const TagsContainer = styled.div`
  height: 8%;
  width: 100%;
  display: flex;
  padding: 20px;
  gap: 20px;
`;

export const Tag = styled.div`
    display: flex;
    height: 40px;
    padding-left: 20px;
    padding-right: 20px;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    border: ${props => props.actived ? "1px solid #2D9CDB" : "1px solid #BDBDBD"};
    cursor: pointer;
`;

export const LabelTag = styled.span`
    font-family: 'Poppins', sans-serif;
    color: black;
    font-size: 21px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0.25px;
`;


export const CourseCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4,1fr);
  flex: 1 ;
  padding: 20px;
  gap: 80px;
`;

export const CourseCard = styled.div`
  &:hover{
  transform: scale(1.1);
}
    transition: transform .2s;
    border: 1px solid #ccc;
    box-sizing: border-box;
    border-radius: 12px;
    border: 1px solid #EBEBEB;
    background: #FFF;
    box-shadow: 1px 2px 2px 0px rgba(0, 0, 0, 0.25);
    flex-direction: column;
    height: 330px;
    display: flex;
    overflow: hidden;
`;

export const BannerContainer = styled.div`
  width: 100%;
  height: 65%;
  display: flex;
  background-color: #001C27;
  justify-content: center;
  align-items: center;
`;

export const InfoContainer = styled.div`
    width: 100%;
    height: 40%;
    display: flex;
    padding-left: 20px;
    padding-right: 20px;
    word-wrap: break-word;
    flex-direction: column;
`;

export const CourseLabelContainer = styled.div`
    width: 90%;
    height: 100%;
    display: flex;
    word-wrap: break-word;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
`;

export const CourseLabelName = styled.span`
    font-family: 'Poppins', sans-serif;
    color: #000;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`;

export const CourseDetailsContainer = styled.div`
    display: flex;
    width: 90%;
    height: 100%;
    align-items: center;
    justify-content: space-between;
`;

export const ProfContainer = styled.div`
    display: flex;
    width: 30%;
    height: 100%;
    align-items: center;
    justify-content: space-evenly;

`;

export const Icon = styled.img`
    width: ${props => props.tam};
    height: ${props => props.tam};
`;

export const IconUni = styled.img`
    width: 230px;
    height: ${props => props.tam};
`;

export const LabelProf = styled.span`
    font-family: 'Poppins', sans-serif;
    color:#4F4F4F;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
`;

export const LabelLessons = styled.span`
    font-family: 'Poppins', sans-serif;
    color:#4F4F4F;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
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
