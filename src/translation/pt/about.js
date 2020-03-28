import React from 'react'
import { Button, Row, Col } from 'reactstrap'

// Images
import internshipReport from '../../assets/doc/internship_report.pdf'
import myPets from '../../assets/doc/my_pets.apk'
import society from '../../assets/doc/society.apk'
import supervisor from '../../assets/doc/supervisor.apk'

const aboutMe = `Olá pessoal, eu sou Alexander. Sou apaixonado por tecnologia e
no momento, dedico minha carreira ao desenvolvimento web e mobile. No futuro,
tenho planos de me tornar um cientista de dados, comecei a aprender sobre essa área e já estou fascinado.`

const jobTimeline = [
  {
    id: 1,
    companyName: "Aurem (Estágio)",
    companyAddress: "Incubadora de empresas do Inatel",
    date: "01/2020 - presente",
    icon: "tim-icons icon-globe-2",
    description: "Trabalhei como desenvolvedor web fullstack da plataforma da Aurem."
  },
  {
    id: 2,
    companyName: "Fiscoserv (Estágio)",
    companyAddress: "Incubadora de empresas do Inatel",
    date: "05/2019 - 12/2019",
    icon: "tim-icons icon-chart-bar-32",
    description: "Trabalhei como desenvolvedor React front-end da plataforma da Fiscoserv."
  },
]

const academic = {
  title: "Academia",
  introduction: `Eu sou estudante de Engenharia da Computação Instituto Nacional de Telecomunicações 
  (Inatel). Eu iniciei meus estudos em 01/2017 e pretendo me forma em 12/2021.`,
  fullText: (
    <div>
      <h4 style={{ color: "grey", fontWeight: "bold", marginTop: 20 }}>
        <a href="https://inatel.br/home/" rel="noopener noreferrer" target="_blank">
          Instituto Nacional de Telecomunicações (Inatel)
        </a>
      </h4>
      <p>&nbsp;&nbsp; Eu entrei no Inatel em Fevereiro de 2017, no começo era tudo novo,
      eu nunca tinha ouvido falar em programação. Eu sabia que existia Web sites, jogos e
      aplicativos más eu não tinha ideia de como eles eram construídos. Então no começo
      foi bem difícil, muitas coisas novas, muita matemática, eu estudava quase o dia todo
      pra não reprovar nas matérias, pois tudo pra mim era novo nada daquilo eu vi no ensino médio.
      </p>

      <p>&nbsp;&nbsp; Lembro que na primeira aula prática de algoritmos e estrutura de dados
      eu fiquei muito feliz em dar o meu primeiro "Hello World" na linguagem C++,
      olhando para que tela preta onde mostrava os dados eu já me sentia um programador.
      No curso eu vi muita parte eletrônica também, no primeiro semestre da faculdade
      minha maior dificuldade foi em circuitos elétricos, pois tudo aquilo era novidade e
      não era tão trivial assim. Aprendi a criar placas de circuito impresso, eu ficava
      impressionado, chegava até a pensar que poderia criar um computador sozinho só com
      aquilo. Claro que não era só aquilo, comecei a aprender realmente como é a arquitetura
      de um computador, como o processador funciona, como uma memória armazena e mostra os dados,
      como que o Sistema Operacional é construído, e tudo que era necessário para o funcionamento
      de um computador. Depois disso que eu pudi compreender que criar um computador é uma
      tarefa muito mais complicada do que somente criar placas de circuito impresso e piscar um LED.
      </p>

      <p>&nbsp;&nbsp; Em 2018 eu participei da Feira Tecnológica do Inatel (Fetin), eu e minha
      equipe construímos dois aplicativos mobile para fiscalização do lixo em Santa Rita do
      Sapucaí, na época eu só tinha conhecimento em C/C++ então desenvolver um aplicativo
      não seria uma tarefa tão fácil. Foi então que chegamos a conclusão que iriamos usar
      o MIT App Invetor, não era uma ferramenta tão profissional más dava pra começar nosso
      protótipo. Fiquei responsável pela parte do desenvolvimento dos dois aplicativos e os
      outros membros da equipe ficaram responsável pela parte do hardware que era um restreador
      automotivo. No final, os aplicativos ficaram bem bonitos porém muito limitados e pesados,
      pois eles cresceram um pouco e o MIT App Invetor não é adequado para aplicativos de porte
      médio ou grande. Infelizmente não ganhamos a Fetin, más eu levei isso como uma primeira
      experiência, pois criar um aplicativo era meu sonho. Neste mesmo ano eu participei pela
      terceira vez da Olímpiada de Algoritmos do Inatel e desta vez eu consegui o 3º lugar
      entre 105 estudantes. Na época eu fiquei muito feliz com essa consquista, pois eu
      vi que estava evoluindo e queria evoluir muito mais.
      </p>

      <p>&nbsp;&nbsp; O tempo foi passando, eu fui amadurecendo meu pensamento, comecei a
      aprender novas linguagens de programação, como o Java, SQL para modelamento
      de Banco de Dados e Javascript para desenvolvimento web que foi o meu preferido.
      Com isso eu fui cada vez mais me apaixonando pela programação, até que chegou
      um ponto que eu fazia por prazer, os estudos eram deveres e programar era um laser que eu tinha.
      </p>

      <p>&nbsp;&nbsp; Em 2019 aconteceram muitas coisas, nessa época eu já tinha me acostumado
      com o ritmo da faculdade, então eu decidi que era a hora de procurar alguma
      experiência profissional para o meu currículo. Fiquei de olho nos e-mails
      para ver se chegaria alguma vaga de Estágio ou Iniciação Cientifica (IC),
      até que um dia apareceu vagas de IC no Centro de Desenvolvimento e Transformação
      de Tecnologia Assistiva (CDTTA), enviei meu currículo para o professor e fiquei
      esperando o resultado. Eu passei na primeira fase, então fui chamado para uma
      entrevista que seria a última fase para ganhar a bolsa de IC. Depois de uma semana
      após a entrevista o resultado saiu, e eu passei para ser bolsista no CDTTA, porém
      nessa semana que passou após eu ter feito a entrevista, aconteceu algo interessante
      e ao mesmo tempo duvidoso, eu fui indicado para uma vaga de estágio na Incubadora do
      Inatel, e já estava tudo encaminhado para eu ir, só faltava eu aceitar.
      Eu fiquei desesperado na época, não sabia o que fazer, eu tinha duas propostas
      em mãos e qualquer passo errado eu perdia as duas. Conversei com muitas pessoas
      experientes na época, até que cheguei a decisão de que seria melhor pra mim o estágio,
      eu iria trabalhar com desenvolvimento Web que era uma das coisas que eu mais gostava e
      queria me aprofundar mais, sem contar na experiência que eu iria ganhar. Então com muito
      custo e dor no coração acabei desistindo a IC, lembro na época que fui falar com o Filipe
      Bueno professor orientador da IC, e eu gostei muito dele na primeira conversa que tivemos,
      então foi difícil pra mim dar essa notícia a ele, más ele aceitou numa boa.
      </p>

      <p>&nbsp;&nbsp; Então, ainda em 2019, em maio comecei a trabalhar na Fiscoserv, eu
      tinha uma noção básica de HTML, CSS e Javascript e o sistema deles já estava bem
      grande, precisava de alguém experiente para mexer. Por conta disso, na primeira
      semana, meu chefe que era o Filipe Campos, me passou um curso de Desenvolvimento
      Web profissional, para eu entrar no ritmo da empresa. Terminando de ver o curso ele
      me passou o primeiro desafio que era migrar a plataforma dele que era feita com
      desenvolvimento clássico, para o framework React js, então aí veio mais um
      aprendizado, eu nunca tinha ouvido falar em React, tive que aprender tudo do zero.
      Passou um mês na Fiscoserv eu já tinha pegado o ritmo do negócio, já estava fera
      no React, más como qualquer outra linguagem ou biblioteca no começo foi bem dificil e novo,
      pois a forma como desenvolvia com o React era totalmente diferente do que eu já tinha visto.
      E neste mesmo ano, eu estava inscrito para mais uma Fetin do Inatel com outra equipe, dessa
      vez a ideia era desenvolver um sistema para agendamento de consultas em PetShop. Era
      um software que ficaria com as Petshops e um aplicativo que ficaria com os clientes,
      da mesma forma que na última Fetin, fiquei responsável pelo aplicativo mobile, dessa
      vez desenvolvendo mais profissionalmente com a biblioteca React Native, como eu já tinha
      conhementos de JavaScript e do React Web, foi fácil aplicar os conceitos no React Native.
      Infelizmente, mais uma vez a gente não ganhou a Fetin, más novamente a experiência foi extraordinária.
      </p>

      <p>&nbsp;&nbsp; No final de 2019, meu chefe Filipe Campos se formou no Inatel e
      foi chamado para trabalhar em São Paulo, por conta disso a Fiscoserv teve
      que sair da Incubadora do Inatel e ir para outra cidade, então não consegui
      mais trabalhar lá. Fiquei triste, pois eu queria me aprofundar muito mais no
      desenvolvimento web. Só que para minha felicidade, um dia depois que o Filipe
      me deu essa notícia, ele veio com outra muito animadora, o Bruno Costa que era
      o CIO da Aurem, convidou Filipe para ser sócio dele, então ele aceitou e me chamou
      para trabalhar com eles. Eu aceitei sem pensar duas vezes, pois lá eu iria trabalhar
      com a mesma tecnologia só que aplicando em outra ideia de negócio.
      </p>

      <p>&nbsp;&nbsp; Em 2020, comecei a trabalhar na Aurem, no começo a ideia era migrar a
      plataforma deles que era em Laravel para o Framework React no front-end e Node Js
      com Express e MySQL no back-end. Desta vez a migração foi bem mais rápida que na
      Fiscoserv, pois minha base de conhecimento era maior. Neste mesmo ano, fugindo um
      pouco da graduação, um amigo me chamou para ajudar ele a criar um e-commerce para
      loja dele, era outro desafio enorme, pois ele não sabia nada de desenvolvimento.
      Eu como gostava muito de desenvolvimento aceitei a proposta e comecei a desenvolver no mesmo ano.
      </p>
    </div>
  )
}

const job = {
  title: "Trabalho",
  introduction: `Neste momento estou trabalhando como estagiário na Aurem. Eu trabalho como 
  desenvolvedor da plataforma Aurem Genus, tanto com a parte do frtonend quanto do backend.`,
  fullText: (
    <div>
      <h4 style={{ color: "grey", fontWeight: "bold", marginTop: 20 }}>
        <a href="https://aurem.com.br/" rel="noopener noreferrer" target="_blank">
          Aurem
        </a>
      </h4>
      <p>&nbsp;&nbsp; Aurem é uma Startup que através da tecnologia assistiva utiliza o
      reconhecimento de voz alocado em web para capturar fala do professor transcrevendo a em
      tempo real durante a aula.
      </p>
      <p>&nbsp;&nbsp; Eu comecei a trabalhar na Aurem em Janeiro de 2020, junto entrou o
      Filipe Campos que era meu chefe na Fiscoserv e meu colega de estágio na
      Fiscoserv Leonardo de Souza, no começo o desafio era migrar todo sistema
      deles para uma tecnologia diferente. Isso foi possível, pois a plataforma
      não estava tão grande na época. Ela era toda construída com o framework Laravel,
      com o front-end e o back-end da aplicação misturados, isso dificultaria a criação
      de um aplicativo mobile que era uma das intenções iniciais. Então a gente separou o
      back-end e o front-end, ficando então da seguinte forma:  Eu fiquei responsável por
      criar o novo back-end em Node Js com Express e Sequelize ORM e o front-end web em
      React Js e o Leonardo ficou responsável por desenvolver o aplicativo utilizando Flutter.
      </p>
      <p>&nbsp;&nbsp; Depois de estar toda primeira parte concluída era a hora de trabalhar
      com o reconhecimento de voz, essa foi a parte que eu mais tive dificuldade, pois
      era muito propicio de falhar. Utilizamos a API da MDN para trabalhar com o ele,
      pois era a melhor no mercado e não tinha custo. Com a nova tecnologia e o reconhecimento de
      voz funcional, toda primeira parte que já tinha antes foi terminada. Depois disso era
      desenvolver as novas ideias da Startup e foi aí que fiquei responsável pelo
      Aurem Genus que era a dashboard web.
      </p>

      <h4 style={{ color: "grey", fontWeight: "bold", marginTop: 20 }}>
        <a href="https://fiscoserv.com.br/" rel="noopener noreferrer" target="_blank">
          Fiscoserv
      </a>
      </h4>
      <p>&nbsp;&nbsp;Fiscoserv é uma empresa que nasceu para desenvolver soluções de
      Ciência de Dados para transformar a Contabilidade e Finanças das empresas.
      </p>

      <p>&nbsp;&nbsp;Eu entrei na Fiscoserv em Maio de 2019, foi nessa época que comecei
      a enxergar o mercado de outra forma, eu comecei a perceber que só a academia não
      me amadureceria de verdade. Minha tarefa, inicialmente, foi passar toda plataforma
      que eles tinham para a biblioteca React, pois segundo eles ela esava muito em alta
      no mercado. Eu já havia estudado HTML, CSS e um pouco de Javascript que acabou
      sendo o mais importante. No começo foi muito difícil, pois a forma que se
      programava utilizando o React Js era totalmente diferente da maneira convencional,
      foi passando o tempo e eu fui pegando o jeito, até que chegou um dia que eu já estava
      bom no negócio. Lá eu tive a oportunidade de trabalhar com tabelas e tráficos, coisa
      que achei bem complicado no começo, pois não era só criar inputs e botões e enviar um
      formulário. Havia muitos dados financeiros de empresas envolvidos nessas tabelas e
      tráficos, então qualquer erro que eu cometesse, poderia apagar todos esses dados.
      </p>

      <p>&nbsp;&nbsp;Foi nesse primeiro estágio que eu comecei a ter uma visão mais
      para o lado empreendedor, eu percebi que ter uma empresa não era uma tarefa tão
      simples como eu imaginava. Trabalhar em uma Startup ao redor de muitas outras
      Startups foi uma experiência incrível, não existia aquela barreira separada em
      departamentos que uma empresa convencional tem. Eu tive a oportunidade de ver e
      acompanhar a vida dos empreendedores que estavam batalhando e batalhando para
      chegar ao sucesso. Como o estágio foi na Incubadora do Inatel, havia muitas
      outras empresas, então eu via sempre os Sócios fazendo Pitchs
      (eu não fazia a mínima ideia do que era) para outras pessoas, via eles negociando
      com cliente, levando esporros de cliente, cometendo erros, concertando os erros e
      tudo que um empreendedor faz no dia-a-dia.
      </p>
      <div className="btn-wrapper mb-3">
        <a href={internshipReport} download><Button color="info">Baixar relatório de estágio</Button></a>
      </div>
    </div>
  )
}

const projects = {
  title: "Projetos",
  introduction: [
    {
      title: "Aurem Genus",
      route: "https://aurem.com.br/"
    },
    {
      title: "Central Modas",
      route: "https://centralmodas-frontend-web.herokuapp.com/"
    },
    {
      title: "Fiscoserv Website",
      route: "https://look.fiscoserv.com.br/"
    },
    {
      title: "Fetin 2019 - My Pets",
      route: "https://github.com/alexanderaugusto/MyPets"
    },
    {
      title: "Swerts Store",
      route: "https://github.com/alexanderaugusto/Swerts-Store"
    },
    {
      title: "Future Clean",
      route: "https://appinventor.mit.edu/"
    },
    {
      title: "Pokémon Online - Teste",
      route: "https://github.com/alexanderaugusto/Pokemon-Web"
    },
  ],
  fullText: (
    <div>
      <h4 style={{ color: "grey", fontWeight: "bold", marginTop: 20 }}>
        <a href="https://aurem.com.br/" rel="noopener noreferrer" target="_blank">
          Aurem Genus
        </a>
      </h4>
      <p>&nbsp;&nbsp; Aurem Genus é uma das ideias da Aurem, esse projeto utiliza
      reconhecimento de voz para capturar a fala do professor em uma sala de aula e
      transcrever ele em tela, para que um aluno com surdo ou com deficiência auditiva
      possa acompanhar a aula. Neste eu fiquei responsável por desenvolvedor toda parte Web,
      utilizando React Js no front-end e Node Js com Express e Sequelize ORM para MySQL no back-end.
      </p>

      <h4 style={{ color: "grey", fontWeight: "bold", marginTop: 20 }}>
        <a href="https://centralmodas-frontend-web.herokuapp.com/" rel="noopener noreferrer" target="_blank">
          Central Modas
        </a>
      </h4>
      <p>&nbsp;&nbsp; Central Modas é um e-commerce que inicialmente era para ser feito
      para uma loja especifica, porém a ideia foi estendida para várias lojas. Então
      qualquer pessoa que tenha uma loja, pode se cadastrar no site e vender o que quiser.
      Neste projeto eu fiquei responsável pelo desenvolvimento fullstack, utilizando React Js
      no front-end e Node Js com Express e Sequelize ORM para MySQL no back-end.
      </p>

      <h4 style={{ color: "grey", fontWeight: "bold", marginTop: 20 }}>
        <a href="https://look.fiscoserv.com.br/" rel="noopener noreferrer" target="_blank">
          Fiscoserv Website
        </a>
      </h4>
      <p>&nbsp;&nbsp; A plataforma da Fiscoserv realiza através de conceitos de Business
      Analytics cruzamento de dados do cenário atual das empresas com indicadores do mercado,
      auxilia na tomada de decisões, nas estratégias de venda, estoque, fornecedores, etc. E
      utiliza Inteligência Artificial para gerar insights, diagnósticos e previsões de resultados
      e custo da empresa, que permitem uma perspectiva futura para um melhor planejamento do negócio.
      Neste eu fiquei responsável por desenvolver todo front-end da aplicação que foi
      desenvolvido utilizando a biblioteca ReactJs.
      </p>

      <h4 style={{ color: "grey", fontWeight: "bold", marginTop: 20 }}>
        <a href="https://github.com/alexanderaugusto/MyPets" rel="noopener noreferrer" target="_blank">
          Fetin 2019 - My pets
        </a>
      </h4>
      <p>&nbsp;&nbsp; MyPets era para ser um jeito simples e prático para realizar agendamento em
      PetShops. Muitas vezes os donos dos animais não tem tempo para levar o animalzinho
      para uma consulta ou para um banho e tosa, então com o nosso sistema eles poderiam agendar
      com um simples toque. O sistema era dividido em dois: Um software que ficaria com o PetShop,
      neste eles poderiam agendar consultas, ver tudo que está agendado, receber notificações de
      agendamentos, e todas as demais coisas que eles já fazem hoje em dia. O outro seria um
      aplicativo que ficaria com os clientes do PetShop, neste os clientes poderiam agendar
      as consultas sem sair da casa e teria até a opção do PetShop buscar o animal em casa.
      Neste eu fiquei responsável pelo desenvolvimento do aplicativo que foi desenvolvido
      usando a biblioteca React Native com o banco de dados Firebase.
      </p>
      <div className="btn-wrapper mb-3">
        <a href={myPets} download><Button color="info">Baixar APK</Button></a>
      </div>

      <h4 style={{ color: "grey", fontWeight: "bold", marginTop: 20 }}>
        <a href="https://github.com/alexanderaugusto/Swerts-Store" rel="noopener noreferrer" target="_blank">
          Swerts Store
        </a>
      </h4>
      <p>&nbsp;&nbsp; Swerts Store é um software desktop desenvolvido para conclusão das
      matérias de Programação Orientada a Objetos e Banco de Dados. É uma simulação de
      um e-commerce, nele os vendedores podem cadastrar produtos e ver o estoque deles,
      enquanto que os clientes podem ver os produtos e comprar o que quiserem. Neste eu
      fiquei responsável pelo desenvolvimento de todo projeto, juntamente com os outros dois
      integrantes do grupo Vanessa e Renan, e nele utilizamos o Java para desenvolver o software
      e para armazenar os dados utilizando o MySQL.
      </p>

      <h4 style={{ color: "grey", fontWeight: "bold", marginTop: 20 }}>
        <a href="https://github.com/alexanderaugusto/Swerts-Store" rel="noopener noreferrer" target="_blank">
          Future Clean
        </a>
      </h4>
      <p>&nbsp;&nbsp; Future Clean é um projeto que a ideia era minimizar o lixo de Santa Rita do Sapucaí.
      Com informações da própria secretaria de obras da cidade, ficamos sabendo que as pessoa
      faziam muitas reclamações dos lixos próximos a sua casa, então desenvolvemos um aplicativo
      para que as pessoas possam deixar suas reclamações e consequentemente melhor o meio ambiente.
      O outro aplicativo receberia essas reclamações e a prefeitura poderia tomar uma atitude em
      relação a isso. Outra coisa que tentamos implementar, era das pessoas saberem onde está o
      caminhão de lixo, pois isso usamos uma rastreador automotivo.
      </p>
      <iframe title="Future Clean" width="100%" height="315" src="https://www.youtube.com/embed/sHA8Sx7YKoY"
        frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen />
      <Row>
        <Col className="text-center">
          <div className="btn-wrapper mb-3">
            <a href={supervisor} download><Button color="info">Supervisor APK</Button></a>
          </div>
        </Col>
        <Col className="text-center">
          <div className="btn-wrapper mb-3">
            <a href={society} download><Button color="info">Sociedade APK</Button></a>
          </div>
        </Col>
      </Row>
      <h4 style={{ color: "grey", fontWeight: "bold", marginTop: 20 }}>
        <a href="https://github.com/alexanderaugusto/Pokemon-Web" rel="noopener noreferrer" target="_blank">
          Pokemon Online - Teste
        </a>
      </h4>
      <p>&nbsp;&nbsp; Este foi o primeiro projeto que desenvolvi quando comecei a estudar sobre
      desenvolvimento web. A ideia era pegar um site de Poketibia, na época eu escolhi o
      <a href="https://otpokemon.com/" rel="noopener noreferrer" target="_blank">
          &nbsp; OT Pokémon &nbsp;
      </a>
      e reproduzir ele, com os meus designers e com o meu jeito de desenvolver.
      Neste eu utilizei o desenvolvimento web clássico, HTML, CSS, Javascript e JQuery.
      </p>
    </div>
  )
}

const knowledge = [
  {
    title: "Desenvolvedor de software",
    body: `Tenho conhecimento em linguagens de programação C/C ++, Java, JavaScript e
        um pouco de Python, Lua e R. Adoro criar softwares com javascript,
        eu uso a biblioteca React no frontend do aplicativo e o interpretador Node Js com
        Banco de dados MySQL e MongoDB no back-end.`,
    icon: "fas fa-code",
    color: "warning"
  },
  {
    title: "Cientista de Dados",
    body: `Estou começando a aprender Python e R. Depois disso, vou começar a aprender IA, Machine
           Learning e Big Data.`,
    icon: "tim-icons icon-atom",
    color: "success"
  },
  {
    title: "Hardware",
    body: `Eu tenho uma introdução à programação de microcontroladores, já usei
         microcontroladores da família ARM e MSP. Eu também sei como criar placas de circuito impresso
         com o Altium Designer e tenho um breve conhecimento de modelagem 3D com o SolidWorks.`,
    icon: "fas fa-microchip",
    color: "info"
  }
]

const aboutCentralModas = {
  title: "Sobre Central Modas",
  body: `Tudo começou com a idéia de criar um site para a loja física de um amigo.
     Então juntei a dois amigos: Otavio Augusto (dono da loja), responsável pelo
     parte financeira do negócio e Paulo Júnior, responsável pela comercialização do
     produto. Fui responsável pela parte de tecnologia e desenvolvimento do e-commerce. Lá
     chegou um momento em que tive a ideia de expandir o site para várias lojas e não apenas
     para um único, então aderimos à idéia e hoje o Cental Modas é um comércio eletrônico para
     sapatos, moda e todos os tipos de acessórios.`,
  link: "https://centralmodas-frontend-web.herokuapp.com/",
  partners: [
    {
      image: require("../../assets/img/otavio_augusto.jpg"),
      name: "Otavio Augusto",
      description: `Estudante de engenharia civil e responsável pela parte financeira do Central Modas.`,
      twitter: " #",
      facebook: " #",
      linkedin: " #"
    },
    {
      image: require("../../assets/img/paulo_junior.jpg"),
      name: "Paulo Junior",
      description: `Estudante de Administração e responsável pela parte comercial e o marketing do Central Modas`,
      twitter: " #",
      facebook: " #",
      linkedin: " #"
    }
  ]
}

export {
  aboutMe,
  jobTimeline,
  academic,
  job,
  projects,
  knowledge,
  aboutCentralModas
}