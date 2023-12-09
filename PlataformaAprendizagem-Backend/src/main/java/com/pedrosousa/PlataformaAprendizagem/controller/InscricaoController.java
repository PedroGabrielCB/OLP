package com.pedrosousa.PlataformaAprendizagem.controller;

import com.pedrosousa.PlataformaAprendizagem.model.*;
import com.pedrosousa.PlataformaAprendizagem.repository.ConteudoRepository;
import com.pedrosousa.PlataformaAprendizagem.repository.CursoRepository;
import com.pedrosousa.PlataformaAprendizagem.repository.InscricaoRepository;
import com.pedrosousa.PlataformaAprendizagem.repository.ProfessorRepository;
import com.pedrosousa.PlataformaAprendizagem.repository.UsuarioRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.NoSuchElementException;
import java.util.Optional.*;

@RestController
@RequestMapping("/inscricoes")
public class InscricaoController {

    private final InscricaoRepository inscricaoRepository;
    private final CursoRepository cursoRepository;
    private final ProfessorRepository professorRepository;
    private final ConteudoRepository conteudoRepository;
    private final UsuarioRepository usuarioRepository;

    public InscricaoController(InscricaoRepository inscricaoRepository,CursoRepository cursoRepository,ProfessorRepository professorRepository, UsuarioRepository usuarioRepository,ConteudoRepository conteudoRepository){
        this.inscricaoRepository = inscricaoRepository;
        this.cursoRepository = cursoRepository;
        this.professorRepository = professorRepository;
        this.usuarioRepository = usuarioRepository;
        this.conteudoRepository = conteudoRepository;
    }

    @GetMapping("/{idusuario}")
    public List<Inscricao> getInscricaoByUsuario(@PathVariable Integer idusuario){
        return inscricaoRepository.findInscricaoByUsuario(idusuario);
    }

    @PostMapping
    public ResponseEntity<?> criarInscricao(@RequestBody Map<String, Object> requestBody) {
        System.out.println("Recebendo requisição com o seguinte JSON: " + requestBody);

        // Extrair campos do corpo da solicitação
        Integer idCurso = (Integer) requestBody.get("idCurso");
        Integer idUsuario = (Integer) requestBody.get("idUsuario");
        Integer progresso = (Integer) requestBody.get("progresso");
        Integer finalizado = (Integer) requestBody.get("finalizado");

        // Validar se os IDs do curso e do usuário não são nulos
        if (idCurso == null || idUsuario == null) {
            return ResponseEntity.badRequest().body("Os IDs do curso e do usuário não podem ser nulos.");
        }

        // Buscar o curso e o usuário no banco de dados
        Curso curso = cursoRepository.findById(Long.valueOf(idCurso))
                .orElseThrow(() -> new NoSuchElementException("Curso não encontrado com o ID: " + idCurso));

        Usuario usuario = usuarioRepository.findById(Long.valueOf(idUsuario))
                .orElseThrow(() -> new NoSuchElementException("Usuário não encontrado com o ID: " + idUsuario));

        // Criar uma nova instância de Inscricao
        Inscricao novaInscricao = new Inscricao();
        novaInscricao.setCurso(curso);
        novaInscricao.setUsuario(usuario);
        novaInscricao.setProgresso(progresso);
        novaInscricao.setFinalizado(finalizado);

        // Salvar a nova inscrição no banco de dados
        Inscricao inscricaoSalva = inscricaoRepository.save(novaInscricao);

        // Agora, criaremos uma instância de Conteudo
        if(curso.getId() == 1) {
            Conteudo novoConteudo = new Conteudo();
            novoConteudo.setTitulo("O que é React?"); // Substitua pelo título desejado
            novoConteudo.setBody("# Introdução ao React\n\n"
                    + "![React Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png)\n\n"
                    + "## Principais Conceitos\n\n"
                    + "### 1. **Componentes**\n\n"
                    + "No React, os aplicativos são construídos a partir de componentes. Um componente é uma parte reutilizável e isolada da interface do usuário. Pode ser uma simples caixa de texto ou até mesmo uma barra de navegação completa.\n\n"
                    + "Exemplo de um componente React simples:\n\n"
                    + "```jsx\n"
                    + "import React from \"react\";\n\n"
                    + "const Welcome = (props) => {\n"
                    + "  return <h1>Hello, {props.name}</h1>;\n"
                    + "};\n"
                    + "```\n\n"
                    + "### 2. **Estado (State)**\n\n"
                    + "O estado em React é uma representação única e imutável dos dados da aplicação em um determinado momento. Quando o estado de um componente muda, o React automaticamente re-renderiza o componente.\n\n"
                    + "Exemplo de componente com estado:\n\n"
                    + "```jsx\n"
                    + "import React, { useState } from \"react\";\n\n"
                    + "const Counter = () => {\n"
                    + "  const [count, setCount] = useState(0);\n\n"
                    + "  return (\n"
                    + "    <div>\n"
                    + "      <p>Count: {count}</p>\n"
                    + "      <button onClick={() => setCount(count + 1)}>Increment</button>\n"
                    + "    </div>\n"
                    + "  );\n"
                    + "};\n"
                    + "```\n\n"
                    + "### 3. **Props (Propriedades)**\n\n"
                    + "As props são atributos que um componente pai passa para um componente filho. Elas são usadas para transmitir dados de um componente para outro.\n\n"
                    + "Exemplo de componente com props:\n\n"
                    + "```jsx\n"
                    + "import React from \"react\";\n\n"
                    + "const Greet = (props) => {\n"
                    + "  return <p>Hello, {props.name}!</p>;\n"
                    + "};\n\n"
                    + "const App = () => {\n"
                    + "  return <Greet name=\"John\" />;\n"
                    + "};\n"
                    + "```\n\n"
                    + "## Por que usar React?\n\n"
                    + "1. **Reatividade Eficiente**: O React utiliza uma abordagem chamada \"Virtual DOM\" para otimizar as atualizações de interface, tornando as aplicações mais rápidas e eficientes.\n\n"
                    + "2. **Comunidade Ativa**: React tem uma grande comunidade de desenvolvedores e é amplamente adotado, o que significa que há muitos recursos e suporte disponíveis.\n\n"
                    + "3. **Reutilização de Componentes**: A arquitetura baseada em componentes do React facilita a reutilização de código, economizando tempo e esforço no desenvolvimento.\n\n"
                    + "Em resumo, React é uma poderosa biblioteca que simplifica o desenvolvimento de interfaces de usuário, promovendo a modularidade e eficiência no processo. Se você está começando a explorar o desenvolvimento web moderno, React é uma escolha excelente para aprender.");
            novoConteudo.setConcluido(0);
            novoConteudo.setTempo(20);
            novoConteudo.setCurso(curso);
            novoConteudo.setUsuario(usuario);
            Conteudo conteudoSalvo = conteudoRepository.save(novoConteudo);

            Conteudo novoConteudo1 = new Conteudo();
            novoConteudo1.setTitulo("States do React");
            novoConteudo1.setBody("# Estados em React\n\n"
                    + "Em React, o conceito de estado (state) desempenha um papel fundamental no desenvolvimento de interfaces de usuário dinâmicas e reativas. O estado permite que os componentes reajam a eventos e atualizem dinamicamente a interface de acordo com as mudanças nos dados.\n\n"
                    + "## O que é Estado?\n\n"
                    + "O estado em React é um objeto JavaScript que representa as propriedades que um componente pode controlar. Ele reflete a condição de um componente em um determinado momento e é utilizado para renderizar a interface de forma dinâmica.\n\n"
                    + "## Usando o Hook `useState`\n\n"
                    + "O Hook `useState` é uma função incorporada do React que permite que componentes funcionais tenham estado. Ele retorna um par de valores: o estado atual e uma função que permite atualizar esse estado.\n\n"
                    + "Exemplo de uso do `useState`:\n\n"
                    + "```jsx\n"
                    + "import React, { useState } from \"react\";\n\n"
                    + "const Counter = () => {\n"
                    + "  const [count, setCount] = useState(0);\n\n"
                    + "  return (\n"
                    + "    <div>\n"
                    + "      <p>Contagem: {count}</p>\n"
                    + "      <button onClick={() => setCount(count + 1)}>Incrementar</button>\n"
                    + "    </div>\n"
                    + "  );\n"
                    + "};\n"
                    + "```\n\n"
                    + "Neste exemplo, `count` é o estado e `setCount` é a função que atualiza o estado. Quando o botão é clicado, o estado é incrementado e a interface é re-renderizada.\n\n"
                    + "## Atualizando o Estado de Forma Assíncrona\n\n"
                    + "O React pode agrupar múltiplas atualizações de estado e processá-las de forma assíncrona para melhorar o desempenho. Portanto, ao usar o `setCount`, é possível receber um callback opcional para garantir que você esteja atualizando o estado com base no estado anterior.\n\n"
                    + "Exemplo:\n\n"
                    + "```jsx\n"
                    + "import React, { useState } from \"react\";\n\n"
                    + "const Counter = () => {\n"
                    + "  const [count, setCount] = useState(0);\n\n"
                    + "  const increment = () => {\n"
                    + "    setCount((prevCount) => prevCount + 1);\n"
                    + "    // Outras operações com base no estado anterior...\n"
                    + "  };\n\n"
                    + "  return (\n"
                    + "    <div>\n"
                    + "      <p>Contagem: {count}</p>\n"
                    + "      <button onClick={increment}>Incrementar</button>\n"
                    + "    </div>\n"
                    + "  );\n"
                    + "};\n"
                    + "```\n\n"
                    + "## Quando Usar o Estado em React?\n\n"
                    + "O estado é particularmente útil quando:\n\n"
                    + "- As mudanças na interface de usuário dependem de interações do usuário ou eventos assíncronos.\n"
                    + "- Dados precisam ser mantidos e manipulados durante o ciclo de vida do componente.\n\n"
                    + "Lembre-se de que o estado em React deve ser tratado com cuidado para evitar problemas de performance e renderizações desnecessárias.\n\n"
                    + "Em resumo, o uso eficaz do estado em React permite criar interfaces dinâmicas e reativas, proporcionando uma experiência de usuário mais envolvente.");

            novoConteudo1.setConcluido(0);
            novoConteudo1.setTempo(20);
            novoConteudo1.setCurso(curso);
            novoConteudo1.setUsuario(usuario);

            Conteudo conteudoSalvo1 = conteudoRepository.save(novoConteudo1);
        }else if(curso.getId() == 2){
            Conteudo novoConteudo = new Conteudo();
            novoConteudo.setTitulo("Introdução ao Flutter"); // Substitua pelo título desejado
            novoConteudo.setBody("# Introdução ao Flutter\n\n" +
                    "![Flutter Logo](https://flutter.dev/assets/homepage/carousel/animated-stickers-demo.webp)\n\n" +
                    "O **Flutter** é um framework de desenvolvimento de aplicativos móveis criado pelo Google. Ele permite que desenvolvedores criem aplicativos nativos para Android e iOS a partir de um único código-base, proporcionando uma experiência de desenvolvimento rápida e eficiente.\n\n" +
                    "## Principais Características\n\n" +
                    "### 1. **Widgets Personalizáveis**\n\n" +
                    "O Flutter utiliza uma abordagem baseada em widgets para construir interfaces de usuário. Widgets são os blocos de construção fundamentais de um aplicativo Flutter e podem ser personalizados de acordo com as necessidades do desenvolvedor.\n\n" +
                    "Exemplo de um widget simples:\n\n```dart\n" +
                    "import 'package:flutter/material.dart';\n\n" +
                    "void main() {\n" +
                    "  runApp(\n" +
                    "    MaterialApp(\n" +
                    "      home: Scaffold(\n" +
                    "        appBar: AppBar(\n" +
                    "          title: Text('Meu App Flutter'),\n" +
                    "        ),\n" +
                    "        body: Center(\n" +
                    "          child: Text('Olá, Flutter!'),\n" +
                    "        ),\n" +
                    "      ),\n" +
                    "    ),\n" +
                    "  );\n" +
                    "}\n" +
                    "```\n\n" +
                    "### 2. **Hot Reload**\n\n" +
                    "O Flutter possui uma poderosa funcionalidade chamada *Hot Reload*, que permite aos desenvolvedores visualizar as alterações em tempo real. Isso acelera significativamente o processo de desenvolvimento, pois as modificações são refletidas instantaneamente no aplicativo em execução.\n\n" +
                    "### 3. **Suporte Nativo**\n\n" +
                    "Os aplicativos Flutter são compilados para código nativo, proporcionando desempenho comparável aos aplicativos desenvolvidos nativamente. Isso garante uma experiência de usuário suave e responsiva.\n\n" +
                    "## Exemplo de Aplicativo Flutter\n\n" +
                    "Aqui está um exemplo básico de um aplicativo Flutter que exibe uma tela com um botão:\n\n```dart\n" +
                    "import 'package:flutter/material.dart';\n\n" +
                    "void main() {\n" +
                    "  runApp(MyApp());\n" +
                    "}\n" +
                    "\n" +
                    "class MyApp extends StatelessWidget {\n" +
                    "  @override\n" +
                    "  Widget build(BuildContext context) {\n" +
                    "    return MaterialApp(\n" +
                    "      home: Scaffold(\n" +
                    "        appBar: AppBar(\n" +
                    "          title: Text('Exemplo Flutter'),\n" +
                    "        ),\n" +
                    "        body: Center(\n" +
                    "          child: ElevatedButton(\n" +
                    "            onPressed: () {\n" +
                    "              print('Botão pressionado!');\n" +
                    "            },\n" +
                    "            child: Text('Clique Aqui'),\n" +
                    "          ),\n" +
                    "        ),\n" +
                    "      ),\n" +
                    "    );\n" +
                    "  }\n" +
                    "}\n" +
                    "```\n\n" +
                    "## Por que usar Flutter?\n\n" +
                    "1. **Desenvolvimento Rápido**: O Flutter permite que você crie aplicativos de alta qualidade em menos tempo, graças ao *Hot Reload*.\n\n" +
                    "2. **Consistência Visual**: A abordagem baseada em widgets facilita a criação de interfaces consistentes em diferentes plataformas.\n\n" +
                    "3. **Comunidade Ativa**: Flutter possui uma comunidade ativa e crescente, com ampla documentação e suporte.\n\n" +
                    "4. **Compatibilidade Nativa**: A compilação para código nativo garante desempenho e compatibilidade total com as características das plataformas Android e iOS.\n\n" +
                    "Em resumo, Flutter é uma escolha poderosa para desenvolvimento de aplicativos móveis, proporcionando eficiência, consistência visual e desempenho nativo.");
            novoConteudo.setConcluido(0);
            novoConteudo.setTempo(33);
            novoConteudo.setCurso(curso);
            novoConteudo.setUsuario(usuario);
            Conteudo conteudoSalvo = conteudoRepository.save(novoConteudo);

            Conteudo novoConteudo1 = new Conteudo();
            novoConteudo1.setTitulo("StatefulWidget");
            novoConteudo1.setBody("# StatefulWidget e State\n\n" +
                    "Em Flutter, `StatefulWidget` é um widget que pode ser reconstruído ao longo do tempo em resposta a alterações em seu estado interno. Cada `StatefulWidget` possui um objeto associado chamado `State`, que contém o estado mutável do widget.\n\n" +
                    "## Como Funciona\n\n" +
                    "1. **StatefulWidget**: Representa a parte imutável do widget e define a estrutura do widget.\n\n" +
                    "   ```dart\n" +
                    "   class MyWidget extends StatefulWidget {\n" +
                    "     @override\n" +
                    "     _MyWidgetState createState() => _MyWidgetState();\n" +
                    "   }\n" +
                    "   ```\n\n" +
                    "2. **State**: Mantém o estado mutável do widget. É responsável por reconstruir o widget quando ocorrem mudanças no estado.\n\n" +
                    "   ```dart\n" +
                    "   class _MyWidgetState extends State<MyWidget> {\n" +
                    "     int _counter = 0;\n" +
                    "\n" +
                    "     void _incrementCounter() {\n" +
                    "       setState(() {\n" +
                    "         _counter++;\n" +
                    "       });\n" +
                    "     }\n" +
                    "\n" +
                    "     @override\n" +
                    "     Widget build(BuildContext context) {\n" +
                    "       return Scaffold(\n" +
                    "         appBar: AppBar(\n" +
                    "           title: Text('Exemplo StatefulWidget'),\n" +
                    "         ),\n" +
                    "         body: Center(\n" +
                    "           child: Column(\n" +
                    "             mainAxisAlignment: MainAxisAlignment.center,\n" +
                    "             children: <Widget>[\n" +
                    "               Text(\n" +
                    "                 'Contagem: $_counter',\n" +
                    "                 style: TextStyle(fontSize: 24),\n" +
                    "               ),\n" +
                    "               SizedBox(height: 16),\n" +
                    "               ElevatedButton(\n" +
                    "                 onPressed: _incrementCounter,\n" +
                    "                 child: Text('Incrementar'),\n" +
                    "               ),\n" +
                    "             ],\n" +
                    "           ),\n" +
                    "         ),\n" +
                    "       );\n" +
                    "     }\n" +
                    "   }\n" +
                    "   ```\n\n" +
                    "## setState\n\n" +
                    "O método `setState` é crucial para a manipulação de um `StatefulWidget`. Ele notifica o framework Flutter que o estado interno do widget mudou e solicita uma reconstrução. Sempre que houver uma alteração no estado, essa função deve ser chamada.\n\n" +
                    "No exemplo acima, ao pressionar o botão 'Incrementar', `_incrementCounter` é chamado, que por sua vez chama `setState` para atualizar o estado `_counter` e reconstruir o widget.\n\n" +
                    "Ao utilizar `StatefulWidget` e `State`, você pode criar interfaces de usuário dinâmicas que respondem a eventos e mantêm um estado interno mutável.");

            novoConteudo1.setConcluido(0);
            novoConteudo1.setTempo(33);
            novoConteudo1.setCurso(curso);
            novoConteudo1.setUsuario(usuario);

            Conteudo conteudoSalvo1 = conteudoRepository.save(novoConteudo1);

            Conteudo novoConteudo2 = new Conteudo();
            novoConteudo2.setTitulo("StatelessWidget");
            novoConteudo2.setBody("# StatelessWidget em Flutter\n\n" +
                    "Em Flutter, `StatelessWidget` é um widget que não mantém estado interno mutável. Isso significa que, uma vez que um `StatelessWidget` é construído, seus elementos visuais e layout não podem ser alterados. O widget é imutável e não responde a mudanças no estado.\n\n" +
                    "## Estrutura Básica\n\n" +
                    "A estrutura básica de um `StatelessWidget` consiste em um método `build` que retorna a árvore de elementos visuais a ser exibida.\n\n" +
                    "Exemplo:\n\n```dart\n" +
                    "import 'package:flutter/material.dart';\n\n" +
                    "class MyStatelessWidget extends StatelessWidget {\n" +
                    "  final String message;\n\n" +
                    "  MyStatelessWidget(this.message);\n\n" +
                    "  @override\n" +
                    "  Widget build(BuildContext context) {\n" +
                    "    return Container(\n" +
                    "      child: Text(message),\n" +
                    "    );\n" +
                    "  }\n" +
                    "}\n\n" +
                    "void main() {\n" +
                    "  runApp(\n" +
                    "    MaterialApp(\n" +
                    "      home: Scaffold(\n" +
                    "        body: MyStatelessWidget('Olá, StatelessWidget!'),\n" +
                    "      ),\n" +
                    "    ),\n" +
                    "  );\n" +
                    "}```\n\n" +
                    "## Quando Usar\n\n" +
                    "Use `StatelessWidget` quando:\n\n" +
                    "- A interface do usuário não precisa ser reconstruída em resposta a mudanças no estado.\n" +
                    "- Os elementos visuais são independentes do estado interno.\n\n" +
                    "## Benefícios\n\n" +
                    "- Desempenho: Como `StatelessWidget` é imutável, o Flutter pode otimizar a construção e atualização da interface.\n" +
                    "- Simplicidade: Útil para partes da interface que não precisam responder a eventos ou atualizações dinâmicas.\n\n" +
                    "## Limitações\n\n" +
                    "- Não pode reconstruir a interface em resposta a mudanças no estado.\n" +
                    "- Não suporta animações complexas ou interações dinâmicas.\n\n" +
                    "Em resumo, `StatelessWidget` é ideal para partes da interface que permanecem constantes durante a vida útil do widget e não exigem atualizações dinâmicas.");

            novoConteudo2.setConcluido(0);
            novoConteudo2.setTempo(34);
            novoConteudo2.setCurso(curso);
            novoConteudo2.setUsuario(usuario);

            Conteudo conteudoSalvo2 = conteudoRepository.save(novoConteudo2);
        }

        return ResponseEntity.ok().body(inscricaoSalva);
    }

    @PutMapping("/{idinscricao}")
    public ResponseEntity<?> updateInscricaoProgresso(@PathVariable Integer idinscricao, @RequestBody Map<String, Object> requestBody) {
        try {
            Integer progresso = (Integer) requestBody.get("progresso");

            inscricaoRepository.updateInscricaoProgresso(idinscricao, progresso);

            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Erro ao atualizar o progresso da inscrição.");
        }
    }

    @PutMapping("/finalizar/{idinscricao}")
    public ResponseEntity<?> updateFinalizacaoInscricao(@PathVariable Integer idinscricao, @RequestBody Map<String, Object> requestBody) {
        try {
            Integer finalizado = (Integer) requestBody.get("finalizado");

            inscricaoRepository.updateInscricaoFinalizado(idinscricao, finalizado);

            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Erro ao atualizar o progresso da inscrição.");
        }
    }
}
