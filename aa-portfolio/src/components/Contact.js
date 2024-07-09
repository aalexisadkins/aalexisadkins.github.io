// src/Contact.js
import React from 'react';
import './style.css'; // Assuming your CSS is in App.css or adjust the path accordingly

const Contact = () => {
  return (
    <div>
      <nav>
        <p><a href="/">About Alexis Adkins</a></p>
      </nav>
      <h1>Contact Alexis Adkins</h1>
      <p>
        7321 Riverwalk Dr. <br />
        Douglasville, GA 30135 <br />
      </p>
      <p>6786292650</p>
      <hr />
      <div className="one-col">
        <div className="card">
          <form action="mailto:ana04657@uga.edu" method="post">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
            <br />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
            <br />
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="2" cols="30" />
            <br />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
      <footer>
        <p><a href="/"> &copy;Alexis Adkins</a></p>
      </footer>
    </div>
  );
};

export default Contact;
