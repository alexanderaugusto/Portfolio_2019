import React from 'react'

import centralModas from '../assets/img/central_modas_2.PNG'
import aurem from '../assets/img/aurem.PNG'
import fiscoserv from '../assets/img/fiscoserv.PNG'
import myPets from '../assets/img/my_pets.jpg'

import myPetsDownload from '../assets/doc/my_pets.apk'

const plans = [
  {
    title: "Web Developer",
    subtitle: "Front-end",
    features: {
      left: ["HTML", "CSS", "JavaScript", "React Js", "."],
      right: ["Bootstrap", "Git", "Bitbucket", "GitHub", "."]
    },
    icon: "fas fa-code",
    color: "warning"
  },
  {
    title: "Mobile Developer",
    subtitle: "Front-end",
    features: {
      left: ["JavaScript", "React Native", "App Inventor", ".", "."],
      right: ["Git", "Bitbucket", "GitHub", ".", "."]
    },
    icon: "fas fa-mobile-alt",
    color: "info"
  },
  {
    title: "Desktop Developer",
    subtitle: "Front-end",
    features: {
      left: ["Java", "JavaScript", "Electron", "React Js", "."],
      right: ["Material-ui", "Git", "Bitbucket", "GitHub", "."],
    },
    icon: "fas fa-desktop",
    color: "primary"
  },
  {
    title: "API Developer",
    subtitle: "Back-end",
    features: {
      left: ["JavaScript", "Node Js", "Sequelize ORM", "MySQL", "MongoDB"],
      right: ["Firebase", "Git", "Bitbucket", "GitHub", "."]
    },
    icon: "fas fa-server",
    color: "success"
  },
  {
    title: "Other service",
    subtitle: "Anu technological service",
    features: {
      left: ["Data Analytics", "Artificial Intelligence", "Excel", ".", "."],
      right: ["PCI Designer", "Microcontroller", "Shipped", ".", "."]
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
      <p>Central Modas is an e-commerce that was initially meant to be made for
      a specific store, but the idea was extended to several stores. So any
      person who has a store, you can register on the website and sell whatever you want. In this
      project I was responsible for fullstack development, using React Js
      on the front-end and Node Js with Express and Sequelize ORM for MySQL on the back-end.
      </p>
    )
  },
  {
    img: aurem,
    link: 'https://aurem.com.br/',
    description: (
      <p>Aurem Genus is one of Aurem's ideas, this project uses voice recognition to
      capture the teacher's speech in a classroom and transcribe it on screen, so that a student
      with deaf or hearing loss can follow the class.
      </p>
    )
  },
  {
    img: fiscoserv,
    link: 'https://look.fiscoserv.com.br/',
    description: (
      <p>The Fiscoserv platform uses Business Analytics concepts
      crossing data from the current scenario of companies with market indicators, helps
      in decision making, sales strategies, inventory, suppliers, etc. And uses
      Artificial Intelligence to generate insights, diagnostics and predictions of results
      and cost of the company, which allow a future perspective for better planning
      of business. In this I was responsible for developing the entire front-end of the application
      which was developed using the ReactJs library.
      </p>
    )
  },
  {
    img: myPets,
    link: myPetsDownload,
    description: (
      <p>MyPets was supposed to be a simple and practical way to schedule in
      PetShops. Often pet owners do not have time to take the pet for a walk.
      consultation or for a bath and grooming, then with our system they could schedule with a
      simple touch. The system was divided into two: A software that would be with the PetShop,
      in this they could schedule appointments, see everything that is scheduled, receive notifications
      scheduling, and all the other things they already do today. The other would be a
      application that would be with the PetShop customers, in this the customers could schedule the
      consultations without leaving the house and would even have the option of the PetShop to pick up the pet at home. In this I
      I was responsible for developing the application that was developed using the library
      React Native with the Firebase database.
      </p>
    )
  }
]

export {
  plans,
  myProjects
}