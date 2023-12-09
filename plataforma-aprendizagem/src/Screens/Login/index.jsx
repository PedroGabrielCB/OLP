import { useContext, useState } from 'react';
import {
  MainContainer,
  LogoContainer,
  Logo,
  FieldContainer,
  ButtonContainer,
  Button,
  TextInput,
  LabelInput,
  RegisterLabel
} from './styles';
import Logo1 from '../../assets/Logo-Uni-Branca.png';

import axios from 'axios';

import { useNavigate } from 'react-router-dom';
import { UsuarioContext } from '../../Context/UsuarioContext';



function Login() {
  const navigate = useNavigate();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const { setRefresh,setAuth } = useContext(UsuarioContext)

  const signIn = () => {
    // Enviar credenciais para o servidor
    axios.post(`${import.meta.env.VITE_API}/rest/auth/login`, {
      email: login,
      password: password
    })
    .then((res) => {
      // Armazenar o objeto retornado no localStorage (ou sessionStorage)
      sessionStorage.setItem('user', JSON.stringify(res.data));
      
      setAuth(res.data);
      setRefresh(prev => !prev)
      navigate("/")

    })
    .catch((error) => {
      alert("Erro ao fazer login, tente novamente!")
      console.error('Erro durante o login:', error);
    });
  };

  return (
    <MainContainer>
      <LogoContainer>
        <Logo src={Logo1} />
      </LogoContainer>
      <FieldContainer>
        <div style={{display: "flex",flexDirection:"column",height: 80,width: 290}}>
          <LabelInput>Login</LabelInput>
          <TextInput type="text" onChange={(e) => setLogin(e.target.value)}/>
        </div>
        <div style={{display: "flex",flexDirection:"column",height: 80,width: 290}}>
          <LabelInput>Senha</LabelInput>
          <TextInput type="password"  onChange={(e) => setPassword(e.target.value)}/>
        </div>
      </FieldContainer>
      <ButtonContainer>
        <Button onClick={() => signIn()}>
          ENTRAR
        </Button>
        <div style={{width: "100%", display: "flex",justifyContent:"center",cursor: 'pointer',marginTop: 10}} onClick={() => navigate("/registrar")}>
          <RegisterLabel>Não tem Login?</RegisterLabel>
        </div>
      </ButtonContainer>
    </MainContainer>
  );
}

export default Login;
