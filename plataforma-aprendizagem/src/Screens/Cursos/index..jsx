import React, { useContext, useState } from 'react';
import Header from "../../components/Header"
import StatusOptions from "../../components/StatusOptions";
import { enrolledCoursesOptions, statusOptions } from "./options";

import { MainContainer,
  HeaderContainer,
  ProgressContainer,
  ProgressViewContainer,
  Title,
  CardContainer,
  CardLabel,
  CounterLabel,
  StatusContainer,
  StatusViewContainer,
  CardStatusContainer,
  EnrolledCoursesContainer,
  EnrolledCoursesViewContainer,
  EnrolledCoursesHeaderContainer,
  ButtonCourse,
  EnrolledCoursesCardContainer,
  Icon,
  FirstColumn,
  SecondColumn,
  BodyContainer,
  CalendarViewContainer,
  CalendarContainer,
  CalendarHeader,
  ButtonContainer,
  IconArrow,
  BodyCalendar,
  DaysContainer,
  LabelDay,
  LabelWeek,
  CalendarAlertContainer,
  DueDateContainer,
  CalendarAlertHeaderContainer,
  DueDateLabel,
  CalendarIconContainer,
  DateContainer,
  LabelAlert,
  BodyCalendarAlert
} from "./styles"

import { useNavigate } from 'react-router-dom';

import CourseIcon from "../../assets/CourseIconDrawer.svg"

import LeftIcon from "../../assets/LeftArrow.svg"
import RightIcon from "../../assets/RightArrow.svg"
import School from "../../assets/school.svg"
import Event from "../../assets/event.svg"

import LinearProgress from '@mui/material/LinearProgress';
import EnrolledCoursesCards from "../../components/EnrolledCoursesCards";
import { format, addWeeks, subWeeks, startOfWeek, addDays } from 'date-fns';

import {ptBR} from "date-fns/locale"
import { UsuarioContext } from '../../Context/UsuarioContext';


import course from "../../assets/CourseMyCourses.svg"
import atividades from "../../assets/AtividadesMyCourses.svg"
import clock from "../../assets/ClockMyCourses.svg"


function Cursos() {
const [currentWeek, setCurrentWeek] = useState(new Date());
const [currentMonth, setCurrentMonth] = useState(format(new Date(), 'MMM yyyy',{locale: ptBR}));

  const generateWeekDates = (start) => {
    const weekDates = [];
    for (let i = 1; i <= 7; i++) {
      weekDates.push(format(addDays(start, i), 'yyyy-MM-dd',{locale: ptBR}));
    }
    return weekDates;
  };

  const handlePrevWeek = () => {
    setCurrentWeek(subWeeks(currentWeek, 1));
    setCurrentMonth(format(subWeeks(currentWeek, 1), 'MMM yyyy',{locale: ptBR}));

  };

  const handleNextWeek = () => {
    setCurrentWeek(addWeeks(currentWeek, 1));
    setCurrentMonth(format(addWeeks(currentWeek, 1), 'MMM yyyy',{locale: ptBR}));

  };

  const weekDates = generateWeekDates(startOfWeek(currentWeek));
  const navigate = useNavigate();

  const { inscricao,eventos,notificacao,curso } = useContext(UsuarioContext)

const somaProgressoCarga = inscricao.reduce((totalProgresso, item) => {
    return totalProgresso + item.curso.cargaHoraria;
}, 0);

const somaProgresso = inscricao.reduce((totalProgresso, item) => {
    return totalProgresso + item.progresso;
}, 0);

const statusOptions = [
    {
        icon: course,
        label: `${inscricao.length}/${curso.length} Cursos`
    },
    {
        icon: atividades,
        label: "0/0 Atividades"
    },
    {
        icon: clock,
        label: "15 horas cumpridas"
    },
]

const total = (somaProgresso * 100) / somaProgressoCarga


  return (
    <MainContainer>
        <HeaderContainer>
            <Header label="Meus Cursos"/>
        </HeaderContainer>
        <BodyContainer>
            <FirstColumn>
                <ProgressContainer>
                    <ProgressViewContainer>
                        <Title>
                            Progress
                        </Title>
                        <CardContainer>
                            <CardLabel>Progresso Atual</CardLabel>
                            <CounterLabel>{!isNaN(total) ? total.toFixed(2) : 0}%</CounterLabel>
                            <LinearProgress sx={{width: "80%",height: 20,borderRadius: 2}} color="secondary" variant="determinate" value={total} />
                        </CardContainer>
                    </ProgressViewContainer>
                </ProgressContainer>
                <StatusContainer>
                    <StatusViewContainer>
                        <Title>
                            Todos os Status
                        </Title>
                        <CardStatusContainer>
                            {statusOptions.map((item) => <StatusOptions label={item.label} icon={item.icon}/>)}
                        </CardStatusContainer>
                    </StatusViewContainer>
                </StatusContainer>
                <EnrolledCoursesContainer>
                    <EnrolledCoursesViewContainer>
                        <EnrolledCoursesHeaderContainer>
                            <Title>
                                Cursos Inscritos
                            </Title>
                            <ButtonCourse onClick={() => navigate("/catalogo_cursos")}>
                                <Icon src={CourseIcon} tam="35px"/>
                                Catálogo de Cursos
                            </ButtonCourse>
                        </EnrolledCoursesHeaderContainer>
                        <EnrolledCoursesCardContainer>
                            { inscricao && inscricao.map((curso) => <EnrolledCoursesCards completed={curso.finalizado != 0 ? false : true} title={curso.curso.nome} professor={curso.curso.professor.nome} progress={((curso.progresso * 100) / curso.curso.cargaHoraria)}/>)}
                            {/* {enrolledCoursesOptions.map((item,i) => <EnrolledCoursesCards index={i} completed={item.completed}/>)} */}
                        </EnrolledCoursesCardContainer>
                    </EnrolledCoursesViewContainer>
                </EnrolledCoursesContainer>
            </FirstColumn>
            <SecondColumn>
                <CalendarContainer>
                    <CalendarViewContainer>
                        <CalendarHeader>
                            <Title>
                                {currentMonth.toUpperCase()}
                            </Title>
                            <ButtonContainer>
                                <IconArrow src={LeftIcon}  onClick={handlePrevWeek}/>
                                <IconArrow src={RightIcon} onClick={handleNextWeek}/>
                            </ButtonContainer>
                        </CalendarHeader>
                        <BodyCalendar>
                            <DaysContainer>
                                {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'].map((day) => (
                                    <LabelDay>
                                        {day}
                                    </LabelDay>
                                ))}
                            </DaysContainer>
                            <DaysContainer>
                            {weekDates.map((date) => (
                                <LabelWeek background={new Date(date).getDate() === new Date().getDate() && new Date(date).getMonth() === new Date().getMonth() ? true : false}>
                                    {format(new Date(date), 'd',{locale: ptBR})}
                                </LabelWeek>
                                ))}
                            </DaysContainer>
                        </BodyCalendar>
                    </CalendarViewContainer>
                </CalendarContainer>
                <CalendarAlertContainer>
                    <CalendarAlertHeaderContainer>
                        <CalendarIconContainer>
                            <Icon src={School} tam="50px"/>
                            <Title>Lembrete</Title>
                        </CalendarIconContainer>
                        <DueDateContainer>
                            <DueDateLabel>Vencimento: </DueDateLabel>
                            <DateContainer>
                                <Icon src={Event} tam="20px"/>
                                <LabelDay>{format(new Date(), 'MMM d, yyyy',{locale: ptBR})}</LabelDay>
                            </DateContainer>
                        </DueDateContainer>
                    </CalendarAlertHeaderContainer> 
                    <BodyCalendarAlert>
                        <LabelAlert>
                            Desenvolvimento Backend - Trabalho Full Stack
                        </LabelAlert>
                    </BodyCalendarAlert>  
                </CalendarAlertContainer>
            </SecondColumn>
        </BodyContainer>
        
    </MainContainer>
  )
}

export default Cursos
