import React from "react";
import Link from "@docusaurus/Link";

export default function Footer() {
  return (
    <footer className="text-gray-400 custom-color body-font">
      <div className="container px-5 py-4 mx-auto flex items-center justify-center sm:flex-row flex-col">
        <Link className="flex title-font font-medium items-center md:justify-center justify-center text-white">
          <p className="w-10 h-10 text-white p-1 mb-0 text-center  bg-indigo-500 rounded-full">
            API
          </p>
          <span className="ml-3 text-xl text-center">playground</span>
        </Link>

        <p className="text-sm mb-1 text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
          © 2023 api.playground —
          <a
            href="/"
            className="text-gray-500 ml-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            @naveen014
          </a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <Link
            to="https://www.linkedin.com/in/naveen-gaonkar-2b0810258/"
            className="ml-3 text-gray-400"
          >
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={0}
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              />
              <circle cx={4} cy={4} r={2} stroke="none" />
            </svg>
          </Link>
        </span>
      </div>
    </footer>
  );
}
