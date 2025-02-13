import "./styles.css";
import createHomeContent from "./home";
import createContactContent from "./contact";

const home = document.querySelector(".home");
home.addEventListener("click", createHomeContent);

const menu = document.querySelector(".menu");

const contact = document.querySelector(".contact");
contact.addEventListener("click", createContactContent);

console.log("Hello from index.js");
createHomeContent();