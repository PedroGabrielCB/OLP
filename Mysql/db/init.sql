-- Criação do Banco de Dados
CREATE DATABASE opl;

-- Uso do Banco de Dados
USE opl;

-- Criação da Tabela usuario
CREATE TABLE usuario (
  `idusuario` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) DEFAULT NULL,
  `sobrenome` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `senha` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idusuario`),
  UNIQUE KEY `email_UNIQUE` (`email`)
);

-- Criação da Tabela professor
CREATE TABLE professor (
  `idprofessor` int NOT NULL,
  `nome` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idprofessor`)
);

-- Inserção de dados na tabela professor
INSERT INTO professor (`idprofessor`, `nome`) VALUES (1, 'Joao Paulo');
INSERT INTO professor (`idprofessor`, `nome`) VALUES (2, 'Gustavo');
-- Adicione mais dados conforme necessário...

-- Criação da Tabela curso
CREATE TABLE `curso` (
  `idcurso` int NOT NULL,
  `nome` varchar(45) DEFAULT NULL,
  `tags` varchar(45) DEFAULT NULL,
  `idprofessor` int DEFAULT NULL,
  `carga_horaria` int DEFAULT NULL,
  PRIMARY KEY (`idcurso`),
  KEY `idprofessor_idx` (`idprofessor`),
  CONSTRAINT `idprofessor` FOREIGN KEY (`idprofessor`) REFERENCES `professor` (`idprofessor`)
);

-- Inserção de dados na tabela curso
INSERT INTO curso (`idcurso`, `nome`,`tags`,`idprofessor`,`carga_horaria`) VALUES (1, 'Desenvolvimento Web', 'react', 1, 40);
INSERT INTO curso (`idcurso`, `nome`,`tags`,`idprofessor`,`carga_horaria`) VALUES (2, 'Desenvolvimento Mobile', 'Flutter', 2, 100);
-- Adicione mais dados conforme necessário...

-- Criação da Tabela evento
CREATE TABLE `evento` (
  `idevento` int NOT NULL,
  `nome` varchar(45) DEFAULT NULL,
  `idprofessor` int DEFAULT NULL,
  PRIMARY KEY (`idevento`),
  KEY `idprofessor_idx` (`idprofessor`),
  CONSTRAINT `idprofessor_nova` FOREIGN KEY (`idprofessor`) REFERENCES `professor` (`idprofessor`)
);

-- Inserção de dados na tabela evento
INSERT INTO evento (`idevento`, `nome`,`idprofessor`) VALUES (1, 'Plantão Framework Backend II', 1);
INSERT INTO evento (`idevento`, `nome`,`idprofessor`) VALUES (2, 'Plantão Desenvolvimento Mobile', 2);
-- Adicione mais dados conforme necessário...

-- Criação da Tabela inscricao
CREATE TABLE `inscricao` (
  `idinscricao` int NOT NULL AUTO_INCREMENT,
  `idcurso` int DEFAULT NULL,
  `idusuario` int DEFAULT NULL,
  `progresso` int DEFAULT NULL,
  `finalizado` int DEFAULT NULL,
  PRIMARY KEY (`idinscricao`),
  KEY `idcurso_idx` (`idcurso`),
  KEY `idusuario_idx` (`idusuario`),
  CONSTRAINT `idcurso` FOREIGN KEY (`idcurso`) REFERENCES `curso` (`idcurso`),
  CONSTRAINT `idusuario` FOREIGN KEY (`idusuario`) REFERENCES `usuario` (`idusuario`)
);

-- Inserção de dados na tabela inscricao
-- Certifique-se de que as referências em idcurso e idusuario existem na tabela curso e usuario, respectivamente.
INSERT INTO inscricao (`idcurso`, `idusuario`, `progresso`, `finalizado`) VALUES (1, 1, 50, 0);
-- Adicione mais dados conforme necessário...

-- Criação da Tabela conteudo
CREATE TABLE conteudo (
  `idconteudo` int NOT NULL AUTO_INCREMENT,
  `idcurso` int DEFAULT NULL,
  `titulo` varchar(45) DEFAULT NULL,
  `body` longtext,
  `concluido` int DEFAULT NULL,
  `idusuario` int DEFAULT NULL,
  `tempo` int DEFAULT NULL,
  PRIMARY KEY (`idconteudo`),
  KEY `curso_idx` (`idcurso`),
  KEY `user_idx` (`idusuario`),
  CONSTRAINT `curso` FOREIGN KEY (`idcurso`) REFERENCES `curso` (`idcurso`),
  CONSTRAINT `user` FOREIGN KEY (`idusuario`) REFERENCES `usuario` (`idusuario`)
);

-- Inserção de dados na tabela conteudo
-- Certifique-se de que as referências em idcurso e idusuario existem na tabela curso e usuario, respectivamente.
INSERT INTO conteudo (`idcurso`, `titulo`, `body`, `concluido`, `idusuario`, `tempo`) VALUES (1, 'Conteudo 1', 'Corpo do Conteudo 1', 1, 1, 60);
-- Adicione mais dados conforme necessário...

-- Criação da Tabela historico
CREATE TABLE `historico` (
  `idhistorico` int NOT NULL,
  `idinscricao` int DEFAULT NULL,
  `idconteudo` int DEFAULT NULL,
  PRIMARY KEY (`idhistorico`),
  KEY `insc_idx` (`idinscricao`),
  CONSTRAINT `insc` FOREIGN KEY (`idinscricao`) REFERENCES `inscricao` (`idinscricao`)
);

-- Inserção de dados na tabela historico
-- Certifique-se de que as referências em idinscricao e idconteudo existem na tabela inscricao e conteudo, respectivamente
