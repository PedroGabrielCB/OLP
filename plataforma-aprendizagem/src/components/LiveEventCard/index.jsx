
import { MainContainer,EventImageContainer,Icon,InfoEventContainer,Title,HostEventContainer,IconHost,LabelHost,EventStatusContainer,IconStatus,LabelStatus} from "./styles"

import iconEvent from "../../assets/Logo-Unilavras-Oficial_2019-1.png"
import iconHost from "../../assets/iconHost.svg"
import iconLive from "../../assets/liveIcon.svg"

function LiveEventCard({title,professor}) {
  return (
    <MainContainer>
        <EventImageContainer>
            <Icon src={iconEvent} tam="60px"/>
        </EventImageContainer>
        <InfoEventContainer>
            <Title>
                {title}
            </Title>
            <HostEventContainer>
                <IconHost src={iconHost}/>
                <LabelHost>{professor}</LabelHost>
            </HostEventContainer>
        </InfoEventContainer>
        <EventStatusContainer>
            <IconStatus src={iconLive}/>
            <LabelStatus>Ao Vivo</LabelStatus>
        </EventStatusContainer>
    </MainContainer>
  )
}

export default LiveEventCard
