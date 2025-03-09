import React from "react";
import userData from "../constants/data";

type DescProps = {
  desc: string;
};

const Description = ({ desc }: DescProps) => {
  return (
    <p className="text-xl text-gray-700 mb-4 dark:text-gray-300">{desc}</p>
  );
};

export default function AboutMe() {
  return (
    <section className="bg-white dark:bg-gray-800">

      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          About Me
        </h1>
      </div>
      <div className="bg-[#F1F1F1] -mt-10 dark:bg-gray-900">
        <div className="text-container max-w-6xl mx-auto pt-20">
          <p
            className="leading-loose text-2xl md:text-4xl font-semibold  mx-4"
            style={{ lineHeight: "3rem" }}
          >
            {userData.about.title}.{/* Currently working on{" "}
            <div><a
              className="bg-red-500 rounded-md px-2 py-1 text-white"
              href={userData.about.currentProjectUrl}
            >
              {userData.about.currentProject} ✈️
            </a></div>*/}
          </p>
        </div>
      </div>
      <div className="bg-[#F1F1F1] dark:bg-gray-900 px-4">
  <div className="pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20">
    {/* Contact & Socials */}
    <div className="inline-flex flex-col">
      <div>
        <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">Contact</h1>
        <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
          For inquiries or collaborations, send a{" "}
          <a href="https://dbugr.vercel.app/contact/"
            className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300">
            message
          </a>{" "}
          and I'll get back to you.
        </p>
      </div>
      <div className="mt-8">
        <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">Job Opportunities</h1>
        <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
          Open to exciting AI, Cloud, and DevOps roles. Check my{" "}
          <a href={userData.resumeUrl} target="__blank"
            className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300">
            resume
          </a>{" "}
          for more details.
        </p>
      </div>
      {/* Social Links */}
      <h1 className="text-xl font-semibold text-gray-700 mt-8 dark:text-gray-200">Social Links</h1>
      <div className="mt-4 ml-4">
        <a href={userData.socialLinks.github} className="flex items-center space-x-4 group">
          <div className="my-4">&rarr;</div>
          <div className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
            GitHub
          </div>
        </a>
        <a href={userData.socialLinks.linkedin} className="flex items-center space-x-4 group">
          <div className="my-4">&rarr;</div>
          <div className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
            LinkedIn
          </div>
        </a>
      </div>
    </div>

    {/* About Section */}
    <div className="col-span-1 md:col-span-2">
      {userData.about.description?.map((desc, idx) => (
        <p key={idx} className="text-xl text-gray-700 mb-4 dark:text-gray-300">{desc}</p>
      ))}

      {/* Skills Section 
      <h3 className="bg-red-500 text-3xl rounded-md px-2 py-1 inline-block font-bold text-gray-50">Core Expertise</h3>*/}

      {/* Cloud & Enterprise Solutions */}
      <h4 className="bg-red-500 text-3xl rounded-md px-2 py-1 inline-block font-bold text-gray-50">Cloud & Enterprise Solutions</h4>
      <div className="grid grid-flow-col auto-cols-max gap-4 ">
      <div><img src="https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg" alt="Azure" className="h-10 w-10"/>Azure</div>
      <div><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original-wordmark.svg" alt=".NET" className="h-10 w-10"/>.Net</div>
      <div><img src="https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg" alt="SQL" className="h-10 w-10"/>MS SQL</div>
      <div><img src="https://upload.wikimedia.org/wikipedia/commons/6/64/Power_BI_logo_black.svg" alt="Power BI" className="h-10 w-10 mx-2 my-2"/>PowerBI</div>
      </div>     

      {/* AI & Machine Learning */}
      <h4 className="bg-red-500 text-3xl rounded-md px-2 py-1 inline-block font-bold text-gray-50">AI & Machine Learning</h4>
      <div className="grid grid-flow-col auto-cols-max gap-4 ">
      <div><img src="https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg" alt="TensorFlow" className="h-10 w-10"/>TensorFlow</div>
      <div><img src="https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg" alt="PyTorch" className="h-10 w-10"/></div>
      <div><img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" alt="Scikit-Learn" className="h-10 w-10"/>Scikit</div>
      </div>

      {/* DevOps & CI/CD */}
      <h4 className="bg-red-500 text-3xl rounded-md px-2 py-1 inline-block font-bold text-gray-50">DevOps & CI/CD</h4>
      <div className="grid grid-flow-col auto-cols-max gap-4 ">
      <div><img src="https://www.vectorlogo.zone/logos/github/github-icon.svg" alt="GitHub" className="h-10 w-10"/>Github</div>
      <div><img src="https://www.vectorlogo.zone/logos/docker/docker-icon.svg" alt="Docker" className="h-10 w-10"/>Docker</div>
      <div><img src="https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg" alt="Azure DevOps" className="h-10 w-10"/>Azure DevOps</div>
      </div>

      {/* Programming Languages */}
      <h4 className="bg-red-500 text-3xl rounded-md px-2 py-1 inline-block font-bold text-gray-50">Programming & Frameworks</h4>
      <div className="grid grid-flow-col auto-cols-max gap-4 ">
      <div><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg" alt="C#" className="h-10 w-10"/>C#</div>
      <div><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JavaScript" className="h-10 w-10"/>JavaScript</div>
      <div><img src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg" alt="React" className="h-10 w-10"/>ReactJs</div>
      </div>

      {/* Databases */}
      <h4 className="bg-red-500 text-3xl rounded-md px-2 py-1 inline-block font-bold text-gray-50">Databases</h4>
      <div className="grid grid-flow-col auto-cols-max gap-4 ">
        <img src="https://www.vectorlogo.zone/logos/microsoft_sql/microsoft_sql-icon.svg" alt="MS SQL" className="h-10 w-10"/>
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="MongoDB" className="h-10 w-10"/>
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="PostgreSQL" className="h-10 w-10"/>
      </div>
    </div>
  </div>
</div>

    </section>
  );
}
