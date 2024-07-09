// src/Home.js
import React from 'react';
import './style.css'; 
import alexisHeadshot from '../images/alexis2024headshot.jpeg';

const Home = () => {
  return (
    <div>
      <nav>
        <p><a href="/contact">Contact Alexis Adkins</a></p>
      </nav>

      <section className="splash">
        <h1>Alexis Adkins</h1>
        <h2>Computer Science Student at UGA</h2>
        <img
          src="https://images.unsplash.com/photo-1600206287932-4b8888bd78f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          width="200px"
          alt="website photo"
          className="image1"
        />
        <img
          src="https://images.unsplash.com/photo-1542708993627-b6e5bbae43c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2044&q=80"
          width="200px"
          alt="website photo"
          className="image2"
        />
      </section>

      <section className="content">
      
      <img src={alexisHeadshot} width="200px" alt="Alexis Adkins Headshot" className="head" />
        <h2>Hello</h2>
        <p>
          I am a 4th year computer science major from Douglasville, GA, with a passion in coding and UI design. I'm interested in pursuing a
          masters degree in Artificial Intelligence.
        </p>
        <hr />
      </section>

      <section className="middle">
        <h2>About Alexis Adkins</h2>
        <div className="three-col">
          <div className="card">
            <img
              src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              width="100%"
              alt="Languages photo"
            />
            <h3>Languages</h3>
            <ul>
              <li>Java</li>
              <li>Python</li>
              <li>C/C++</li>
              <li>MATLAB</li>
            </ul>
          </div>
          <div className="card">
            <img
              src="https://images.pexels.com/photos/6114991/pexels-photo-6114991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              width="100%"
              alt="Leadership photo"
            />
            <h3>Leadership and Experience</h3>
            <dl>
              <dt>August 2022 - Present</dt>
              <dd><a href="https://housing.uga.edu/student-leadership/?nav=ps">University Housing C.L.A.S.S Advocate</a></dd>
              <dt>August 2022 - Present</dt>
              <dd>UGA Student Transition Leader</dd>
              <dt>November 2022- January 2024</dt>
              <dd>UGA New Student Orientation Leader</dd>
            </dl>
          </div>
          <div className="card">
            <img
              src="https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              width="100%"
              alt="Skills photo"
            />
            <h3>Skills</h3>
            <dl>
              <dt>Leadership</dt>
              <dd>🔥🔥🔥🔥🔥</dd>
              <dt>Software Development</dt>
              <dd>🔥🔥🔥🔥</dd>
              <dt>Organization</dt>
              <dd>🔥🔥🔥🔥</dd>
              <dt>Fostering Community</dt>
              <dd>🔥🔥🔥🔥</dd>
              <dt>Public Speaking</dt>
              <dd>🔥🔥🔥🔥🔥</dd>
            </dl>
          </div>
        </div>
      </section>
      <footer>
        <p><a href="/contact"> &copy;Alexis Adkins</a></p>
      </footer>
    </div>
  );
};

export default Home;
