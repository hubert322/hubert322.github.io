/* eslint-disable react/no-array-index-key */
import React, { Fragment } from "react";
import PropTypes from "prop-types";
import ScrollAnimation from "react-animate-on-scroll";
import discovery from "../../assets/images/discovery.jpg";
import tsmc from "../../assets/images/tsmc.png";
import highlighter from "../../assets/images/highlighter.png";
import spotifyMixer from "../../assets/images/spotify-mixer.png";
import trendMicro from "../../assets/images/Trend-Micro-Logo.png";
import pictionary from "../../assets/images/pictionary.png";
import controlnet from "../../assets/images/controlnet.png";
import lazLogo from "../../assets/images/laz.png";
import engageMe from "../../assets/images/engage-me.png";
import pwa from "../../assets/images/pwa.png";
import canvas from "../../assets/images/canvas.png";
import laserTag from "../../assets/images/laser-tag.png";
import lightDarkness from "../../assets/images/light-darkness.png";
import rubeGoldberg from "../../assets/images/rube-goldberg.png";
import zoom from "../../assets/images/zoom.jpg";
import godOfPaperPlane from "../../assets/images/god-of-paper-plane.png";
import letUsOut from "../../assets/images/let-us-out-3.png";
import "../../assets/styles/section.css";
import "./Experience.css";

function Experience(props) {
  const subCards = [
    {
      title: "Custom Slack Command System + CI/CD",
      ribbon: "Internship",
      text: [
        `Designed and implemented a generic, cloud native system with AWS to interact with custom Slack commands and various 3rd party authentications using an asynchronous pub/sub model`,
        `Technologies Invovled: Go, AWS, Docker, GitHub Actions, Mocha, SonarCloud, Terraform`
      ],
      src: discovery,
      links: [],
      etc: "Internship @ Discovery | Remote | Jun 2021 - Present"
    },
    {
      title: "Factory Facility Re-Imagined with Augmented Reality",
      ribbon: "Internship",
      text: [
        `Created a system to display real-time data and maintenance procedures for factory machines using AR`,
        `Technologies Invovled: Javascript, Java, Spring Boot, Oracle SQL, C#, Unity, HTML, CSS, Azure DevOps, Docker, Kubernetes`
      ],
      src: tsmc,
      links: [],
      etc: "Internship @ TSMC | Hsinchu, Taiwan | Feb 2021 - May 2021"
    },
    {
      title: "highlight.ai",
      text: [
        `Generate summaries for Zoom lectures`,
        `Technologies Invovled: Python, OpenAI`
      ],
      src: highlighter,
      links: [
        {
          link: "https://devpost.com/software/poggers-ai",
          text: "Learn More"
        }
      ],
      etc: "hello:world Hackathon | Apr 2021"
    },
    {
      title: "Spotify Mixer",
      text: [
        `Make a playlist for you and your friends, full of everyone's favorite songs, with the click of a button`,
        `Technologies Invovled: Javascript, React, HTML, CSS, Firebase, Gatsby, Tailwind, Netlify`
      ],
      src: spotifyMixer,
      links: [
        {
          link: "https://github.com/kwwangkw/spotify-mixer",
          text: "Learn More"
        },
        {
          link: "https://spotifymixer.com/",
          text: "Try It"
        }
      ],
      etc: "Personal Project | Jan 2021"
    },
    {
      title: "CI Pipeline + Automated UI Testing",
      ribbon: "Internship",
      text: [
        `Developed on deployment pipeline for a cybersecurity network monitoring product Deep Discovery Inspector`,
        `Technologies Invovled: Javascript, WebdriverIO (Selenium-based), Jenkins, Ansible`
      ],
      src: trendMicro,
      links: [],
      etc: "Internship @ Trend Micro | Taipei, Taiwan | Jul 2020 - Aug 2020"
    },
    {
      title: "License Plate Detection Management/Control System",
      text: [
        `Developed a distributed management/control system to receive and send signal to grant or deny permissions for 100+ license plates everyday`,
        `Technologies Invovled: Javascript, PHP, MySQL, C, Modbus`
      ],
      src: controlnet,
      links: [],
      etc:
        "Internship @ Controlnet International | Taipei, Taiwan | May 2020 - Jun 2020"
    },
    {
      title: "Pictionary Live",
      text: [
        `An online, multiplayer version of pictionary developed that allows synchronous events such as joining room, drawing, and messaging to happen simultaneously across connected clients!`,
        `Technologies Invovled: Javascript, React, Python, Flask, MongoDB, Socket.io, Heroku`
      ],
      src: pictionary,
      size: "100% 100%",
      links: [
        {
          link: "https://github.com/hubert322/pictionary",
          text: "Learn More"
        },
        {
          link: "https://pictionary.huberthung.me",
          text: "Try It"
        }
      ],
      etc: "Personal Project | May 2020 - Jul 2020"
    },
    {
      title: "EngageMe",
      src: engageMe,
      text: [
        `A Chrome extension that displays the most popular segments of videos by tracking users’ video-watching activity through crowdsourcing`,
        `Technologies Invovled: Python, Flask, Firebase, Javascript, HTML, CSS, GCP`
      ],
      links: [
        {
          link: "https://devpost.com/software/engageme-85almt",
          text: "Learn More"
        }
      ],
      etc: "MHacks XII | Oct 2019"
    },
    {
      title: "Reward Card System",
      text: [
        `Designed and implemented web and mobile UI interfaces for generating and redeeming QR codes for teachers and students`,
        `Technologies Invovled: Javascript, AngularJs, PHP, MySQL, Nginx, Swift, Java`
      ],
      src: lazLogo,
      links: [
        {
          link: "https://github.com/hubert322/reward-card-system",
          text: "Learn More"
        },
        {
          link: "https://laz.huberthung.me",
          text: "Try It"
        }
      ],
      etc: "Internship @ Learning A-Z | Ann Arbor, MI | May 2019 - Aug 2019"
    },
    {
      title: "PWA Example",
      src: pwa,
      text: [
        `Progressive Web App Demo!`,
        `Technologies Invovled: Javascript, HTML, CSS`
      ],
      links: [
        {
          link: "https://github.com/hubert322/pwa-example",
          text: "Learn More"
        }
      ],
      etc: "Jun 2019"
    },
    {
      title: "Blast Beat",
      src: null,
      text: [
        `Generate music from text files!!!`,
        `Technologies Invovled: Python`
      ],
      links: [
        {
          link: "https://github.com/bowman3002/BlastBeatPy",
          text: "Learn More"
        }
      ],
      etc: "May 2019"
    },
    {
      title: "Data Analysis on Canvas",
      src: canvas,
      text: [
        `Analyzed 300,000+ lines of Canvas course data to give suggestions on how Canvas could improve course completion rate`,
        `Technologies Invovled: Python, Numpy, Pandas, Matpotlib`
      ],
      links: [
        {
          link: "https://bit.ly/data-canvas",
          text: "Learn More"
        }
      ],
      etc: "MDataHack I | Jan 2019"
    },
    {
      title: "Mobile Laser Tag",
      src: laserTag,
      text: [
        `Created a 1v1 mobile laser tag game that uses computer vision to track targets`,
        `Technologies Invovled: Java, Firebase, OpenCV`
      ],
      links: [
        {
          link: "https://bit.ly/mobile-laser-tag",
          text: "Try It"
        }
      ],
      etc: "MHacks XI | Oct 2018"
    },
    {
      title: "A Light in the Darkness",
      src: lightDarkness,
      size: "cover",
      text: [
        `This is a puzzle game where users use different objects such as a reflective mirror or a black hole to try and send the "light" to its destination`,
        `Technologies Invovled: C#, Unity`
      ],
      links: [
        {
          link:
            "https://globalgamejam.org/2018/games/light-darkness-黑暗中的光芒",
          text: "Learn More"
        }
      ],
      etc: "Global Game Jam 2018 | Jan 2018"
    },
    {
      title: "Rube Goldberg Machine",
      src: rubeGoldberg,
      size: "cover",
      text: [
        `Show the pollutions that mankind has made to the Earth and ways each of us can do to help save the Earth`
      ],
      links: [
        {
          link:
            "https://www.youtube.com/watch?v=6olEt4jDLzM&ab_channel=Technion",
          text: "Watch It"
        }
      ],
      etc:
        "Technion Earth Day Rube Goldberg Machine Challenge | Feb 2017 - Mar 2017"
    },
    {
      title: "Zoom",
      src: zoom,
      size: "cover",
      text: [
        `This is a 2d scroller where you need to zoom in and out items in order to get the end`,
        `Technologies Invovled: C#, Unity`
      ],
      links: [
        {
          link:
            "https://drive.google.com/file/d/1jfEe3Sl1O3v_1lYeMqjeEIwDBoLH40OV/view?usp=sharing",
          text: "Try It"
        }
      ],
      etc: "Fukushima Game Jam 2016 | Aug 2016"
    },
    {
      title: "God of Paper Plane",
      src: godOfPaperPlane,
      size: "cover",
      text: [
        `This is a 2d runner game where you can control the paper airplane to send a love message to your lover`,
        `Technologies Invovled: C#, Unity`
      ],
      links: [
        {
          link:
            "https://drive.google.com/file/d/0Byrk9Q8aBK2peHlxVmNhN0RvVzg/view?usp=sharing",
          text: "Try It"
        }
      ],
      etc: "Fukushima Game Jam 2015 | Aug 2015"
    },
    {
      title: "Let Us Out",
      src: letUsOut,
      size: "cover",
      text: [
        `This is a multiplayer puzzle game where each player has to move or trigger items in each stage in order to advance onto the next one`,
        `Technologies Invovled: C#, Unity`
      ],
      links: [
        {
          link: "https://globalgamejam.org/2015/games/let-us-out",
          text: "Learn More"
        }
      ],
      etc: "Global Game Jam 2015 | Jan 2015"
    }
  ];

  const { setRef } = props;

  function getEtcText(etc) {
    const index = etc.indexOf("|");
    if (index === -1) {
      return etc;
    }
    return (
      <>
        <span className="Experience-card-etc-highlight">
          {etc.substring(0, index)}
        </span>
        {etc.substring(index)}
      </>
    );
  }

  return (
    <>
      <div ref={ref => setRef("Experience", ref)} />
      <ScrollAnimation
        className="section-container Experience-container"
        animateIn="fadeIn"
      >
        <h2 className="section-title">Experience</h2>
        <div className="section-content Experience-content">
          {subCards.map((card, i) => (
            <Fragment key={`fragment-${i}`}>
              <div key={card.title} className="Experience-card">
                <div className="Experience-card-image-div">
                  {card.src ? (
                    <img
                      src={card.src}
                      alt={card.title}
                      className="rounded Experience-card-image"
                    />
                  ) : null}
                </div>
                <div className="Experience-card-content">
                  <h4 className="Experience-card-title">{card.title}</h4>
                  {card.etc ? (
                    <p className="Experience-card-etc">
                      {getEtcText(card.etc)}
                    </p>
                  ) : null}
                  <div className="Experience-card-title-divider" />
                  {card.text.map(text => {
                    const keyword = "Technologies Invovled:";
                    const keywordIndex = text.indexOf(keyword);
                    if (keywordIndex != -1) {
                      const beforeKeywordText = text.substr(0, keywordIndex);
                      const keywordText = text.substr(
                        keywordIndex,
                        keyword.length
                      );
                      const afterKeywordText = text.substr(
                        keywordIndex + keyword.length
                      );
                      return (
                        <p key={text} className="Experience-card-text">
                          {beforeKeywordText}
                          <span className="Experience-card-keyword">
                            {keywordText}
                          </span>
                          {afterKeywordText}
                        </p>
                      );
                    } else {
                      return (
                        <p key={text} className="Experience-card-text">
                          {text}
                        </p>
                      );
                    }
                  })}
                  <div>
                    {card.links.map(link => (
                      <a
                        key={link.link}
                        className="Experience-link-button"
                        href={link.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.text}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              {i + 1 !== subCards.length ? (
                <div key={`divider${i}`} className="Experience-card-divider" />
              ) : null}
            </Fragment>
          ))}
        </div>
      </ScrollAnimation>
    </>
  );
}

Experience.propTypes = {
  setRef: PropTypes.func.isRequired
};

export default Experience;
