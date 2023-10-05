import React from "react";
import style from "./ourapi.module.css";
import Link from "@docusaurus/Link";
// import { AiFillGithub } from "react-icons/ai";
// import { SiGoogledocs } from "react-icons/si";
// import { BsGlobeAmericas } from "react-icons/bs";

const SingleAPI = ({ name, github, docs, description,api }) => {
  return (
    <div className="p-4 lg:w-1/3">
      <div className="h-full bg-gray-800 bg-opacity-40 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
        {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
          CATEGORY
        </h2> */}
        <h1 className="title-font sm:text-2xl text-xl font-medium text-white mb-3">
          {name}
        </h1>
        <p className="leading-relaxed mb-1 para-color">{description}</p>
        <Link to={docs} className="text-indigo-400 inline-flex items-center">
          Learn More
          <svg
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="M12 5l7 7-7 7" />
          </svg>
        </Link>
        <div className="text-center mt-1 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
          <Link to={github} className="text-gray-500 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-700 border-opacity-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-github"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </Link>
          <Link to={api} className="text-gray-500 inline-flex items-center leading-none text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-globe"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="2" x2="22" y1="12" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

const OurAPI = () => {
  return (
    <div className={style.apicontainper}>
      <div className={style.lines}>
        <div className={style.line} />
      </div>
      <h2>Our API's</h2>
      <section className="text-gray-400 custom-color body-font">
        <div className="container px-5 py-2 mx-auto">
          <div className="flex flex-wrap -m-4">
            <SingleAPI
              name={"Product API"}
              description={
                "The Product API provides a wide range of product information, and you can tailor your search with query parameters to find the perfect products from top brands."
              }
              docs={"/docs/category/the-product-api"}
              github={"https://github.com/gaonkarBhai/Product-API"}
              api={"https://product-api-git-master-gaonkarbhai.vercel.app/"}
            />
            <SingleAPI
              name={"Havyaka API"}
              description={
                "The Havyaka API is your gateway to a treasure trove of Hindu mantras and suktam details, making it easy to explore and integrate into your applications."
              }
              docs={"/docs/category/the-havyaka-api"}
              github={"https://github.com/gaonkarBhai/Havyaka-Rest-API"}
              api={"https://havyaka-rest-api.vercel.app/"}
            />
            <SingleAPI
              name={"Task Manager API"}
              description={
                "The Task Manager API offers features like task creation, updating, retrieval, and deletion, making it a versatile tool for task management and API learning."
              }
              docs={"/docs/category/the-task-manager-api"}
              github={"https://github.com/gaonkarBhai/TaskManager-API"}
              api={"https://task-manager-api-alpha.vercel.app/"}
            />
            <SingleAPI
              name={"Job API"}
              description={
                "Features user authentication, registration, login, and basic CRUD operations for managing job listings, making it a valuable tool for educational and testing purposes."
              }
              docs={"/docs/category/the-job-api"}
              github={"https://github.com/gaonkarBhai/Job-Api"}
              api={"https://job-api-brown.vercel.app/"}
            />
            <SingleAPI
              name={"Periodic Table API"}
              description={
                "It offers easy installation, requires no authentication, and allows users to access data on elements, including atomic properties and historical information."
              }
              docs={"/docs/category/the-periodic-table-api"}
              github={"https://github.com/gaonkarBhai/PeriodicTable-RestAPI"}
              api={"https://periodic-table-rest-api.vercel.app/"}
            />
            <SingleAPI
              name={"School Management System"}
              description={
                "The School Management System API provides a set of endpoints to manage various aspects of a school, including administrators, teachers, students, academic years, classes, programs, subjects, exams, questions, results, and more."
              }
              docs={"/docs/School%20Management%20API/intro"}
              github={"https://github.com/gaonkarBhai/School-Management-System"}
              api={"/"}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurAPI;
