
import React from "react";
import'../pagesCss/AboutPage.css'


//Defines the main layout of the application.

function AboutPage() {
  return (
    <div id = 'About'>
      <div>
          <h1>About me</h1>
          <section>
              <article>
                  <p>
                    Hi! I am Colten a software engineer with experience in electrical engineering, customer service, SEO, and even management! I tend to see the bigger picture when it comes to projects. Coming from a management background I understand the need for things to be done in orderly, precise, and timely manner. 
                  </p>
                  <p>
                    I started to code in High School, my first projects were simple games using Game Maker Studio and Udemy. In high school I eventually moved on to become the programming team captain of our state recognized robotics team. Once I moved on to college, I found I loved my computer science classes. Being able to process data and do advanced mathematics far faster than by hand was astonishing. Once the pandemic started, I found myself needing to find a way to continue my education online. That when I found the Thinkful program, this allowed me to easily switch my mindset from electrical engineering to full-stack development.
                  </p>
                  <p>
                    I understand the need for software to be put together cleanly from both the developer and client standpoint. When developing for the front-end I like to focus on the responsiveness of the application. This allows users seamless access to their applications from any device. When looking into back-end solutions I focus on the data. Handling data I find is the most important part of back-end development. Without proper data management nothing can be accomplished. 
                  </p>
              </article>
          </section>
      </div>
    </div>
  );
}

export default AboutPage;
