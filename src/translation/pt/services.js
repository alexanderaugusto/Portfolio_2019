import React from 'react'

// Images
import centralModas from '../../assets/img/central_modas_2.PNG'
import aurem from '../../assets/img/aurem.PNG'
import fiscoserv from '../../assets/img/fiscoserv.PNG'
import myPets from '../../assets/img/my_pets.jpg'

// Documents
import myPetsDownload from '../../assets/doc/my_pets.apk'

const plans = [
  {
    title: "Desenvolvedor Web",
    subtitle: "Front-end",
    features: {
      left: ["HTML", "CSS", "JavaScript", "React Js", "."],
      right: ["Bootstrap", "Git", "Bitbucket", "GitHub", "."]
    },
    icon: "fas fa-code",
    color: "warning"
  },
  {
    title: "Desenvolvedor Mobile",
    subtitle: "Front-end",
    features: {
      left: ["JavaScript", "React Native", "App Inventor", ".", "."],
      right: ["Git", "Bitbucket", "GitHub", ".", "."]
    },
    icon: "fas fa-mobile-alt",
    color: "info"
  },
  {
    title: "Desenvolvedor Desktop",
    subtitle: "Front-end",
    features: {
      left: ["Java", "JavaScript", "Electron", "React Js", "."],
      right: ["Material-ui", "Git", "Bitbucket", "GitHub", "."],
    },
    icon: "fas fa-desktop",
    color: "primary"
  },
  {
    title: "Desenvolvedor de API",
    subtitle: "Back-end",
    features: {
      left: ["JavaScript", "Node Js", "Sequelize ORM", "MySQL", "MongoDB"],
      right: ["Firebase", "Git", "Bitbucket", "GitHub", "."]
    },
    icon: "fas fa-server",
    color: "success"
  },
  {
    title: "Outros serviços",
    subtitle: "Anu technological service",
    features: {
      left: ["Análise de Dados", "Inteligência Artificial", "Excel", ".", "."],
      right: ["Criação de PCI", "Microcontrolador", "Embarcado", ".", "."]
    },
    icon: "tim-icons icon-bulb-63",
    color: "danger"
  }
]

const myProjects = [
  {
    img: centralModas,
    link: 'https://centralmodas-frontend-web.herokuapp.com/',
    description: (
      <p>Central Modas é um comércio eletrônico que deveria ser feito inicialmente para
      uma loja específica, mas a ideia foi estendida a várias lojas. Então, qualquer
      pessoa que tem uma loja, pode se registrar no site e vender o que quiser. Neste
      projeto fui responsável pelo desenvolvimento de todo site, usando o React Js
      no front-end e Node Js com Express e Sequelize ORM com MySQL no back-end.
      </p>
    )
  },
  {
    img: aurem,
    link: 'https://aurem.com.br/',
    description: (
      <p>Aurem Genus é uma das idéias da Aurem, este projeto usa reconhecimento de voz para
      capturar o discurso do professor em uma sala de aula e transcrevê-lo na tela, para que alunos
      surdos ou com perda auditiva possam acompanhar a aula.
      </p>
    )
  },
  {
    img: fiscoserv,
    link: 'https://look.fiscoserv.com.br/',
    description: (
      <p>A plataforma Fiscoserv usa conceitos de Business Analytics para
      cruzar dados do cenário atual de empresas com indicadores de mercado, ajuda
      na tomada de decisões, estratégias de vendas, estoque, fornecedores, etc.
      Utiliza Inteligência artificial para gerar insights, diagnósticos e previsões de resultados
      e custo da empresa, que permitem uma perspectiva futura para um melhor planejamento
      de negócios. Neste eu era responsável pelo desenvolvimento de todo o front-end da plataforma
      que foi desenvolvida usando a biblioteca ReactJs.
      </p>
    )
  },
  {
    img: myPets,
    link: myPetsDownload,
    description: (
      <p>O MyPets deveria ser uma maneira simples e prática de agendar consultas em
      PetShops. Muitas vezes, os donos não têm tempo para levar seu animal para passear,
      consultar ou para um banho e tosa, então com o nosso sistema eles poderiam agendar
      com apenas um toque. O sistema foi dividido em dois: um software que ficaria com o PetShop,
      nele eles poderiam agendar consultas, ver tudo o que está agendado, receber notificações de
      agendamento e todas as outras coisas que eles já fazem hoje. O outro seria uma
      aplicação que ficaria com os clientes do PetShop, nele os clientes poderiam agendar o
      consultas sem sair de casa e ainda teria a opção do PetShop pbuscar o animal em casa. Neste eu
      fui responsável pelo desenvolvimento do aplicativo que foi desenvolvido usando a biblioteca
      React Nativo com o banco de dados Firebase.
      </p>
    )
  }
]

export {
  plans,
  myProjects
}