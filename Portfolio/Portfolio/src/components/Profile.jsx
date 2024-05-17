import React from "react";
import "../styling/Profile.css";
import wave from "../styling/wave.png";
import { useState, useEffect } from "react";
import cartoon from "../styling/me.jpg";
import github from "../styling/github.png";
import facebook from "../styling/facebook.webp";
import linkedin from "../styling/linkedin.png";
import mail from "../styling/mail.webp";
import instagram from "../styling/insta.png";
import { HashLink as Link } from "react-router-hash-link";
function Profile() {
  const messages = ["Web Developer", "Software Engineer", "UI-UX Designer"];
  const typingSpeed = 100;
  const pauseDuration = 1500;
  const [displayedText, setDisplayedText] = useState("");
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  function openResume() {
    var resumeUrl =
      "https://www.dropbox.com/scl/fi/60e0gzb2wpqfrm15vrdsw/TazaResume-1.pdf?rlkey=jht4yz3454zcy7gay1moghe38&st=hv99wl5b&dl=0";
    window.open(resumeUrl, "_blank");
  }

  useEffect(() => {
    let timeout;

    if (isTyping) {
      if (charIndex < messages[currentMessageIndex].length) {
        timeout = setTimeout(() => {
          setDisplayedText(
            (prev) => prev + messages[currentMessageIndex][charIndex]
          );
          setCharIndex((prev) => prev + 1);
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => setIsTyping(false), pauseDuration);
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayedText((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        }, typingSpeed / 2);
      } else {
        setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [
    charIndex,
    isTyping,
    messages,
    currentMessageIndex,
    typingSpeed,
    pauseDuration,
  ]);
  return (
    <div id="profile">
      <section id="left">
        <h1 id="name">
          Hii I am Ketan <img id="wave" src={wave}></img>
        </h1>
        <h1 id="changing">
          I am a <span id="spanchange">{displayedText}</span>
        </h1>
        <p id="textt">
          I like to <span>craft</span> solid and scalable <span>frontend</span>{" "}
          products with great user <span>experiences . . .</span>
          <br /> Highly <span>skilled</span> at progressive enhancement, design
          systems & <span>UI</span> Engineering.
        </p>
        <div id="icons">
          <a href="https://www.linkedin.com/in/ketansharma22/">
            <img src={linkedin} />{" "}
          </a>
          <a href="https://github.com/ketansharma22">
            <img src={github} />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100086285334758">
            <img src={facebook} />
          </a>
          <a href="mailto:kanu220504@gmail.com">
            <img src={mail} />
          </a>
          <a href="https://www.instagram.com/ketan_bakshi__/">
            <img src={instagram} />
          </a>
        </div>
        <div id="profilelast">
          <Link to="#contact">
            <button id="btnn">Contact Me</button>
          </Link>
          <button id="btnn" onClick={openResume}>See my Resume</button>
        </div>
      </section>
      <section id="rigth">
        <img id="me" src={cartoon}></img>
      </section>
    </div>
  );
}

export default Profile;
