import React from "react";

export default function NavBar() {
  return (
    <div className="w-full flex lg:flex-row flex-col text-center lg:text-left px-12 py-6 text-xl font-bold">
      <div className="lg:w-1/2 lg:pl-4">
        <div>
          <a
            className="underline hover:text-jm-red hover:decoration-jm-yellow decoration-2"
            href="/"
          >
            home
          </a>
        </div>
      </div>
      <div className="lg:w-1/2 flex lg:flex-row flex-col underline decoration-jm-yellow justify-end font-bold">
        <div className="lg:pl-0 lg:w-1/4">
          <a
            className="underline hover:text-jm-red hover:decoration-jm-yellow decoration-2"
            href="/projects"
          >
            projects
          </a>
        </div>
        <div className="lg:pl-4 lg:w-1/4">
          <a
            className="underline hover:text-jm-red hover:decoration-jm-yellow decoration-2"
            href="/about"
          >
            about
          </a>
        </div>
        <div className="lg:pl-4 lg:w-1/4">
          <a
            className="underline hover:text-jm-red hover:decoration-jm-yellow decoration-2"
            href="/fun"
          >
            fun
          </a>
        </div>
        <div className="lg:pl-4 lg:w-1/4">
          <a
            className="underline hover:text-jm-red hover:decoration-jm-yellow decoration-2"
            href="/contact"
          >
            contact me
          </a>
        </div>
      </div>
    </div>
  );
}
