import './App.css'
import React, { useEffect, useState } from 'react';
import { MainContainer,AppContainer,LogoContainer,Logo,FieldContainer,ButtonContainer,Button} from "./styles"
import LogoSVG from "./assets/Logo.svg"
import FieldDefault from './components/fieldDefault';
import { Route, Routes } from 'react-router-dom';
import Login from './Screens/Login';
import Home from './Screens/Home';
import Drawer from './components/Drawer';
import Cursos from './Screens/Cursos/index.';
import CourseCatalog from './Screens/CourseCatalog';
import CourseDetails from './Screens/CourseDetails';

import { UsuarioContext } from "../src/Context/UsuarioContext"
import axios from 'axios';
import { PrivateRoute } from './middleware/PrivateRoute';
import Registrar from './Screens/Registrar';

function App() {

  const [inscricao,setInscricao] = useState([])
  const [eventos,setEventos] = useState([])
  const [notificacao,setNotificacao] = useState([])
  const [curso,setCurso] = useState([])

  const [refresh,setRefresh] = useState(true)

  const [render,setRender] = useState(false)
  const [auth,setAuth] = useState(JSON.parse(sessionStorage.getItem('user')))

  useEffect(() => {

    if(auth){
        axios.get(`${import.meta.env.VITE_API}/inscricoes/${auth.id}`, {
          headers: { 'Authorization': `Bearer ${auth.token}` }
        })
        .then(res => setInscricao(res.data))
        .catch(error => {
          // Lida com erros na solicitação
          console.error('Erro na solicitação:', error);
        });
    
        axios.get(`${import.meta.env.VITE_API}/eventos/`, {
          headers: { 'Authorization': `Bearer ${auth.token}` }
        }).then(res => setEventos(res.data))
    
        axios.get(`${import.meta.env.VITE_API}/notificacoes/${auth.id}`,{
          headers: { 'Authorization': `Bearer ${auth.token}` }
        }).then(res => setNotificacao(res.data))
      
        axios.get(`${import.meta.env.VITE_API}/cursos/`,{
          headers: { 'Authorization': `Bearer ${auth.token}` }
        }).then(res => setCurso(res.data))

    }
    // Certifique-se de passar apenas um objeto de configuração

  }, []);

  useEffect(() => {

    if(auth){
      // Certifique-se de passar apenas um objeto de configuração
      axios.get(`${import.meta.env.VITE_API}/inscricoes/${auth.id}`, {
        headers: { 'Authorization': `Bearer ${auth.token}` }
      })
      .then(res => setInscricao(res.data))
      .catch(error => {
        // Lida com erros na solicitação
        console.error('Erro na solicitação:', error);
      });
  
      axios.get(`${import.meta.env.VITE_API}/eventos/`, {
        headers: { 'Authorization': `Bearer ${auth.token}` }
      }).then(res => setEventos(res.data))
  
      axios.get(`${import.meta.env.VITE_API}/notificacoes/${auth.id}`,{
        headers: { 'Authorization': `Bearer ${auth.token}` }
      }).then(res => setNotificacao(res.data))
    
      axios.get(`${import.meta.env.VITE_API}/cursos/`,{
        headers: { 'Authorization': `Bearer ${auth.token}` }
      }).then(res => setCurso(res.data))
  
      if(sessionStorage.getItem('user') !== null) {
        setRender(true);
      }

    }
  }, [refresh]);


  return (
    <MainContainer>
    <UsuarioContext.Provider value={{ inscricao, eventos, notificacao, curso, setCurso, setRefresh,setAuth,auth }}>
      <AppContainer>
        {sessionStorage.getItem('user') !== null && <Drawer />}
      
        <Routes>
          {/* Use o PrivateRoute para proteger as rotas */}
          <Route
            path="/"
            element={<PrivateRoute element={<Home />} />}
          />
          <Route
            path="/cursos"
            element={<PrivateRoute element={<Cursos />} />}
          />
          <Route
            path="/catalogo_cursos"
            element={<PrivateRoute element={<CourseCatalog />} />}
          />
          <Route
            path="/cursos/details/:idcurso"
            element={<PrivateRoute element={<CourseDetails />} />}
          />
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/registrar"
            element={<Registrar />}
          />
        </Routes>
      </AppContainer>
    </UsuarioContext.Provider>
  </MainContainer>
  )
}

export default App
