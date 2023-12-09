import { useContext, useState } from 'react';
import {
  MainContainer,
  LogoContainer,
  Logo,
  FieldContainer,
  ButtonContainer,
  Button,
  TextInput,
  LabelInput
} from './styles';
import Logo1 from '../../assets/Logo-Uni-Branca.png';
import FieldDefault from '../../components/fieldDefault';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';
import { UsuarioContext } from '../../Context/UsuarioContext';

function Registrar() {
  const navigate = useNavigate();

  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = () => {
    // Enviar credenciais para o servidor
    axios.post(`${import.meta.env.VITE_API}/usuario/salvar`, {
      nome: nome,
      sobrenome: sobrenome,
      email: email,
      senha: password
    })
    .then(() => {
      axios.post(`${import.meta.env.VITE_API}/notificacoes`,{
        tittle: nome + " Entrou para Plataforma!",
        body: "Deseje boas vindas o(a) " + nome,
        data: new Date()
      }).then(() => navigate("/login"))
      
    })
    .catch((error) => {
      // Lidar com erros, como exibir uma mensagem de erro para o usuário
      alert("Erro ao se registrar, tente novamente!")
      console.error('Erro durante o registro:', error);
    });
  };

  return (
    <MainContainer>
      <LogoContainer>
        <Logo src={Logo1} />
      </LogoContainer>
      <FieldContainer>
        <div style={{display: "flex",flexDirection:"column",height: 80,width: 290}}>
          <LabelInput>Informe seu Nome</LabelInput>
          <TextInput type="text" onChange={(e) => setNome(e.target.value)}/>
        </div>
        <div style={{display: "flex",flexDirection:"column",height: 80,width: 290}}>
          <LabelInput>Informe seu Sobrenome</LabelInput>
          <TextInput type="text" onChange={(e) => setSobrenome(e.target.value)}/>
        </div>
        <div style={{display: "flex",flexDirection:"column",height: 80,width: 290}}>
          <LabelInput>Informe seu Email</LabelInput>
          <TextInput type="text" onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div style={{display: "flex",flexDirection:"column",height: 80,width: 290}}>
          <LabelInput>Informe uma Senha</LabelInput>
          <TextInput type="password"  onChange={(e) => setPassword(e.target.value)}/>
        </div>
      </FieldContainer>
      <ButtonContainer>
        <Button onClick={() => signIn()}>
          Registrar
        </Button>
      </ButtonContainer>
    </MainContainer>
  );
}

export default Registrar;
