import React, { useContext, useEffect, useState } from 'react';
import Header from "../../components/Header"

import { 
  MainContainer,
  HeaderContainer,
  BodyContainer,
  TagsContainer,
  Tag,
  LabelTag,
  CourseCardContainer ,
  CourseCard,
  BannerContainer,
  InfoContainer,
  CourseLabelName,
  CourseLabelContainer,
  CourseDetailsContainer,
  ProfContainer,
  Icon,
  IconUni,
  LabelProf,
  LabelLessons,
  ButtonCourse
} from "./styles"
import CourseIcon from "../../assets/CourseIconDrawer.svg"
import iconHost from "../../assets/iconHost.svg"
import Logo from "../../assets/Logo-Uni-Branca.png"
import { UsuarioContext } from '../../Context/UsuarioContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

function CourseCatalog() {
  const navigate = useNavigate();
  const { inscricao,auth,notificacao,curso,setCurso,setRefresh } = useContext(UsuarioContext)

  const unique = [...new Set(curso.map(item => item.tags))]

  const [active,setActive] = useState(false)
  const [index,setIndex] = useState()

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API}/cursos/`,{
        headers: { 'Authorization': `Bearer ${auth.token}` }
      }).then(res => setCurso(res.data))
  },[])

const searchCourse = (tag,i) => {
    setIndex(i)
    if(active){
        axios.get(`${import.meta.env.VITE_API}/cursos/tags/${tag}`,{
            headers: { 'Authorization': `Bearer ${auth.token}` }
          }).then(res => setCurso(res.data))
    }else{
        axios.get(`${import.meta.env.VITE_API}/cursos/`,{
            headers: { 'Authorization': `Bearer ${auth.token}` }
          }).then(res => setCurso(res.data))
        setIndex()
    }
    setActive(prev => !prev)
}
  return (
    <MainContainer>
        <HeaderContainer>
            <Header label="Catálogo de Cursos"/>
        </HeaderContainer>
        <BodyContainer>
            <TagsContainer>
                {unique.map((item,i) => (
                    <Tag actived={i == index ? true : false} onClick={() => searchCourse(item,i)}>
                        <LabelTag>{item}</LabelTag>
                    </Tag>
                ))}

            </TagsContainer>
            <CourseCardContainer>
                {curso.map((item) => (
                    <CourseCard onClick={() => inscricao.some((e) => e.curso.id == item.id) ? navigate(`/cursos/details/${item.id}`) : (
                        Swal.fire({
                            title: "Você tem certeza que quer se matricular?",
                            icon: "question",
                            showCancelButton: true,
                            confirmButtonColor: "#3085d6",
                            cancelButtonColor: "#d33",
                            cancelButtonText: "Não",
                            confirmButtonText: "Sim!"
                          }).then((result) => {
                            if (result.isConfirmed) {
                              axios.post(`${import.meta.env.VITE_API}/inscricoes`,{
                                idCurso: item.id,
                                idUsuario: auth.id,
                                progresso: 0,
                                finalizado: 0
                              },{
                                headers: { 'Authorization': `Bearer ${auth.token}` }
                              }).then(() => setRefresh(prev => !prev))
                            }
                          })  
                    )
                    
                    }>
                        <BannerContainer>
                            <IconUni src={Logo} tam="170px"/>
                        </BannerContainer>
                        <InfoContainer>
                        <CourseLabelContainer>
                            <CourseLabelName>{item.nome}</CourseLabelName>
                            {inscricao.some((e) => e.curso.id === item.id) ? null: (                            
                                <ButtonCourse onClick={() => navigate("/catalogo_cursos")}>
                                    <Icon src={CourseIcon} tam="25px"/>
                                    Matricular
                                </ButtonCourse>)}
                        </CourseLabelContainer>
                        <CourseDetailsContainer>
                            <ProfContainer>
                                <Icon src={iconHost} tam="20px"/>
                                <LabelProf>{item.professor.nome}</LabelProf>
                            </ProfContainer>
                            <LabelLessons>{item.cargaHoraria} minutos</LabelLessons>
                        </CourseDetailsContainer>
                        </InfoContainer>
                    </CourseCard>

                ))}

                
            </CourseCardContainer>
        </BodyContainer>
    </MainContainer>
  )
}

export default CourseCatalog
