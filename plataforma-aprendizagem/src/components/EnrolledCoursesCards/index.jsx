
import { MainContainer,IconContainer,Background,Icon,ProgressContainer,LabelCourse,LabelProgress,Progress,InfoContainer,Stack,IconStack,LabelProgressCompleted} from "./styles"

import course from "../../assets/CourseMyCoursesv2.svg"
import book from "../../assets/menu_book.svg"

import LinearProgress from '@mui/material/LinearProgress';

function EnrolledCoursesCards({title,index,completed,progress}) {


  console.log(progress)

  return (
    <MainContainer>
        <IconContainer>
            <Background odd={index % 2 == 0 ? true : false}>
                <Icon src={course}/>
            </Background>
        </IconContainer>
        <ProgressContainer>
            <LabelCourse>{title}</LabelCourse>
            <Progress>
              <LabelProgress>Progresso</LabelProgress>
              <LinearProgress sx={{width: "40%",height: 6,borderRadius: 2}} variant="determinate" value={progress}/>
              <LabelProgress>{progress}%</LabelProgress>
            </Progress>
        </ProgressContainer>
        <InfoContainer>
              {completed 
              ? 
                  <Stack>
                    <IconStack src={book}/>
                    <LabelProgress>2/10</LabelProgress>
                  </Stack>
                 :
                  <Stack $background={true}>
                      <LabelProgressCompleted>COMPLETO</LabelProgressCompleted>
                  </Stack>

            }  
   
        </InfoContainer>
    </MainContainer>
  )
}

export default EnrolledCoursesCards
