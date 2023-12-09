
import { MainContainer,LogoContainer,Icon,OptionsContainer} from "./styles"
import Logo from "../../assets/Logo-Uni-Branca.png"
import OptionsDrawer from "../OptionsDrawer"
import { options } from "./options"
import { useState } from "react"
import { Link } from "react-router-dom"
function Drawer() {

  const [active,setActive] = useState(0)

  return (
    <MainContainer>
        <LogoContainer>
            <Icon src={Logo}/>
        </LogoContainer>
        <OptionsContainer>
            {options.map((op,i) => <Link to={op.link} style={{textDecoration:'none',width: "80%",height:"50%",display:"flex",justifyContent: "center"}} ><OptionsDrawer icon={op.icon} setActive={setActive} index={i} active={active == i ? true : false}/> </Link>)}
        </OptionsContainer>
    </MainContainer>
  )
}

export default Drawer
