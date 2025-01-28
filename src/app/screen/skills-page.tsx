"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

import "../@ui/styles/skills-page-style.css";
import { skillslogos } from "../helper/data";

interface Logo {
  name: string;
  url: string;
}

const Skills: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className='skills-page'>
      <div className='heading'>
        <h1 className='compnent-title-style'>TECH STACK</h1>
      </div>

      <div className='icons-container'>
        {skillslogos.map((logo: Logo, index: number) => (
          <div
            className={`icon icon-${index + 1}`}
            key={index}
            style={{
              transform:
                scrollY > 200
                  ? `translateY(${Math.max(-50, 50 - scrollY / 5)}px)`
                  : "translateY(100px)",
              opacity: scrollY > 200 ? 1 : 0,
              transition: `all 0.5s ease-out ${index * 0.1}s`,
            }}
          >
            <Image src={logo.url} alt={logo.name} width={50} height={50} />
            <p>{logo.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
