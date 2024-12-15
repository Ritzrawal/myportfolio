import React from "react";
import { IphoneFrame } from "../../assets";
import "../@ui/styles/project-image-styles.css";

import { data } from "../../helper/data";

const ArticleComponent = () => {
  return (
    <>
      <div className="project-container">
        <div className="compnent-title-style">PROJECT</div>
        <article>
          {data.map((item, index) => (
            <React.Fragment key={index}>
              <figure>
                <div className="iphone-frame">
                  <img
                    className="iphone-img"
                    src={IphoneFrame}
                    alt="iPhone frame"
                  />
                  <div className="iphone-screen">
                    <img
                      className="content-img"
                      src={item.imageUrl}
                      alt={"image-name"}
                    />
                  </div>
                </div>
              </figure>
              <section>
                <div>
                  <h2 className="compnent-title-style">{item.title}</h2>
                  <div className="projects-details-styles">
                    {item.description}
                  </div>
                  <div className="project-logo-container">
                    <div className="project-techstack-style">Tech Stack</div>
                    {item.logos.map((logo, i) => (
                      <img
                        key={i}
                        src={logo}
                        className="image-techstack"
                        alt={`Logo ${i}`}
                        width="50"
                        height="50"
                        style={{ marginRight: "10px" }}
                      />
                    ))}
                  </div>
                  <div className="hosted-site-link">
                    <div className="storelink-appstore-container">
                      <a
                        href={item.linkappstore}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          key={index}
                          className="img-appstore"
                          src={item.appstore}
                          alt={`appstore`}
                          width="50"
                          height="50"
                          style={{ marginRight: "10px" }}
                        />
                      </a>
                    </div>
                    <div className="storelink-playstore-container">
                      <a
                        href={item.linkplaystore}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          key={index}
                          className="img-playstore"
                          src={item.playstore}
                          alt={`playstore`}
                          width="50"
                          height="50"
                          style={{ marginRight: "10px" }}
                        />
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
