import React, { useContext, useEffect, useState } from 'react';
import Header from "../../components/Header"

import { 
  MainContainer,
  HeaderContainer,
  MenuOptions,
  HeaderMenuContainer,
  LabelHeader,
  Icon,
  BodyMenuContainer,
  LabelMenu,
  MenuContainer,
  CardContainer,
  BodyContainer,
  PageContainer,
  TitleContainer,
  TitleLabel,
  ButtonCourse
} from "./styles"

import arrowBack from "../../assets/arrow_back_icon.svg"
import CourseDetailsCard from '../../components/CourseDetailsCard';
import axios from 'axios';
import ReactMarkdown from 'react-markdown'
import "./index.css"
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { UsuarioContext } from '../../Context/UsuarioContext';

function CourseDetails() {
  const navigate = useNavigate();

  const [data,setData] = useState()
  const [details,setDetails] = useState([])
  const [header,setHeader] = useState(null)

  const [index,setIndex] = useState(0)

  const [obj,setobj] = useState({})

  const { idcurso } = useParams();

  const { inscricao,auth,setRefresh } = useContext(UsuarioContext)
 
  const [cursoData,setCursoData] = useState()

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API}/conteudo/${idcurso}/${auth.id}`, {
      headers: { 'Authorization': `Bearer ${auth.token}` }
    }).then((res) => setDetails(res.data))

    axios.get(`${import.meta.env.VITE_API}/inscricoes/${auth.id}`, {
      headers: { 'Authorization': `Bearer ${auth.token}` }
    }).then((res) => setCursoData(res.data))

  },[])


  console.log(cursoData)
  const renderers = {
    //This custom renderer changes how images are rendered
    //we use it to constrain the max width of an image to its container
    image: ({
        alt,
        src,
        title,
    }) => (
        <img 
            alt={alt} 
            src={src} 
            title={title} 
            style={{ maxWidth: 475 }}  />
    ),
};

  
  return (
    <MainContainer>
      <MenuOptions>
          <HeaderMenuContainer onClick={() => navigate("/catalogo_cursos")}>
              <Icon src={arrowBack} tam="24px"/>
              <LabelHeader>Voltar</LabelHeader>
          </HeaderMenuContainer>
          <BodyMenuContainer>
            <MenuContainer>
               <LabelMenu>SLIDES</LabelMenu>
            </MenuContainer>
            <CardContainer>
              {details.map((item,i) => <CourseDetailsCard setobj={setobj} tempo={item.tempo} title={item.titulo} setHeader={setHeader} setData={setData} mark={item.body} setIndex={setIndex} i={i} active={item.concluido == 0 ? index == i ? true : false : true}/>)}
            </CardContainer>
          </BodyMenuContainer>
      </MenuOptions>
      <BodyContainer>
        <HeaderContainer>
              <Header label={details[index] ? details[index].titulo : ""}/>
        </HeaderContainer>
        <PageContainer>
            <ReactMarkdown className="markdown-container" components={renderers}>{details[index] ? details[index].body : null}</ReactMarkdown>
            {index != null && 
              <ButtonCourse onClick={() => {
                setIndex(prev => prev + 1)
                setHeader(details[index] ? details[index].titulo : null)
                console.log(cursoData.filter((item) => item.curso.id == idcurso)[0])
                if(details[index + 1]){
                  if(details[index].concluido == 0){
                    axios.put(`${import.meta.env.VITE_API}/inscricoes/${inscricao.filter((item) => item.curso.id == idcurso)[0].id}`,{
                      progresso: details[index] ? details[index].tempo : 0
                    },{
                      headers: { 'Authorization': `Bearer ${auth.token}` }
                    }).then(() => {
                      axios.put(`${import.meta.env.VITE_API}/conteudo/${details[index].idconteudo}`,{
                         concluido: 1
                      }, {
                        headers: { 'Authorization': `Bearer ${auth.token}` }
                      }).then(() => setRefresh(prev => !prev))
                    })
                  }else{
                    if(!details[index + 1]){
                      navigate("/catalogo_cursos")
                      setRefresh(prev => !prev);
                    }

                  }
                }else{
                 
                  if(cursoData.filter((item) => item.curso.id == idcurso)[0].progresso < cursoData.filter((item) => item.curso.id == idcurso)[0].curso.cargaHoraria){
                      axios.put(`${import.meta.env.VITE_API}/inscricoes/finalizar/${inscricao.filter((item) => item.curso.id == idcurso)[0].id}`,{
                        finalizado: 1
                      }, {
                        headers: { 'Authorization': `Bearer ${auth.token}` }
                      }).then(() => {
                        axios.put(`${import.meta.env.VITE_API}/inscricoes/${inscricao.filter((item) => item.curso.id == idcurso)[0].id}`,{
                          progresso: details[index] ? details[index].tempo : 0
                        }, {
                          headers: { 'Authorization': `Bearer ${auth.token}` }
                        }).then(() => {
                          axios.put(`${import.meta.env.VITE_API}/conteudo/${details[index].idconteudo}`,{
                            concluido: 1
                          },{
                            headers: { 'Authorization': `Bearer ${auth.token}` }
                          }).then(() => {
                            navigate("/catalogo_cursos");
                            setRefresh(prev => !prev);
                          })
                        })
                      })
                  }else{
                    navigate("/catalogo_cursos");
                    setRefresh(prev => !prev);
                  }
                }
              }}>
                  {details[index + 1]  ? "Próximo" : "Finalizar"}
              </ButtonCourse>
            }
        </PageContainer>
      </BodyContainer>
    </MainContainer>
  )
}

export default CourseDetails
