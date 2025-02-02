"use client";
import React from "react";
// import Image from "next/image";

import "../@ui/styles/contact-page.css";
import { IconProps } from "../helper/type";

const Icon: React.FC<IconProps> = ({ src, alt, link }) => (
  <a href={link} target='_blank' rel='noopener noreferrer'>
    <div className='icon-container'>
      <img src={src} alt={alt} className='icon-social' />
    </div>
  </a>
);

const ContactPage: React.FC = () => {
  return (
    <>
      <div className='bg-blend-color-dodge'>
        <Icon
          src='https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg'
          alt='GitHub'
          link='https://github.com/Ritzrawal'
        />
        <Icon
          src='https://www.vikingcamps.com/wp-content/uploads/2024/01/linkedin-logo-linkedin-icon-transparent-free-png.webp'
          alt='LinkedIn'
          link='https://www.linkedin.com/in/ritesh-rawal-a18342105/'
        />
        <Icon
          src='https://en.followersnet.com/wp-content/uploads/2016/02/Facebook-1.png'
          alt='Facebook'
          link='https://www.facebook.com/ritesh.rawal.94/'
        />
        <Icon
          src='https://static.vecteezy.com/system/resources/previews/031/737/215/non_2x/twitter-new-logo-twitter-icons-new-twitter-logo-x-2023-x-social-media-icon-free-png.png'
          alt='Twitter'
          link='https://x.com/rtz_rawal'
        />
      </div>
    </>
  );
};

export default ContactPage;
