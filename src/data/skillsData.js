import I_HTML from "../images/skills/html-icon.png";
import I_CSS3 from "../images/skills/css-icon.png";
import I_ACCESSIBILITY from "../images/skills/accessibility.jpg";
import I_BOOTSTRAP from "../images/skills/bootstrap-icon.png";
import I_JAVASCRIPT from "../images/skills/javascript-icon.jpg";
import I_TYPESCRIPT from "../images/skills/typescript-icon.png";
import I_REACT from "../images/skills/reactjs-icon.png";
import I_REACT_BOOTSTRAP from "../images/skills/react-bootstrap-icon.png";
import I_REACT_ROUTER from "../images/skills/react-router.png";
import I_REACT_NATIVE from "../images/skills/react-native.png";
import I_REDUX from "../images/skills/redux-icon.jpg";
import I_SASS from "../images/skills/sass-icon.png";
import I_NODEJS from "../images/skills/nodejs-icon.png";
import I_EXPRESS from "../images/skills/express-icon.png";
import I_RESTAPI from "../images/skills/restapi-icon.png";
import I_NETLIFY from "../images/skills/netlify-icon.png";
import I_GITHUB_PAGES from "../images/skills/github-pages-icon.jpg";
import I_HEROKU from "../images/skills/heroku-icon.png";
import I_MONGODB from "../images/skills/mongodb-icon.png";
import I_FIREBASE from "../images/skills/firebase-icon.jpg";
import I_SQL from "../images/skills/sql-icon.png";
import I_GIT from "../images/skills/git-icon.png";
import I_NPM from "../images/skills/npm-icon.png";
import I_YARN from "../images/skills/yarn-icon.jpg";
import I_CCNA from "../images/skills/ccna-icon.jpg";
import I_SECURITY from "../images/skills/ccna-security-icon.png";
import I_AWS from "../images/skills/aws-icon.png";
import I_PostgreSQL from "../images/skills/postgresql.png";
import I_Bash from "../images/skills/bash.png";
import I_Docker from "../images/skills/docker.png";
import I_GithubActions from "../images/skills/githubActions.png";
import I_Kubernetes from "../images/skills/kubernetes.png";
import I_Azure from "../images/skills/azure.png";

export const skills = [
  {
    title: "Front-End",
    tech: [
      {
        link: "https://en.wikipedia.org/wiki/HTML5",
        imgAltText: "HTML5",
        imgSrc: I_HTML,
        name: "HTML5",
      },
      {
        link: "https://developer.mozilla.org/en-US/docs/Learn/Accessibility/What_is_accessibility",
        imgAltText: "Accessibility",
        imgSrc: I_ACCESSIBILITY,
        name: "ACCESSIBILITY",
      },
      {
        link: "https://www.w3schools.com/css/",
        imgAltText: "CSS3",
        imgSrc: I_CSS3,
        name: "CSS",
      },
      {
        link: "https://getbootstrap.com/docs/4.6/getting-started/introduction/",
        imgAltText: "Bootstrap",
        imgSrc: I_BOOTSTRAP,
        name: "Bootstrap",
      },
      {
        link: "https://javascript.info/",
        imgAltText: "JavaScript",
        imgSrc: I_JAVASCRIPT,
        name: "JavaScript",
      },
      {
        link: "https://www.typescriptlang.org/",
        imgAltText: "TypeScript",
        imgSrc: I_TYPESCRIPT,
        name: "TypeScript",
      },
      {
        link: "https://reactjs.org/",
        imgAltText: "Reactjs",
        imgSrc: I_REACT,
        name: "React JS",
      },
      {
        link: "https://react-bootstrap.github.io/",
        imgAltText: "React Bootstrap",
        imgSrc: I_REACT_BOOTSTRAP,
        name: "React Bootstrap",
      },
      {
        link: "https://reactrouter.com/",
        imgAltText: "React Router",
        imgSrc: I_REACT_ROUTER,
        name: "React Router",
      },
      {
        link: "https://redux.js.org/",
        imgAltText: "Redux",
        imgSrc: I_REDUX,
        name: "Redux",
      },
      {
        link: "https://sass-lang.com/",
        imgAltText: "Sass",
        imgSrc: I_SASS,
        name: "Sass",
      },
    ],
  },
  {
    title: "Package Manager",
    tech: [
      {
        link: "https://www.npmjs.com/",
        imgAltText: "Npm",
        imgSrc: I_NPM,
        name: "NPM",
      },
      {
        link: "https://yarnpkg.com/",
        imgAltText: "Yarn",
        imgSrc: I_YARN,
        name: "Yarn",
      },
    ],
  },
  {
    title: "Back-End",
    tech: [
      {
        link: "https://nodejs.org/en/",
        imgAltText: "Nodejs",
        imgSrc: I_NODEJS,
        name: "Node JS",
      },
      {
        link: "https://en.wikipedia.org/wiki/Express.js",
        imgAltText: "Express",
        imgSrc: I_EXPRESS,
        name: "Express",
      },
      {
        link: "https://www.tutorialspoint.com/nodejs/nodejs_restful_api.htm",
        imgAltText: "RestAPI",
        imgSrc: I_RESTAPI,
        name: "RestAPI",
      },
    ],
  },
  {
    title: "DevOps",
    tech: [
      {
        link: "https://en.wikipedia.org/wiki/Bash_(Unix_shell)",
        imgAltText: "Bash",
        imgSrc: I_Bash,
        name: "Bash",
      },
      {
        link: "https://www.docker.com/",
        imgAltText: "Docker",
        imgSrc: I_Docker,
        name: "Docker",
      },
      {
        link: "https://github.com/features/actions",
        imgAltText: "Github Actions",
        imgSrc: I_GithubActions,
        name: "Github Actions",
      },
      {
        link: "https://kubernetes.io/",
        imgAltText: "Kubernetes",
        imgSrc: I_Kubernetes,
        name: "Kubernetes",
      },
    ],
  },
  {
    title: "Database",
    tech: [
      {
        link: "https://www.mongodb.com/",
        imgAltText: "MongoDB",
        imgSrc: I_MONGODB,
        name: "MongoDB",
      },
      {
        link: "https://www.w3schools.com/sql/",
        imgAltText: "SQL",
        imgSrc: I_SQL,
        name: "SQL",
      },
      {
        link: "https://www.postgresql.org/",
        imgAltText: "PostgreSQL",
        imgSrc: I_PostgreSQL,
        name: "POSTGRESQL",
      },
      {
        link: "https://firebase.google.com/",
        imgAltText: "Firebase",
        imgSrc: I_FIREBASE,
        name: "Firebase",
      },
    ],
  },
  {
    title: "Cloud Services",
    tech: [
      {
        link: "https://aws.amazon.com/",
        imgAltText: "AWS",
        imgSrc: I_AWS,
        name: "AWS",
      },
      {
        link: "https://azure.microsoft.com/en-us/",
        imgAltText: "Microsoft Azure",
        imgSrc: I_Azure,
        name: " Microsoft Azure",
      },
    ],
  },
  {
    title: "Mobile",
    tech: [
      {
        link: "https://reactnative.dev/",
        imgAltText: "React Native",
        imgSrc: I_REACT_NATIVE,
        name: "React Native",
      },
    ],
  },
  {
    title: "Version Control",
    tech: [
      {
        link: "https://git-scm.com/",
        imgAltText: "Git",
        imgSrc: I_GIT,
        name: "Git",
      },
    ],
  },
  {
    title: "Hosting Platforms",
    tech: [
      {
        link: "https://www.netlify.com/",
        imgAltText: "Netlify",
        imgSrc: I_NETLIFY,
        name: "Netlify",
      },
      {
        link: "https://heroku.com/",
        imgAltText: "Heroku",
        imgSrc: I_HEROKU,
        name: "Heroku",
      },
      {
        link: "https://pages.github.com/",
        imgAltText: "Github Pages",
        imgSrc: I_GITHUB_PAGES,
        name: "GitHub Pages",
      },
    ],
  },
  {
    title: "Other Knowledge",
    tech: [
      {
        link: "https://en.wikipedia.org/wiki/CCNA",
        imgAltText: "CCNA",
        imgSrc: I_CCNA,
        name: "Networking",
      },
      {
        link: "https://www.cisco.com/c/dam/en_us/training-events/netacad/course_catalog/docs/CCNAsecurity_DS.pdf",
        imgAltText: "CCNA Security",
        imgSrc: I_SECURITY,
        name: "CCNA Security",
      },
    ],
  },
];
