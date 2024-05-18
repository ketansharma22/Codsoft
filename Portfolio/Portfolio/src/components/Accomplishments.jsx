import React from "react";
import "../styling/Accomplishments.css";
import group from "../styling/images/group.jpeg";
import codninja from '../styling/images/codingninja.png'
function Accomplishments() {
  return (
    <div id="accomplishments">
      <div id="leftdiv">
        <div id="leftmain">
          <a
            id="href"
            href="https://www.linkedin.com/posts/ketansharma22_itsengineeringcollege-hackathon-teamwork-activity-7197124368848601089-2Ztj?utm_source=share&utm_medium=member_desktop"
          >
            <img id="groupp" src={group} />
          </a>
          <div id="textwalaleft">
            <p id="paraleft">
              Succesfully secured Rank 5 among 300+ teams at Innocodethon
              Hackathon organised at ITS engineering college (May,2024){" "}
            </p>
          </div>
        </div>
      </div>
      <div id="rigthdiv">
        <div id="rigthmain">
          <a id='href' href="https://www.naukri.com/code360/profile/Ketan_s">
            <img id="imagerigth" src={codninja} />
          </a>
          <div id="textrigth">
            <p id="pararigth">
              Solved 130+ coding problems on online platforms !!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accomplishments;
