import { createGlobalStyle } from "styled-components";

const GlobalCSS = createGlobalStyle`
/* Font Imports */
@import url("https://fonts.googleapis.com/css?family=Open+Sans|Roboto:400,700&display=swap");

/*Root Styling*/

:root {
  --clr-primary-1: hsl(231, 99%, 66%);
  --clr-primary-2: hsl(230, 84%, 25%);
  --clr-primary-3: hsl(230, 81%, 29%);
  --clr-primary-4: hsl(231, 77%, 34%);
  --clr-primary-5: #536dfe;
  --clr-primary-6: hsl(231, 57%, 50%);
  --clr-primary-7: hsl(230, 65%, 59%);
  --clr-primary-8: hsl(230, 80%, 74%);
  --clr-primary-9: hsl(231, 94%, 87%);
  --clr-primary-10: hsl(232, 100%, 94%);
  --clr-grey-1: hsl(209, 61%, 16%);
  --clr-grey-3: hsl(209, 34%, 30%);
  --clr-grey-4: hsl(209, 28%, 39%);
  --clr-grey-5: hsl(210, 22%, 49%);
  --clr-grey-8: hsl(210, 31%, 80%);
  --clr-grey-9: hsl(212, 33%, 89%);
  --clr-grey-10: hsl(210, 36%, 96%);
  --clr-green-dark: hsl(125, 67%, 35%);
  --clr-red-dark: hsl(360, 67%, 44%);
  --clr-red-light: hsl(360, 71%, 66%);
  --clr-white: #fff;
  --ff-primary: "Roboto", sans-serif;
  --ff-secondary: "Open Sans", sans-serif;
  --transition: all 0.3s linear;
  --spacing: 0.2rem;
  --radius: 0.25rem;
  --light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  --dark-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  --max-width: 1170px;
  --fixed-width: 700px;
}
/*Global Styles*/

*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: var(--ff-secondary);
  background: var(--clr-white);
  color: var(--clr-grey-1);
  line-height: 1.5;
  font-size: 0.875rem;
  margin-top: 5rem;
}
ul {
  list-style-type: none;
}
a {
  text-decoration: none;
}

/*Global Headers and Text Styling*/
h1,
h2,
h3,
h4 {
  letter-spacing: var(--spacing);
  text-transform: capitalize;
  line-height: 1.25;
  margin-bottom: 0.75rem;
  font-family: var(--ff-primary);
  text-decoration: none;
}
h1 {
  font-size: 3rem;
}
h2 {
  font-size: 2rem;
}
h3 {
  font-size: 1.25rem;
}
h4 {
  font-size: 0.875rem;
  text-decoration: none;
}
p {
  margin-bottom: 1.25rem;
  color: var(--clr-grey-3);
}
/*Media Queries for Text*/

@media screen and (min-width: 800px) {
  h1 {
    font-size: 4rem;
  }
  h2 {
    font-size: 2.5rem;
  }
  h3 {
    font-size: 1.75rem;
  }
  h4 {
    font-size: 1rem;
    text-decoration: none;
  }
  body {
    font-size: 1rem;
  }
  h1,
  h2,
  h3,
  h4 {
    line-height: 1;
    text-decoration: none;
  }
}
/*  Global Classes */

.btn {
  text-transform: uppercase;
  background: var(--clr-primary-5);
  color: white;
  padding: 0.375rem 0.75rem;
  letter-spacing: var(--spacing);
  display: inline-block;
  font-weight: 900;
  -webkit-transition: var(--transition);
  transition: var(--transition);
  font-size: 1rem;
  border: 2px solid transparent;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: var(--radius);
}
.btn:hover {
  color: white;
  background: var(--clr-primary-4);
}
.center-btn {
  display: block;
  width: 12rem;
  text-align: center;
  margin: 0 auto;
  margin-top: 2rem;
}

/* Sections */
.section {
  padding: 3rem 0;
}

.section-center {
  width: 90vw;
  margin: 0 auto;
  max-width: 1170px;
}
@media screen and (min-width: 992px) {
  .section-center {
    width: 95vw;
  }
}

.underline {
  width: 5rem;
  height: 0.25rem;
  margin-bottom: 1.25rem;
  background: var(--clr-primary-5);
  margin-left: auto;
  margin-right: auto;
}
.section-title {
  margin-bottom: 1rem;
  text-align: center;
}
.bg-grey {
  background: var(--clr-grey-10);
}

/*COMPONENTS*/

/*Navbar*/
.navbar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  z-index: 200;
  background: var(--clr-white);
}
.nav-center {
  width: 90vw;
  max-width: 1170px;
  margin: 0 auto;
}
.nav-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav-header img {
  margin-bottom: 0.375rem;
  max-width: 200px;
  max-height: 80px;
  align-items: left;
}
.toggle-btn {
  font-size: 2rem;
  background: transparent;
  border-color: transparent;
  color: var(--clr-primary-5);
  cursor: pointer;
  transition: var(--transition);
}
.toggle-btn:hover {
  color: var(--clr-primary-2);
}
.nav-links {
  display: none;
}

/*Navbar Different media queries*/

@media screen and (min-width: 768px) {
  .toggle-btn {
    display: none;
  }
  .nav-links {
    display: flex;
    justify-content: flex-end;
  }

  .nav-links a {
    margin-right: 1.5rem;
    text-transform: capitalize;
    color: var(--clr-grey-1);
    font-weight: bold;
    letter-spacing: var(--spacing);
    transition: var(--transition);
    padding: 0.5rem 0;
  }
  .nav-links a:hover {
    color: var(--clr-primary-5);
    box-shadow: 0px 2px var(--clr-primary-5);
  }
  .nav-center {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
  }
}

@media screen and (min-width: 1082px) {
  .navbar {
    background: transparent;
  }
}

/*Sidebar Component*/
.sidebar {
  background: var(--clr-grey-10);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  display: grid;
  place-items: center;
  opacity: 0;
  transition: var(--transition);
  transform: translateX(-100%);
}
.show-sidebar {
  opacity: 1;
  transform: translateX(0);
}
.sidebar-links li {
  opacity: 0;
}
.sidebar-links li a {
  display: block;
  text-align: center;
  text-transform: capitalize;
  color: var(--clr-grey-5);
  letter-spacing: var(--spacing);
  margin-bottom: 0.5rem;
  font-size: 2rem;
  transition: var(--transition);
  border-radius: var(--radius);
}
.sidebar-links li a:hover {
  background: var(--clr-primary-9);
  color: var(--clr-primary-5);
}
.close-btn {
  position: absolute;
  right: 4.75%;
  top: 2.75%;
  font-size: 2.5rem;
  background: transparent;
  border-color: transparent;
  color: var(--clr-red-dark);
  cursor: pointer;
}
@media screen and (min-width: 992px) {
  .sidebar {
    transform: translateX(-100%);
  }
}
/*Sidebar Animation*/
.sidebar-links li {
  animation: slideRight 0.5s ease-in-out 0.3s forwards;
}
.sidebar-links li:nth-of-type(1) {
  animation-delay: 0.25s;
}
.sidebar-links li:nth-of-type(2) {
  animation-delay: 0.5s;
}
.sidebar-links li:nth-of-type(3) {
  animation-delay: 0.75s;
}
.sidebar-links li:nth-of-type(4) {
  animation-delay: 1s;
}
.sidebar-links li:nth-of-type(5) {
  animation-delay: 1.25s;
}
@keyframes slideRight {
  0% {
    transform: translateX(-200px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
.sidebar-icons li {
  opacity: 0;
  animation: slideUp 0.5s ease-in-out 0.3s forwards;
  text-align: center;
}
.sidebar-icons li a {
  color: var(--clr-grey-1);
}
.sidebar-icons li:nth-of-type(1) {
  animation-delay: 0.25s;
}
.sidebar-icons li:nth-of-type(2) {
  animation-delay: 0.5s;
}
.sidebar-icons li:nth-of-type(3) {
  animation-delay: 0.75s;
}
.sidebar-icons li:nth-of-type(4) {
  animation-delay: 1s;
}
.sidebar-icons li:nth-of-type(5) {
  animation-delay: 1.25s;
}
@keyframes slideUp {
  0% {
    transform: translateY(200px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

/*Hero Component*/
.hero {
  margin-top: -1.5rem;
  padding-top: 4rem;
  height: 100vh;
  background: var(--clr-primary-10);
  position: relative;
}

.hero-center {
  height: 100%;
  display: grid;
  align-items: center;
  padding-top: 1.5rem;
}

.hero .underline {
  margin-bottom: 0.5rem;
  margin-left: 0;
}
.hero-info {
  background: var(--clr-primary-10);
}
.hero-img {
  display: none;
}
.hero-info h4 {
  color: var(--clr-grey-5);
}
.hero-icons {
  justify-items: flex-start;
}
.hero .btn {
  margin-top: 1.25rem;
}

/*Different media queries*/
@media screen and (max-width: 720px) {
  .hero {
    margin-top: -1rem;
    padding-top: 1rem;
    height: 50vh;
    background: var(--clr-primary-10);
    position: relative;
  }

  .hero-center {
    height: 100%;
    display: grid;
    padding-top: 1rem;
    align-items: center;
  }

  .hero-info {
    background: var(--clr-primary-10);
    text-align: center;
    align-items: center;
  }
  .hero-centered {
    text-align: center;
    display: grid;
    place-items: center;
  }
  .hero-social {
    place-items: center;
    margin-top: 2rem;
    width: 8rem;
    display: flex;
    justify-content: space-between;
  }
}

@media screen and (min-width: 820px) {
  .hero::before {
    content: "";
    position: absolute;
    top: 0;
    left: 60%;
    right: 0;
    bottom: 0;
    background: var(--clr-white);
  }
  .hero-center {
    grid-template-columns: repeat(12, 1fr);
  }

  .hero h4 {
    font-size: 0.85rem;
  }
  .hero-info {
    grid-row: 1/1;
    grid-column: 1 / span 8;
  }
  .hero-img {
    display: block;
    grid-row: 1/1;
    grid-column: 7/-1;
  }
  .hero-social {
    place-items: center;
    margin-top: 2rem;
    width: 8rem;
    display: flex;
    justify-content: space-between;
  }
}
@media screen and (min-width: 1170px) {
  .hero h4 {
    font-size: 1rem;
  }

  .hero-info {
    grid-column: 1 / span 8;
  }

  .hero h4 {
    line-height: 1;
  }
  .hero-social {
    place-items: center;
    margin-top: 2rem;
    width: 8rem;
    display: flex;
    justify-content: space-between;
  }
}

/*
Services
*/
.service {
  background: var(--clr-white);
  padding: 3rem 1.5rem;
  margin-bottom: 2rem;
  border-radius: var(--radius);
  text-align: center;
  -webkit-transition: var(--transition);
  transition: var(--transition);
}
.service h4 {
  color: black;
}
.service-icon {
  font-size: 2rem;
  margin-bottom: 1.5rem;
}
.service-title {
  text-align: center;
  margin-bottom: 1.5rem;
}
.service .underline {
  width: 3rem;
  height: 0.12rem;
  -webkit-transition: var(--transition);
  transition: var(--transition);
}
.service p {
  -webkit-transition: var(--transition);
  transition: var(--transition);
}
.service:hover {
  background: var(--clr-primary-5);
  color: white;
}
.service:hover p {
  color: white;
}
.service:hover h4 {
  color: white;
}
.service:hover .underline {
  background: var(--clr-primary-9);
  color: white;
}
@media screen and (min-width: 676px) {
  .services-center {
    display: grid;
    grid-template-columns: 1fr 1fr;
    -webkit-column-gap: 2rem;
    -moz-column-gap: 2rem;
    column-gap: 2rem;
  }
}
@media screen and (min-width: 992px) {
  .services-center {
    grid-template-columns: 1fr 1fr;
  }
}

/*DATA AND CONSTANTS*/

/* Social links */
.social-links {
  margin-top: 2rem;
  width: 8rem;
  display: flex;
  justify-content: space-between;
}
.social-link {
  font-size: 1.75rem;
  color: var(--clr-grey-1);
  transition: var(--transition);
}
.social-link:hover {
  color: var(--clr-primary-5);
}

/*
About Page and Skill list
*/
.projects {
  background: var(--clr-grey-10);
}
.project {
  display: grid;
  margin-bottom: 2rem;
}

.about-stack span {
  display: inline-block;
  background: var(--clr-grey-9);
  color: var(--clr-grey-5);
  margin: 0.25rem;
  padding: 0.25rem 0.5rem;
  border-radius: var(--radius);
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 1rem;
  font-weight: bold;
}
.about-stack span {
  margin-top: 0.5rem;
}

.about-stack span:hover {
  color: white;
  background: var(--clr-primary-2);
}
@media screen and (min-width: 576px) {
  .project-img {
    height: 19rem;
  }
  .about-stack span {
    margin-top: 0.5rem;
  }

  .about-stack span:hover {
    color: white;
    background: var(--clr-primary-2);
  }
}
@media screen and (min-width: 768px) {
  .about-stack span {
    margin-top: 0.5rem;
  }

  .about-stack span:hover {
    color: white;
    background: var(--clr-primary-2);
  }
}
@media screen and (min-width: 992px) {
  .project {
    grid-template-columns: repeat(12, 1fr);
    align-items: center;
  }
}

/*
Footer
*/
.footer {
  height: 9rem;
  background: #222;
  text-align: center;
  display: grid;
  place-items: center;
}
.footer h4 {
  margin-top: 0.5rem;
  color: var(--clr-white);
  font-weight: normal;
  text-transform: uppercase;
}
.footer h4 span {
  color: var(--clr-primary-5);
}
.footer-links {
  margin: 0 auto 1rem auto;
}
.footer .social-link {
  color: var(--clr-white);
}
.footer .social-link:hover {
  color: var(--clr-primary-5);
}
/*
PAGES STYLES
*/

/*Pages Global Styles*/
.error-page,
.about-page,
.contact-page {
  background: var(--clr-grey-10);
  /* min-height: calc(100vh - 12rem - 12rem); */
}
.experience-page {
  background: var(--clr-grey-10);
  /* min-height: calc(100vh - 12rem - 12rem); */
}
.error-page {
  display: grid;
  place-items: center;
  background: var(--clr-primary-10);
  text-align: center;
}
.error-page h1 {
  text-transform: uppercase;
  color: var(--clr-primary-1);
  margin-bottom: 2rem;
}

/*About Page*/
.about-page {
  display: grid;
  place-items: center;
  padding: 2rem 0;
  text-align: center;
}
.about-img {
  margin-bottom: 2rem;
  height: 30rem;
  position: relative;
  text-align: center;
}
.about-img-svg {
  margin-bottom: 2rem;
  height: 25rem;
  width: 100%;
  display: block;
  text-align: center;
}
.about-text .section-title {
  margin-bottom: 2rem;
  text-align: left;
}
.about-text .underline {
  margin-left: 0;
  margin-right: 0;
}
.about-text p {
  line-height: 2;
}

@media screen and (min-width: 992px) {
  .about-center {
    display: grid;
    place-items: center;
    padding: 2rem 0;
  }
  .about-img {
    max-width: 450px;
    max-height: 600px;
  }

  .about-text {
    grid-column: 6 / -1;
  }
}
/*Contact Page*/
.contact-page {
  display: grid;
  place-items: center;
  padding: 2.5rem 0;
}
.contact-form {
  background: var(--clr-white);
  border-radius: var(--radius);
  text-align: center;
  box-shadow: var(--light-shadow);
  transition: var(--transition);
  width: 90vw;
  max-width: 35rem;
}
.contact-form:hover {
  box-shadow: var(--dark-shadow);
}
.contact-form h3 {
  padding-top: 1.25rem;
  color: var(--clr-grey-5);
}
.form-group {
  padding: 1rem 1.5rem;
}
.form-control {
  display: block;
  width: 100%;
  padding: 0.75rem 1rem;
  border: none;
  margin-bottom: 1.25rem;
  background: var(--clr-grey-10);
  border-radius: var(--radius);
  letter-spacing: var(--spacing);
}
.form-control::placeholder {
  font-family: var(--ff-primary);
  color: var(--clr-grey-1);
  text-transform: uppercase;
  letter-spacing: var(--spacing);
}
.submit-btn {
  display: block;
  width: 100%;
  padding: 1rem;
  border-bottom-left-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
  border-top-right-radius: 0;
  border-top-left-radius: 0;
}



`;

export default GlobalCSS;
