CREATE DATABASE opl;

USE opl;

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


CREATE TABLE `evento` (
  `idevento` int NOT NULL,
  `nome` varchar(45) DEFAULT NULL,
  `idprofessor` int DEFAULT NULL,
  PRIMARY KEY (`idevento`),
  KEY `idprofessor_idx` (`idprofessor`),
  CONSTRAINT `idprofessor_nova` FOREIGN KEY (`idprofessor`) REFERENCES `professor` (`idprofessor`)
);

CREATE TABLE `historico` (
  `idhistorico` int NOT NULL,
  `idinscricao` int DEFAULT NULL,
  `idconteudo` int DEFAULT NULL,
  PRIMARY KEY (`idhistorico`),
  KEY `insc_idx` (`idinscricao`),
  CONSTRAINT `insc` FOREIGN KEY (`idinscricao`) REFERENCES `inscricao` (`idinscricao`)
);

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

CREATE TABLE `notificacao` (
  `idnotificacao` int NOT NULL AUTO_INCREMENT,
  `idusuario` int DEFAULT NULL,
  `tittle` varchar(45) DEFAULT NULL,
  `body` varchar(45) DEFAULT NULL,
  `data` datetime(6) NOT NULL,
  PRIMARY KEY (`idnotificacao`),
  KEY `usuario_idx` (`idusuario`),
  CONSTRAINT `usuario` FOREIGN KEY (`idusuario`) REFERENCES `usuario` (`idusuario`)
);

CREATE TABLE professor (
  `idprofessor` int NOT NULL,
  `nome` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idprofessor`)
);

CREATE TABLE usuario (
  `idusuario` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) DEFAULT NULL,
  `sobrenome` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `senha` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idusuario`),
  UNIQUE KEY `email_UNIQUE` (`email`)
);


INSERT INTO professor (`idprofessor`, `nome`) VALUES (1, "Joao Paulo", 'Gustavo');

INSERT INTO curso (`idcurso`, `nome`,`tags`,`idprofessor`,`carga_horaria`) VALUES (1, "Desenvolvimento Web", 'react','1','40');
INSERT INTO curso (`idcurso`, `nome`,`tags`,`idprofessor`,`carga_horaria`) VALUES (2, "Desenvolvimento Mobile", 'Flutter','2','100');

INSERT INTO evento (`idevento`, `nome`,`idprofessor`) VALUES (1, "Plantão Framework Backend II",'1');
INSERT INTO evento (`idevento`, `nome`,`idprofessor`) VALUES (2, "Plantão Desenvolvimento Mobile",'2');
