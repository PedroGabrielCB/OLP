
import { MainContainer,TitleContainer,DetailsContainer,Details,Title,SearchInput,Icon} from "./styles"
import Bell from "../../assets/bell.svg"
import Settings from "../../assets/options.svg"

function Header({label}) {
  return (
    <MainContainer>
        <TitleContainer>
            <Title>
                {label}
            </Title>
        </TitleContainer>
        <DetailsContainer>
            <SearchInput placeholder="search"/>
            <Details>
              <Icon src={Bell}/>
              <Icon src={Settings}/>
            </Details>
        </DetailsContainer>
    </MainContainer>
  )
}

export default Header
