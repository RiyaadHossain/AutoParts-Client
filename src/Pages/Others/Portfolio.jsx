import React from "react";

const Portfolio = () => {
  return (
    <div className="min-h-[74vh] flex items-center justify-center">
      <div>
        <h1 className="text-center text-5xl font-bold mb-8 text-sky-700 mt-11">
          My Portfolio
        </h1>
        <div className="md:min-w-[500px] mx-auto border p-6 rounded-md shadow-indigo-50 shadow-md bg-slate-100">
          <p className="text-xl mb-5">
            <span className="font-bold">Name:</span> Riyad Hossain
          </p>
          <p className="text-xl mb-5">
            <span className="font-bold">Email:</span> riyadhossain.dev@gmail.com
          </p>
          <p className="text-xl mb-5">
            <span className="font-bold">Education:</span> Accounting, BBA
          </p>
          <p className="text-xl mb-5">
            <span className="font-bold">Technologies I Learned:</span>
            <span> HTML,</span>
            <span> CSS,</span>
            <span> BootStrap,</span>
            <span> Tailwind,</span>
            <span> JavaScript,</span>
            <span> React.js,</span>
            <span> Flowbite,</span>
            <span> DaisyUI,</span>
            <span> Node.js,</span>
            <span> Express,</span>
            <span> MongoDB &</span>
            <span> Firebase</span>
          </p>
          <p className="text-xl mb-5">
            <span className="font-bold">My Projects:</span>
            <ul className="list-disc ml-16">
              <li className="text-blue-600">
                <a href="https://doctors-portal-003.web.app/">Doctor Portal</a>
              </li>
              <li className="text-blue-600">
                <a href="https://laptop-03.web.app/">Laptop Hub</a>
              </li>
              <li className="text-blue-600">
                <a href="https://laptop-03.web.app/">To Do App</a>
              </li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
