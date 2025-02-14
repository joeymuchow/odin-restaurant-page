import "./styles.css";
import createHomeContent from "./home";
import createContactContent from "./contact";
import createMenuContent from "./menu";

const home = document.querySelector(".home");
home.addEventListener("click", createHomeContent);

const menu = document.querySelector(".menu");
menu.addEventListener("click", createMenuContent);

const contact = document.querySelector(".contact");
contact.addEventListener("click", createContactContent);

createHomeContent();