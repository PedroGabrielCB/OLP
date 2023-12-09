
import { MainContainer,HeaderContainer,TitleContainer,Title,Icon,InfoContainer,Label,HostContainer,IconHost,LabelHost} from "./styles"
import iconHost from "../../assets/iconHost.svg"

import courseMain from "../../assets/course-main.svg"
function CourseHomeCard({title,value,professor}) {
  return (
    <MainContainer>
      <HeaderContainer>
          <Icon src={courseMain}/>
      </HeaderContainer>
        <TitleContainer>
            <Title>
                {title}
            </Title>
        </TitleContainer>
        <InfoContainer>
            <HostContainer>
                <IconHost src={iconHost}/>
                <LabelHost>{professor}</LabelHost>
            </HostContainer>
        </InfoContainer>
    </MainContainer>
  )
}

export default CourseHomeCard
