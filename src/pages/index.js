import React, { useEffect } from "react";
import HomeLayout from '../components/HomepageFeatures/Layout/HomeLayout';
import Card from "../components/HomepageFeatures/Card";
import Link from '@docusaurus/Link';
// import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
// import Layout from '@theme/Layout';
// import HomepageFeatures from '@site/src/components/HomepageFeatures';
import CurserAnimation from "../components/HomepageFeatures/CurserAnimation";
import style from './index.module.css';
import OurAPI from "../components/HomepageFeatures/OurAPI";
import Footer from './../components/HomepageFeatures/Footer';

function Home() {
  useEffect(() => {
    const bgAnimation = document.getElementById("bgAnimation");
    for (let i = 0; i < 400; i++) {
      const colorBox = document.createElement("div");
      colorBox.classList.add(style.colorBox);
      bgAnimation.appendChild(colorBox);
    }
  }, []);

  return (
    <HomeLayout>
      <div>
        <div className={style.bgAnimation} id="bgAnimation">
          <div className={style.backgroundAmim}></div>
        </div>
        <div className={style.container}>
          <nav>
            <h1>
              <span>api.</span>playground
            </h1>
          </nav>
          <section>
            <div className={style.textBox}>
              <h1>
                Your Gateway to <br />
                <span>API</span> Awesomeness
              </h1>
              <p>
                Dive into a playground of limitless possibilities, where you can
                test, contribute, and master API implementation effortlessly.
              </p>
              <Link to="/docs/intro">
                <button className={style.homeBtn}>EXPLORE</button>
              </Link>
              <Link to="https://www.chatbase.co/chatbot-iframe/YJk91KG1jWqYH3D-SMVff">
                <button className={style.homeBtn}>CONTACT</button>
              </Link>
            </div>
          </section>
        </div>
      </div>
      <section className={style.introduction}>
        <p>
          Welcome to our API platform, tailored for learning and testing.
          Explore our range of APIs to enhance your development skills, whether
          you're a beginner or a seasoned developer. Get started now and unlock
          the potential of our versatile and user-friendly API ecosystem.
        </p>
      </section>
      <Card />
      <OurAPI />
      <Footer />
      <CurserAnimation />
    </HomeLayout>
  );
}


export default Home;
