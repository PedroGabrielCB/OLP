
import { MainContainer,AvatarContainer,Title,Icon,InfoContainer,UserInfo,LabelName,Label, ContentInfo} from "./styles"
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import chatIcon from "../../assets/chat.svg"
import { styled } from '@mui/material/styles';

function ActivityCard({title,value,icon}) {

  const SmallAvatar = styled(Avatar)(({ theme }) => ({
    width: 22,
    height: 22,
    border: `2px solid ${theme.palette.background.paper}`,
  }));

  return (
    <MainContainer>
        <AvatarContainer>
          <Icon>
            <Badge
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            badgeContent={
              <SmallAvatar sx={{ width: 18, height: 18}} alt="Remy Sharp" src={chatIcon} />
            }
          >
            <Avatar sx={{ width: 51, height: 51}} alt="Travis Howard">A</Avatar>
          </Badge>
          </Icon>
        </AvatarContainer>
        <InfoContainer>
            <UserInfo>
               <LabelName>{title}</LabelName>
            </UserInfo>
            <ContentInfo>
              <Label>{value}</Label>
            </ContentInfo>
        </InfoContainer>
    </MainContainer>
  )
}

export default ActivityCard
