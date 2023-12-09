
import { MainContainer,TitleContainer,Title,Icon,InfoContainer,Label} from "./styles"


function CardSmall({title,value,icon}) {
  return (
    <MainContainer>
        <TitleContainer>
            <Icon src={icon}/>
            <Title>
                {title}
            </Title>
        </TitleContainer>
        <InfoContainer>
            <Label>{value}</Label>
        </InfoContainer>
    </MainContainer>
  )
}

export default CardSmall
