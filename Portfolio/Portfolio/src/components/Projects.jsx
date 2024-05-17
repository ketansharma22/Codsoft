import React from "react";
import "../styling/Projects.css";

import vajra from "../styling/images/vajra.png";
import random from "../styling/images/randomgif.png";
import bubble from "../styling/images/bubble.png";
import weather from "../styling/images/weather.png";
import pass from "../styling/images/pass.png";
function Projects() {
  const arr = [
    {
      id: 1,
      name: "Vajra",
      desc:"vajra predicts wheather the person will have a heart attack in few minutes by measuring their BPM,SpO2,body temperature and more!!!",
      image: vajra,
      link: "https://theuselessweb.com/",
      stack:"(ReactJS,Firebase,CSS,Python,FastAPI,ML)"
    },
    {
      id: 2,
      name: "Mausamii",
      desc:"mausamii is a sleek and intuitive web application designed to provide users with real-time weather updates and forecasts",
      image: weather,
      link: "https://mausamii.vercel.app/",
      stack:"(HTML,CSS,Javascript)"
    },
    {
      id: 3,
      name: "BubbleGame",
      desc:"A pure javascript based  bubble game focuses to improve your focus by playing it in your free time!!",
      image: bubble,
      link: "https://bubble-game-eight-pi.vercel.app/",
      stack:"(HTML,CSS,Javascript)"
    },
    {
      id: 4,
      name: "Giffy",
      desc:"A simple react based web project which generates a random gif or any particular gif based on user's choice!!",
      image: random,
      link: "https://giffy-one.vercel.app/",
      stack:"(ReactJS,CSS)"
    },
    {
      id: 5,
      name: "PasswordGenerator",
      desc:"A very basic password generator react mini project to learn about some hooks like useState , useCallback , useEffect for beginners!!!",
      image: pass,
      link: "https://pass-puss.vercel.app/",
      stack:"(ReactJS,CSS)"
    },
  ];

  return (
    <div id="projects">
      <div id="projectbox">
        {arr.map((obj) => (
          <div id="objj">
            
              <img id="objimage" src={obj.image}></img>
          
            <div id="middle">
              <h2 id="texxt">{obj.name}</h2>
              <p id="para">{obj.desc} <br/><br/>{obj.stack}</p>
            </div>
            <button id="click" ><a href={obj.link}>View</a></button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
