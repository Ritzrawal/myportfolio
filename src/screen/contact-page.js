import React, { link } from "react";
import "../@ui/styles/contact-page.css";

// Icon component
const Icon = ({ src, alt, link }) => (
  <a href={link}>
    <div className="icon-container">
      <img src={src} alt={alt} className="icon-social" />
    </div>
  </a>
);

const ContactPage = () => {
  return (
    <div className="icon-grid-container">
      <div className="icons-grid">
        <Icon
          src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
          alt="GitHub"
          link="https://github.com/Ritzrawal"
        />
        <Icon
          src="https://www.vikingcamps.com/wp-content/uploads/2024/01/linkedin-logo-linkedin-icon-transparent-free-png.webp"
          alt="LinkedIn"
          link="https://www.linkedin.com/in/ritesh-rawal-a18342105/"
        />
        <Icon
          src="https://en.followersnet.com/wp-content/uploads/2016/02/Facebook-1.png"
          alt="Facebook"
          link="https://www.facebook.com/ritesh.rawal.94/"
        />

        <Icon
          src="https://static.vecteezy.com/system/resources/previews/031/737/215/non_2x/twitter-new-logo-twitter-icons-new-twitter-logo-x-2023-x-social-media-icon-free-png.png"
          alt="Twitter"
          link="https://x.com/rtz_rawal"
        />
      </div>
    </div>
  );
};

export default ContactPage;
