import React, { useEffect } from "react";
import style from "./card.module.css";

import { AiFillApi } from "react-icons/ai";
import { MdOutlineSupportAgent } from "react-icons/md";
import { FaCode } from "react-icons/fa";

const SingleCard = ({ name, description, iconComp }) => {
  useEffect(() => {
    const handleToggle = () => {
      document.querySelector("body").classList.add(style.toggle);
      setTimeout(() => {
        document.querySelector("body").classList.toggle(style.light);

        setTimeout(
          () => document.querySelector("body").classList.remove(style.toggle),
          10
        );
      }, 5);
    };

    const inputElement = document.querySelector(".day-night input");
    if (inputElement) {
      inputElement.addEventListener("change", handleToggle);
    }

    return () => {
      if (inputElement) {
        inputElement.removeEventListener("change", handleToggle);
      }
    };
  }, []);
  return (
    <div className={style.card}>
      <span className={style.icon}>{iconComp}</span>
      <h4>{name}</h4>
      <p>{description}</p>
      <div className={style.shine} />
      <div className={style.background}>
        <div className={style.tiles}>
          <div className={`${style.title} ${style["tile-1"]}`} />
          <div className={`${style.title} ${style["tile-2"]}`} />
          <div className={`${style.title} ${style["tile-3"]}`} />
          <div className={`${style.title} ${style["tile-4"]}`} />
          <div className={`${style.title} ${style["tile-5"]}`} />
          <div className={`${style.title} ${style["tile-6"]}`} />
          <div className={`${style.title} ${style["tile-7"]}`} />
          <div className={`${style.title} ${style["tile-8"]}`} />
          <div className={`${style.title} ${style["tile-9"]}`} />
          <div className={`${style.title} ${style["tile-10"]}`} />
        </div>
        <div className={`${style.line} ${style["line-1"]}`} />
        <div className={`${style.line} ${style["line-2"]}`} />
        <div className={`${style.line} ${style["line-3"]}`} />
      </div>
    </div>
  );
};

const Card = () => {
  return (
    <>
      <div className={style["features-container"]}>
        <div className={style.lines}>
          <div className={style.line} />
        </div>
        <h2>Features</h2>
        <div className={style.grid}>
          <SingleCard
            name={"API"}
            description={
              "Unlock the power of our APIs to streamline your development process and access valuable data effortlessly"
            }
            iconComp={<AiFillApi />}
          />
          <SingleCard
            iconComp={<MdOutlineSupportAgent />}
            description={
              "Get expert assistance and timely support to address your inquiries and technical challenges with our 'Support' service"
            }
            name={"CONTACT US"}
          />
          <SingleCard
            description={
              "Access code repositories for every API on GitHub and contribute to our collaborative development efforts."
            }
            name={"CODE"}
            iconComp={<FaCode />}
          />
        </div>
      </div>
    </>
  );
};

export default Card;
