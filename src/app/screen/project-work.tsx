"use client";

import React from "react";
import Image from "next/image";

import { data } from "../helper/data";
import { IphoneFrame } from "../assets";
import "../@ui/styles/project-image-styles.css";

const ArticleComponent: React.FC = () => {
  console.log("hello data of the image ", data);
  return (
    <>
      <div className='project-container'>
        <div className='compnent-title-style'>PROJECT</div>
        <article>
          {data.map((item, index) => (
            <React.Fragment key={index}>
              <figure>
                <div className='iphone-frame'>
                  <Image
                    className='iphone-img'
                    src={IphoneFrame}
                    alt='iPhone frame'
                    width={50}
                    height={50}
                  />
                  <div className='iphone-screen'>
                    <Image
                      className='content-img'
                      src={item.imageUrl}
                      alt={"image-name"}
                      width={50}
                      height={50}
                    />
                  </div>
                </div>
              </figure>
              <section>
                <div>
                  <h2 className='compnent-title-style'>{item.title}</h2>
                  <div className='projects-details-styles'>
                    {item.description}
                  </div>
                  <div className='project-logo-container'>
                    <div className='project-techstack-style'>Tech Stack</div>
                    {item.logos.map((logo, i) => (
                      <Image
                        key={i}
                        src={logo}
                        className='image-techstack'
                        alt={`Logo ${i}`}
                        width={50}
                        height={50}
                        style={{ marginRight: "10px" }}
                      />
                    ))}
                  </div>
                  <div className='hosted-site-link'>
                    <div className='storelink-appstore-container'>
                      <a
                        href={item.linkappstore}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        {/* <Image
                          key={index}
                          className='img-appstore'
                          src={item.appstore}
                          alt={`appstore`}
                          width='50'
                          height='50'
                          style={{ marginRight: "10px" }}
                        /> */}
                      </a>
                    </div>
                    <div className='storelink-playstore-container'>
                      <a
                        href={item.linkplaystore}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        {/* <Image
                          key={index}
                          className='img-playstore'
                          // src={item.playstore}
                          alt={`playstore`}
                          width='50'
                          height='50'
                          style={{ marginRight: "10px" }}
                        /> */}
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            </React.Fragment>
          ))}
        </article>
      </div>
    </>
  );
};

export default ArticleComponent;
