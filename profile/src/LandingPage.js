import React from 'react';
import './landing.css';

function Landing() {
  return (
    <div className="landing">
      <header className="header">
        <h1 className="title">Welcome to our site</h1>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#features">Features</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <main className="main">
        <section className="about" id="about">
          <h2 className="section-title">About Us</h2>
          <p className="section-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Integer luctus malesuada efficitur. Sed velit velit,
            faucibus non ante sit amet, laoreet placerat sapien.
          </p>
        </section>
        <section className="features" id="features">
          <h2 className="section-title">Our Features</h2>
          <ul className="feature-list">
            <li className="feature-item">Feature 1</li>
            <li className="feature-item">Feature 2</li>
            <li className="feature-item">Feature 3</li>
          </ul>
        </section>
        <section className="contact" id="contact">
          <h2 className="section-title">Contact Us</h2>
          <form className="contact-form">
            <input
              type="text"
              placeholder="Name"
              className="contact-input"
            />
            <input
              type="email"
              placeholder="Email"
              className="contact-input"
            />
            <textarea
              placeholder="Message"
              className="contact-input"
            ></textarea>
            <button type="submit" className="contact-button">
              Send
            </button>
          </form>
        </section>
      </main>
      <footer className="footer">
        <p className="copyright">
          Copyright &copy; {new Date().getFullYear()} Our Site
        </p>
      </footer>
    </div>
  );
}

export default Landing;
