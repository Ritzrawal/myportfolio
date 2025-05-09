"use client";
import React from "react";

import "../@ui/styles/rletterSvg.css";

const RSvgLogo: React.FC = () => {
  return (
    <div className="logo-mask">
      <svg
        id="logo-anim"
        xmlns="http://www.w3.org/2000/svg"
        width="200"
        height="200"
        viewBox="0 0 256 256"
      >
        <g id="XMLID_10_">
          <defs>
            <path
              id="XMLID_4_"
              d="M54.9 147.2l80-70h-33.5l-80 70L122 235.3h33.5L54.9 147.2z"
            ></path>
          </defs>
          <clipPath id="XMLID_8_">
            <use href="#XMLID_4_" overflow="visible"></use>
          </clipPath>
          <linearGradient
            id="XMLID_9_"
            gradientUnits="userSpaceOnUse"
            x1="-169.589"
            y1="333.156"
            x2="21.795"
            y2="333.156"
            gradientTransform="matrix(1 0 0 -1 156 491)"
          >
            <stop offset="0" stopColor="#FF7F50"></stop>
            <stop offset="1" stopColor="#00FFFF"></stop>
          </linearGradient>
          <path
            id="XMLID_3_"
            d="M154.6 249.8L37.8 147.2c8.3-8.3 91.4-81.4 91.4-81.4"
            className="st0"
          ></path>
        </g>
        <g id="XMLID_6_">
          <g id="XMLID_7_">
            <defs>
              <path
                id="XMLID_2_"
                className="XMLID_2_"
                d="M251.1 237.4h-40l-.5-.4-102.5-89.7 1.8-1.6 34.8-31 12.2-10.4c3.9-3.2 7.4-6.2 7.8-6.8 4.8-5.8 7.3-12.8 7.3-20.4 0-17.6-14.3-31.9-31.9-31.9H4.8l25.8-26.6 114.6-.1-.2.2c29.9 2.5 53.6 27.9 53.6 58.3 0 13.4-4.8 26.7-13.5 37.2-.5.6-2.3 2.3-2.6 2.6-.3.3-1.1 1-1.1 1l-.5.4L148 147l103.1 90.4z"
              ></path>
            </defs>
            <clipPath id="XMLID_11_">
              <use href="#XMLID_2_" overflow="visible"></use>
            </clipPath>
            <linearGradient
              id="XMLID_12_"
              gradientUnits="userSpaceOnUse"
              x1="-156.508"
              y1="354.122"
              x2="115.621"
              y2="354.122"
              gradientTransform="matrix(1 0 0 -1 156 491)"
            >
              <stop offset="0" stopColor="#FF7F50 "></stop>
              <stop offset="1" stopColor="#00FFFF"></stop>
            </linearGradient>
            <path
              id="XMLID_1_"
              d="M-.5 29.8l126.8-.1c29.9 2.5 57.4 17 57.4 47.4 0 13.4-4.3 24.4-17.4 37.2-.5.6-2.3 2.3-2.6 2.6-.3.3-1.1 1-1.1 1l-.5.4-32.9 28.8 118.9 105.6"
              className="st1"
            ></path>
          </g>
        </g>
      </svg>
    </div>
  );
};
export default RSvgLogo;
