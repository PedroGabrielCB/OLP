
import { MainContainer,TitleContainer,Title,Icon,InfoContainer,Label} from "./styles"

function StatusOptions({label,icon}) {
  return (
    <MainContainer>
        <TitleContainer>
            <Icon src={icon}/>
            <Title>
                {label}
            </Title>
        </TitleContainer>
    </MainContainer>
  )
}

export default StatusOptions
