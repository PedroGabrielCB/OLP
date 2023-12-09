
import { useContext, useEffect, useState } from "react"
import ActivityCard from "../../components/ActivityCard"
import CardSmall from "../../components/CardSmall"
import ChartCard from "../../components/ChartCard"
import CourseHomeCard from "../../components/CourseHomeCard"
import Header from "../../components/Header"
import LiveEventCard from "../../components/LiveEventCard"
import ProgressCard from "../../components/ProgressCard"
import { MainContainer,
  HeaderContainer,
  OverviewLiveContainer,
  OverViewContainer,
  Title,
  CardContainer,
  LiveEventsContainer,
  CardLiveContainer,
  StasticsActivityContainer,
  StasticsContainer,
  StasticsProgressContainer,
  ProgreessContainer,
  ActivityContainer,
  ActivityCardContainer,
  MyCoursesContainer,
  Icon,
  MyCourseCardContainer,
  HeaderTitle,
  IconContainer
} from "./styles"


import { UsuarioContext } from "../../Context/UsuarioContext"

import cap from "../../assets/cap.svg"
import lamp from "../../assets/lamp.svg"
import clock from "../../assets/clock.svg"
import race from "../../assets/race.svg"

import right from "../../assets/RightArrow.svg"
import left from "../../assets/LeftArrow.svg"

function Home() {

    const { inscricao,eventos,notificacao } = useContext(UsuarioContext)
    const [index,setIndex] = useState(0)


    const somaProgresso = inscricao.reduce((totalProgresso, item) => {
        return totalProgresso + item.progresso;
    }, 0);

    function converterParaHorasMinutos(minutos) {
        if (minutos < 60) {
            return `${minutos} min`;
        } else {
            const horas = Math.floor(minutos / 60);
            const minutosRestantes = minutos % 60;
            return `${horas}h ${minutosRestantes}min`;
        }
    }

    const options = [
        {
          title: "Courses in progress",
          icon: cap,
          value: inscricao ? inscricao.length : null,
        },
        {
          title: "Exercicios Realizados",
          icon: lamp,
          value: 0,
        },
        {
          title: "Hours Learning",
          icon: clock,
          value: converterParaHorasMinutos(somaProgresso),
        },
        {
          title: "Pontuação da Comunidade",
          icon: race,
          value: 0,
        },
      ];
  return (
    <MainContainer>
        <HeaderContainer>
            <Header label="Dashboard"/>
        </HeaderContainer>
        <OverviewLiveContainer>
            <OverViewContainer>
                <Title>
                    Overview
                </Title>
                <CardContainer>
                  {options.map((item) => <CardSmall title={item.title} value={item.value} icon={item.icon}/>)}
                </CardContainer>
            </OverViewContainer>
            <LiveEventsContainer>
                <HeaderTitle>
                    <Title>
                        LIVE EVENTS
                    </Title>
                    <IconContainer>
                        <Icon src={left} tam="30px" onClick={() => index > 0 && setIndex(prev => prev - 1)}/>
                        <Icon src={right} tam="30px" onClick={() => index < eventos.length - 1 && setIndex(prev => prev + 1)}/>
                    </IconContainer>
                </HeaderTitle>
                <CardLiveContainer>
                    {eventos.map(((e,i) => index == i && <LiveEventCard title={e.nome} professor={e.professor.nome}/>))}
                    
                </CardLiveContainer>
            </LiveEventsContainer>
        </OverviewLiveContainer>
        <StasticsActivityContainer>
            <StasticsProgressContainer>
                <StasticsContainer>
                    <ChartCard/>
                </StasticsContainer>
                <ProgreessContainer>
                    <ProgressCard/>
                </ProgreessContainer>
            </StasticsProgressContainer>
            <ActivityContainer>
                <Title>
                    Activity
                </Title>
                <ActivityCardContainer>
                    {notificacao.map((not) => <ActivityCard title={not.tittle} value={not.body}/>)}
                    
                </ActivityCardContainer>
            </ActivityContainer>
        </StasticsActivityContainer>
        <MyCoursesContainer>
            <Title>
                CURSOS EM ANDAMENTO
            </Title>
            <MyCourseCardContainer>
             { inscricao && inscricao.map((curso) => <CourseHomeCard title={curso.curso.nome} professor={curso.curso.professor.nome}/>)}
            </MyCourseCardContainer>
        </MyCoursesContainer>
    </MainContainer>
  )
}

export default Home
