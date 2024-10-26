import React from "react";
import "../@ui/styles/project-image-styles.css";
import { IphoneFrame } from "../assets";

import { data } from "../helper/data";

const ArticleComponent = () => {
  return (
    <>
      <div className="project-container">
        <div className="compnent-title-style">PROJECT</div>
        <article>
          {data.map((item, index) => (
            <React.Fragment key={index}>
              <figure>
                {/* <img src={item.imageUrl} alt={item.title} /> */}
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
                        alt={`Logo ${i}`}
                        width="50"
                        height="50"
                        style={{ marginRight: "10px" }}
                      />
                    ))}
                  </div>
                  <div className="hosted-site-link">
                    <div>
                      {" "}
                      <img
                        key={index}
                        src={item.appstore}
                        alt={`appstore`}
                        width="50"
                        height="50"
                        style={{ marginRight: "10px" }}
                      />
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
