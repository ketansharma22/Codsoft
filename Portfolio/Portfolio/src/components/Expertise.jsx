import React, { useState } from "react";
import "../styling/Expertise.css";
import react from "../styling/react.webp";
import js from "../styling/js.svg";
import node from "../styling/node.svg";
import tailwind from "../styling/tailwind.png";
import html from "../styling/html5.svg";
import css from "../styling/css.svg";
import firebase from "../styling/firebase.png";
import git from "../styling/git.png";
import mysql from "../styling/mysql.png";
import redux from "../styling/redux.png";

function Expertise() {
  const [selected, setSelected] = useState(null);
  const [descc, setDescc] = useState("");
  const [name, setName] = useState("Click icons to learn more ");
  const arr = [
    {
      id: 1,
      name: "html",
      image: html,
      desc: "The foundation of the web, and I like to keep my structures sturdy. I've always said, Life without HTML is like writing a story without words.",
    },
    {
      id: 2,
      name: "css",
      image: css,
      desc: "Styling isn't just for fashion; it's for websites too! My CSS skills are so sharp, I sometimes wonder if I missed my calling as a stylist.",
    },
    {
      id: 3,
      name: "js",
      image: js,
      desc: "While some are searching for the meaning of life, I'm here searching for the missing semicolon. JS keeps me on my toes, ensuring I never miss a beat (or a bracket).",
    },
    {
      id: 4,
      name: "react",
      image: react,
      desc: "I like to think of myself as a bit 'reactive'. Thanks to React, I'm breaking UIs into components faster than you can say 'usestate()'",
    },
    {
      id: 5,
      name: "firebase",
      image: firebase,
      desc: "Firebase literally fires up the project",
    },
    {
      id: 6,
      name: "node",
      image: node,
      desc: "With Node.js in my toolkit, I don't just hang around the 'event loop.' I dive deep into the backend, ensuring everything runs smoothly. After all, why merely 'node' your head in appreciation when you can have a full-on back-end jam session? 🎸🖥️",
    },
    {
      id: 7,
      name: "tailwind",
      image: tailwind,
      desc: "Some need a compass to navigate, I just need my Tailwind. Building responsive designs faster than the wind can blow.",
    },
    {
      id: 8,
      name: "git",
      image: git,
      desc: "I'm so in sync with Git, every time I commit, even my coffee knows it's time for a break. And remember, always be committing!",
    },
    {
      id: 9,
      name: "redux",
      image: redux,
      desc: "They call me the state manager. With Redux by my side, I ensure my apps' states are more organized than a librarian with OCD.",
    },
    {
      id: 10,
      name: "mysql",
      image: mysql,
      desc: "Whenever data gets rowdy, I use MySQL to keep things structured. Tables turn, queries fly, but with MySQL, my data's never shy. Remember, when it comes to databases, I've always got the right joins and relations! 😉",
    },
  ];
  const handleClick = (index, descc, namee) => {
    setSelected(index);
    setDescc(descc);
    setName(namee);
  };

  return (
    <div id="expertise" >

      <div id="box">
        <>
          {arr.map((image) => (
            <img
              onClick={() => handleClick(image.id, image.desc, image.name)}
              id="iconss"
              src={image.image}
              key={image.id}
            />
          ))}
        </>
      </div>
      <div id="info">
        <h2 id="skillname">{name}</h2>
        <div id="description">{descc}</div>
      </div>
    </div>
  );
}

export default Expertise;
