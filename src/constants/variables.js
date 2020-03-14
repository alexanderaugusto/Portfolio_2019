import React from 'react'

const jobTimeline = [
  {
    id: 1,
    companyName: "Fiscoserv (Internship)",
    companyAddress: "Inatel Business Incubador",
    date: "05/2019 - 12/2019",
    icon: "tim-icons icon-chart-bar-32",
    description: "I worked as a React front-end developer of the Fiscoserv platform."
  },
  {
    id: 2,
    companyName: "Aurem (Internship)",
    companyAddress: "Inatel Business Incubador",
    date: "01/2020 - present",
    icon: "tim-icons icon-globe-2",
    description: "I worked as a web developer fullstack for Aurem's platform."
  },
]

const academic = {
  title: "Academic",
  introduction: `I am a student of Computer Engineering at the Instituto Nacional de Telecomunicações (Inatel). 
  I started studying at 01/2017 and I intend to graduate on 12/2021.`,
  fullText: (
    <div>
      <h4 style={{ color: "grey", fontWeight: "bold", marginTop: 20 }}>
        <a href="https://inatel.br/home/" rel="noopener noreferrer" target="_blank">
          Instituto Nacional de Telecomunicações (Inatel)
        </a>
      </h4>
      <p>&nbsp;&nbsp; I joined Inatel in February 2017, at the beginning it was all new, I had never heard of programming.
      I knew that there were bad websites, games and apps, I had no idea how they were built. So in the beginning
      it was very difficult, a lot of new things, a lot of math, I studied almost all day so as not to fail the
      subjects, because everything for me was new none of what I saw in high school.
      </p>

      <p>&nbsp;&nbsp; I remember that in the first practical class of algorithms and data structure I was very happy to give my
      first "Hello World" in C ++, looking at that black screen where I showed the data I already felt like a
      programmer. In the course I saw a lot of electronics too, in the first semester of college my biggest
      difficulty was in electrical circuits, because everything was new and it was not so trivial.
      I learned to create printed circuit boards, I was impressed, I even thought that I could create a computer
      by myself with just that. Of course it wasn't just that, I started to really learn how a computer's
      architecture is, how the processor works, how a memory stores and shows data, how the Operating System is
      built, and everything that was necessary for the functioning of a computer. After that I was able to
      understand that creating a computer is a much more complicated task than just creating printed circuit
      boards and flashing an LED.
      </p>

      <p>&nbsp;&nbsp; In 2018 I participated in the Inatel Technological Fair (Fetin), my team and I built two mobile applications
      for waste inspection in Santa Rita do Sapucaí, at the time I only had knowledge in C / C ++ so developing
      an application would not be such a task easy. It was then that we came to the conclusion that we were
      going to use the MIT App Invetor, it wasn't such a professional tool but we could start our prototype.
      I was responsible for the development part of the two applications and the other team members were
      responsible for the part of the hardware that was an automotive restraint. In the end, the applications
      were very beautiful but very limited and heavy, as they grew a little and the MIT App Invetor is not suitable
      for medium or large applications. Unfortunately we didn't win Fetin, but I took this as a first experience,
      because creating an app was my dream. In the same year, I participated for the third time in the
      Inatel Algorithms Olympiad and this time I got the 3rd place among 105 students. At the time, I
      was very happy with this achievement, because I saw that it was evolving and I wanted to evolve
      much more.
      </p>

      <p>&nbsp;&nbsp; Time went by, I began to mature my thinking, I started to learn new programming languages, such as Java,
      SQL for database modeling and Javascript for web development, which was my favorite. With that I became
      more and more in love with programming, until a point came that I did for pleasure, studies were duties
      and programming was a laser that I had.
      </p>

      <p>&nbsp;&nbsp; In 2019 many things happened, at that time I had already got used to the pace of college, so I decided it was
      time to look for some professional experience for my curriculum. I kept an eye on the emails to see if any
      Internship or Scientific Initiation (IC) vacancies would arrive, until one day IC vacancies appeared at the
      Assistive Technology Development and Transformation Center (CDTTA), I sent my curriculum to the teacher and I
      was waiting for the result. I passed the first stage, so I was called for an interview that would be the last
      stage to win the IC scholarship. After a week after the interview, the result came out, and I went on to be a
      scholarship holder at the CDTTA, but this week that passed after I did the interview, something interesting and
      at the same time doubtful, I was indicated for an internship position at Inatel's incubator, and everything was
      ready for me to go, I just needed to accept it. I was desperate at the time, I didn't know what to do, I had two
      proposals in hand and any wrong step I missed both. I talked with many experienced people at the time, until I
      decided that the internship would be better for me, I would work with Web development which was one of the things
      I liked the most and I wanted to go deeper, not to mention the experience I would win. So, with a lot of pain
      and pain in my heart, I ended up giving up CI, I remember at the time that I went to talk to Filipe Bueno,
      a tutor professor at IC, and I liked him a lot in the first conversation we had, so it was difficult for me
      to give him this news, but he accepted in a good way.
      </p>

      <p>&nbsp;&nbsp; So, still in 2019, in May I started working at Fiscoserv, I had a basic notion of HTML, CSS and Javascript
      and their system was already very big, I needed someone experienced to handle it. Because of this, in the
      first week, my boss, who was Filipe Campos, gave me a professional Web Development course, so I could keep
      up with the company. Finishing seeing the course he gave me the first challenge which was to migrate his
      platform that was done with classic development, to the React js framework, so there came yet another learning
      experience, I had never heard of React, I had to learn everything from zero. He spent a month at Fiscoserv,
      I had already picked up the pace of the business, I was already a beast at React, but like any other language
      or library at the beginning it was very difficult and new, because the way I developed with React was totally
      different from what I had already had seen. And this same year, I was signed up for another Fetin from Inatel
      with another team, this time the idea was to develop a system for scheduling appointments in PetShop. It was
      software that would stay with Petshops and an application that would stay with customers, just as in the last
      Fetin, I was responsible for the mobile application, this time developing more professionally with the React
      Native library, as I already had knowledge of JavaScript and React Web, it was easy to apply the concepts in
      React Native. Unfortunately, once again we didn't win Fetin, but again the experience was extraordinary.
      </p>

      <p>&nbsp;&nbsp; At the end of 2019, my boss Filipe Campos graduated from Inatel and was called to work in São Paulo, because of
      that Fiscoserv had to leave the Inatel Incubator and go to another city, so I couldn't work there anymore.
      I was sad because I wanted to go much deeper into web development. Except for my happiness, the day after
      Filipe gave me this news, he came with another very encouraging one, Bruno Costa who was Aurem's CIO, invited
      Filipe to be his partner, so he accepted and asked me to work with they. I accepted without thinking twice,
      because there I would work with the same technology but applying it to another business idea.
      </p>

      <p>&nbsp;&nbsp; In 2020, I started working at Aurem, at the beginning the idea was to migrate their platform that was in
      Laravel to the React Framework on the front end and Node Js with Express and MySQL on the back end. This
      time the migration was much faster than at Fiscoserv, because my knowledge base was bigger. That same year,
      fleeing a little from graduation, a friend called me to help him create an e-commerce for his store, it was
      another huge challenge, because he knew nothing about development. As I was very fond of development,
      I accepted the proposal and started to develop in the same year.
      </p>
    </div>
  )
}

const job = {
  title: "Job",
  introduction: `I am currently doing an internship at Aurem. I work with the development of Aurem Genus, both the
  frontend and the backend.`,
  fullText: (
    <div>
      <h4 style={{ color: "grey", fontWeight: "bold", marginTop: 20 }}>
        <a href="https://aurem.com.br/" rel="noopener noreferrer" target="_blank">
          Aurem
        </a>
      </h4>
      <p>&nbsp;&nbsp; Aurem is a Startup that, using assistive technology, uses speech recognition allocated
      on the webto capture the teacher's speech by transcribing it in real time during class.
      </p>
      <p>&nbsp;&nbsp; I started working at Aurem in January 2020, along with Filipe Campos, who was my boss
      at Fiscoserv and
      my internship at Fiscoserv Leonardo de Souza, at the beginning the challenge was to migrate their entire
      system to a different technology. This was possible, as the platform was not that big at the time. It was
      all built with the Laravel framework, with the front-end and the back-end of the application mixed, this
      would make it difficult to create a mobile application that was one of the initial intentions. So we
      separated the back-end and the front-end, thus being as follows: I was responsible for creating the new
      back-end in Node Js with Express and Sequelize ORM and the web front-end in React Js and Leonardo was
      responsible for developing the application using Flutter.
      </p>
      <p>&nbsp;&nbsp; After the first part was finished, it was time to work with voice recognition, this was the part that I had
      the most difficulty, because it was very conducive to fail. We used the MDN API to work with it, as
      it was the
      best on the market and had no cost. With new technology and functional voice recognition, every
      first part that I had before was finished. After that I was to develop the new ideas of Startup and
      that was when I was responsible for Aurem Genus, which was the web dashboard.
      </p>

      <h4 style={{ color: "grey", fontWeight: "bold", marginTop: 20 }}>
        <a href="https://fiscoserv.com.br/" rel="noopener noreferrer" target="_blank">
          Fiscoserv
      </a>
      </h4>
      <p>&nbsp;&nbsp;Fiscoserv is a company that was born to develop Data Science solutions to transform the Accounting
      and Finance of companies.
      </p>

      <p>&nbsp;&nbsp;I joined Fiscoserv in May 2019, it was at that time that I began to see the market in a different way,
      I started to realize that only the academy would not really mature. My task, initially, was to pass every
      platform they had to the React library, because according to them it was very high in the market. I had
      already studied HTML, CSS and a little Javascript that ended up being the most important. In the beginning
      it was very difficult, because the way that was programmed using React Js was totally different from the
      conventional way, time passed and I started to get the hang of it, until one day I was already good in
      the business. There I had the opportunity to work with tables and charts, something that I found very
      complicated at first, because it was not just creating inputs and buttons and submitting a form. There
      was a lot of financial data from companies involved in these tables and charts, so any mistake I made
      could erase all that data.
      </p>

      <p>&nbsp;&nbsp;It was in this first stage that I started to have a vision more for the entrepreneurial side, I realized
      that having a company was not as simple a task as I imagined. Working in a Startup around many other Startups
      was an incredible experience, there was no separate barrier in departments that a conventional company has.
      I had the opportunity to see and follow the lives of the entrepreneurs who were struggling and struggling
      to succeed. As the internship was at Inatel's Incubator, there were many other companies, so I always
      saw Partners making pitches (I had no idea what it was) for other people, I saw them negotiating
      with clients, taking clients' spurs, making mistakes , correcting mistakes and everything that an
      entrepreneur does on a daily basis.
      </p>
    </div>
  )
}

const projects = {
  title: "Projects",
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
      <p>&nbsp;&nbsp; Aurem Genus is one of Aurem's ideas, this project uses voice recognition to
      capture the teacher's speech in a classroom and transcribe it on screen, so that a student
      with deaf or hearing loss can follow the class. In this one, I was responsible for the
      entire Web developer, using React Js on the front end and Node Js with Express and
      Sequelize ORM for MySQL on the back end.
      </p>

      <h4 style={{ color: "grey", fontWeight: "bold", marginTop: 20 }}>
        <a href="https://centralmodas-frontend-web.herokuapp.com/" rel="noopener noreferrer" target="_blank">
          Central Modas
        </a>
      </h4>
      <p>&nbsp;&nbsp; Central Modas é um e-commerce que inicialmente era para ser feito para
      uma loja especifica, porém a ideia foi estendida para várias lojas. Então qualquer
      pessoa que tenha uma loja, pode se cadastrar no site e vender o que quiser. Neste
      projeto eu fiquei responsável pelo desenvolvimento fullstack, utilizando React Js
      no front-end e Node Js com Express e Sequelize ORM para MySQL no back-end.
      </p>

      <h4 style={{ color: "grey", fontWeight: "bold", marginTop: 20 }}>
        <a href="https://look.fiscoserv.com.br/" rel="noopener noreferrer" target="_blank">
          Fiscoserv Website
        </a>
      </h4>
      <p>&nbsp;&nbsp; A plataforma da Fiscoserv realiza através de conceitos de Business Analytics
      cruzamento de dados do cenário atual das empresas com indicadores do mercado, auxilia
      na tomada de decisões, nas estratégias de venda, estoque, fornecedores, etc. E utiliza
      Inteligência Artificial para gerar insights, diagnósticos e previsões de resultados
      e custo da empresa, que permitem uma perspectiva futura para um melhor planejamento
      do negócio. Neste eu fiquei responsável por desenvolver todo front-end da aplicação
      que foi desenvolvido utilizando a biblioteca ReactJs.
      </p>

      <h4 style={{ color: "grey", fontWeight: "bold", marginTop: 20 }}>
        <a href="https://github.com/alexanderaugusto/MyPets" rel="noopener noreferrer" target="_blank">
          Fetin 2019 - My pets
        </a>
      </h4>
      <p>&nbsp;&nbsp; MyPets era para ser um jeito simples e prático para realizar agendamento em
      PetShops. Muitas vezes os donos dos animais não tem tempo para levar o animalzinho para uma
      consulta ou para um banho e tosa, então com o nosso sistema eles poderiam agendar com um
      simples toque. O sistema era dividido em dois: Um software que ficaria com o PetShop,
      neste eles poderiam agendar consultas, ver tudo que está agendado, receber notificações
      de agendamentos, e todas as demais coisas que eles já fazem hoje em dia. O outro seria um
      aplicativo que ficaria com os clientes do PetShop, neste os clientes poderiam agendar as
      consultas sem sair da casa e teria até a opção do PetShop buscar o animal em casa. Neste eu
      fiquei responsável pelo desenvolvimento do aplicativo que foi desenvolvido usando a biblioteca
      React Native com o banco de dados Firebase.
      </p>
      <h4 style={{ color: "grey", fontWeight: "bold", marginTop: 20 }}>
        <a href="https://github.com/alexanderaugusto/Swerts-Store" rel="noopener noreferrer" target="_blank">
          Swerts Store
        </a>
      </h4>
      <p>&nbsp;&nbsp; Swerts Store é um software desktop desenvolvido para conclusão das matérias de
      Programação Orientada a Objetos e Banco de Dados. É uma simulação de um e-commerce,
      nele os vendedores podem cadastrar produtos e ver o estoque deles, enquanto que os clientes
      podem ver os produtos e comprar o que quiserem. Neste eu fiquei responsável pelo desenvolvimento
      de todo projeto, juntamente com os outros dois integrantes do grupo Vanessa e Renan, e nele
      utilizamos o Java para desenvolver o software e para armazenar os dados utilizando o MySQL.
      </p>
      <h4 style={{ color: "grey", fontWeight: "bold", marginTop: 20 }}>
        <a href="https://github.com/alexanderaugusto/Pokemon-Web" rel="noopener noreferrer" target="_blank">
          Pokemon Online - Test
        </a>
      </h4>
      <p>&nbsp;&nbsp; Este foi o primeiro projeto que desenvolvi quando comecei a estudar sobre
      desenvolvimento web. A ideia era pegar um site de Poketibia, na época eu escolhi o OT Pokémon
      e reproduzir ele, com os meus designers e com o meu jeito de desenvolver. Neste eu utilizei
      o desenvolvimento web clássico, HTML, CSS, Javascript e JQuery.
      </p>
    </div>
  )
}


export {
  jobTimeline,
  academic,
  job,
  projects
}