
import React from "react";
import "../pagesCss/Projects.css"
import magicRing from "../images/magicRing.jpg"
import restaurant from "../images/Restaurant.JPG"
import clock from "../images/Clock.JPG"


//Defines the main layout of the application.

function Projects() {
  return (
    <div class = 'project-color' id = 'Projects'>
        <h1>
            Featured Projects
        </h1>
        <div class = 'project-container'>
            <div class = 'project-item'>
                <h3>Restaurant Reservations</h3>
                <img src = {restaurant} alt = 'Restaurant'></img>
                <p>A detailed system allowing managers to easily and quickly create, seat, and finish reservations</p>
                <a href = 'https://github.com/Colten-Developer/Thinkful_Final_Project'>GitHub Project</a>
                <br></br>
                <a href = 'https://thinkful-final-front-end.vercel.app/dashboard?date=2021-07-20'>Website for project</a>
            </div>
            <div class = 'project-item'>
                <h3>Decoder Ring</h3>
                <img src = {magicRing} alt = 'a magical ring'></img>
                <p>A cypher encryption and decryption algorithm </p>
                <a href = 'https://github.com/Colten-Developer/decoderRingProject'>GitHub Project</a>
                <br></br>
                <a href = 'https://colten-developer.github.io/decoderRingProject/'>Website for project</a>
            </div>
            <div class = 'project-item'>
                <h3>Pomodoro Timer</h3>
                <img src = {clock} alt = 'a clock'></img>
                <p>A timer used to maximize working efficiency</p>
                <a href = 'https://github.com/Colten-Developer/PomodoroProject'>GitHub Project</a>
            </div>
        </div>
    </div>
  );
}

export default Projects;
