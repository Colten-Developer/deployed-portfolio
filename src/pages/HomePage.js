
import React from "react";
import headshot from '../images/headshot.jpg'
import "../pagesCss/HomePage.css"


//Defines the main layout of the application.

function HomePage() {
  return (
        <div className = "colors" id = 'Home'>
            <div>
                <br></br>
                <div className="flex-container">
                    <div className="flex-item-picture">
                        <img src={headshot} alt="colten's Headshot"></img>
                    </div>
                    <div className="flex-item-paragraph">
                        <p>
                            Howdy everybody, I am
                        </p>
                        <h2>
                            Colten Ginnis
                        </h2>
                        <h3>
                            Software Engineer
                        </h3>
                        <p>
                            I enjoy building anything from a small business site to interactive web apps.
                            While I am currently based in Houston, Texas, I help build websites for people all over the world!
                            Over the years as a programmer I have tackled dozens of unique challenges and am ready for my next adventure as a Software Engineer!
                        </p>
                        <h3>Top Technologies:</h3>
                        <div class = 'meter'>
                            <span class = 'javascript'>Javascript</span>
                        </div>
                        <div class = 'meter'>
                            <span class = 'react '>React</span>
                        </div>
                        <div class = 'meter'>
                            <span class = 'postgresSQL'>PostgresSQL</span>
                        </div>
                        <div class = 'meter'>
                            <span class = 'node'>Node.JS</span>
                        </div>
                    </div>
                </div>
            </div>
            <br></br>
        </div>
  );
}

export default HomePage;
