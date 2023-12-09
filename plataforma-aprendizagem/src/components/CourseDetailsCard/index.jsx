
import { MainContainer,TitleContainer,Title,Icon,InfoContainer,Label} from "./styles"
import bookMark from "../../assets/bookmark.svg"

import { useNavigate } from 'react-router-dom';


function CourseDetailsCard({setobj,tempo,title,setHeader,setData,mark,setIndex,i,active}) {
  const navigate = useNavigate();
  const setInformation = () => {
    setobj({
      title:title,
      index: i,
      tempo: tempo
    })
   
  }
  return (
    <MainContainer active={active} onClick={setInformation}>
        <TitleContainer>
            <Icon src={bookMark}/>
            <Title active={active}>
                {title}
            </Title>
        </TitleContainer>
    </MainContainer>
  )
}

export default CourseDetailsCard
