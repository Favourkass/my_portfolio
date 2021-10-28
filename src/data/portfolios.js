import carzone from "../img/carzone.png";
import hotelbooking from "../img/hotelbooking.png";
import devprimebackend from "../img/devprimebackend.png";
import devprimefrontend from "../img/devprime-frontend.png";
import xspensr from "../img/xspensr.png";

const portfolios = [
  {
    id: 1,
    category: "Django",
    image: hotelbooking,
    source: "https://github.com/decadevs/week-8-task-python-team-omega.git",
    visit: "https://omegahms.herokuapp.com/",
    title: "Sheraton Hotel Booking",
    tags: ["Python", "Django", "Javascript", "CSS", "Paystack api"],
    description:
      "A hotel booking website for Sheraton hotels in Lagos, Nigeria. The website is built using Django monolitic application and uses paystack api to process payments. The website is hosted on Heroku.",
  },
  {
    id: 2,
    category: "DjangoRestFramework",
    image: devprimebackend,
    source: "https://github.com/Favourkass/Devsprime-api",
    visit: "https://devsprime.herokuapp.com/swagger",
    title: "Dev Prime E-learning Backend",
    tags: ["DjangoRest", "Python", "Docker", "CICD"],
    description:
      "A backend api for a e-learning platform. The api is built using Django Rest Framework and uses Docker to run the backend on Heroku. The api is hosted on Heroku.",
  },
  {
    id: 3,
    category: "Reactjs",
    image: devprimefrontend,
    source: "https://github.com/Favourkass/Devsprime",
    visit: "https://devsprime.netlify.app/",
    title: "Dev Prime E-learning Frontend",
    tags: ["React", "Redux", "styled components", "Javascript"],
    description:
      "A frontend for a e-learning platform. The frontend is built using React and Redux. The frontend is hosted on Netlify.",
  },
  {
    id: 4,
    category: "Django",
    image: carzone,
    source: "https://github.com/Favourkass/carzone-gitproject",
    visit: "https://afternoon-savannah-09084.herokuapp.com/",
    title: "Carzone Web Application",
    tags: ["Django", "HTML", "CSS", "Javascript", "Bootstrap"],
    description:
      "A web application for listing and selling reused cars. The web application is built using Django and uses Bootstrap for styling. The web application is hosted on Heroku.",
  },
  {
    id: 5,
    category: "Reactjs",
    image: xspensr,
    source: "https://github.com/Favourkass/xpensr.git",
    visit: "https://xpens0r.netlify.app/",
    title: "Expense Tracker React App",
    tags: ["react", "redux", "CSS", "Javascript", "Bootstrap"],
    description:
      "A web application for tracking expenses. The web application is built using React and uses Bootstrap for styling. The web application is hosted on Netlify.",
  },
];

export default portfolios;
