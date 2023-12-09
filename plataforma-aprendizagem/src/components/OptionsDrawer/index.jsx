
import { MainContainer,TitleContainer,Title,Icon,InfoContainer,Label} from "./styles"


function OptionsDrawer({title,value,icon,active,setActive,index}) {
  return (
    <MainContainer onClick={() => setActive(index)} $active={active}>
        <Icon src={icon}/>
    </MainContainer>
  )
}

export default OptionsDrawer
