/* eslint-disable */
import "bootstrap";
import "./style.css";

const subject = [
  "The dog",
  "My grandma",
  "Madonna",
  "Barack Obama",
  "Augusto Pinochet"
];
const verb = [
  "devoured",
  "eternally doomed",
  "stared too strongly at",
  "anihilated",
  "deleted from existance"
];
const victim = [
  "all programmers",
  "my mother",
  "my left airpod",
  "Diego Armando Maradona",
  "all chances of survival"
];
const complement = [
  "right before I hopped into the couch",
  "while I was having my breakfast",
  "exactly 2 minutes and 47 seconds before the death of Queen Elizabeth",
  "because I didn't pray enough last month",
  "as if it was the most important thing ever to be done"
];

window.onload = () => {
  let chosenSubject = subject[Math.floor(Math.random() * 5)];
  let chosenVerb = verb[Math.floor(Math.random() * 5)];
  let chosenVictim = victim[Math.floor(Math.random() * 5)];
  let chosenComplement = complement[Math.floor(Math.random() * 5)];
  document.querySelector("#excuse").innerHTML =
    chosenSubject +
    " " +
    chosenVerb +
    " " +
    chosenVictim +
    " " +
    chosenComplement +
    ".";
};
