import React from "react";
import userData from "../constants/data";

export default function BadgesCert() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="bg-[#F1F1F1] -mt-10 dark:bg-gray-900">
        <div className="text-container max-w-6xl mx-auto pt-20">
          <p
            className="leading-loose text-2xl md:text-4xl font-semibold  mx-4"
            style={{ lineHeight: "3rem" }}
          >
            {userData.about.title}. Currently learning {" "}
            <div><a
              className="bg-red-500 rounded-md px-2 py-1 text-white"
              href={userData.about.currentProjectUrl}
            >
              {userData.about.currentProject} ✈️
            </a></div>
          </p>
        </div>
      </div>
      <div className="bg-[#F1F1F1] dark:bg-gray-900 px-4">
        <div className="pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20">
          {/* Social Buttons */}
          <div className="inline-flex flex-col">


            {/* Social Links */}
            <h1 className="text-xl font-semibold text-gray-700 mt-8 dark:text-gray-200">
              Links to my Certifications:
            </h1>
            <div className="mt-4 ml-4">
              <div className="flex flex-row justify-start items-center">
                <div><a
                  href="https://www.credly.com/users/abhilash-panicker/badges"
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <div className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    Credly
                  </div>
                </a></div>
              </div>
              <div className="flex flex-row justify-start items-center">
                <div><a
                  href="https://eportfolio.mygreatlearning.com/abhilash-panicker"
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <div className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    GreatLearning
                  </div>
                </a></div>
              </div>
            </div>
          </div>
          {/* Text area */}
          <div className="col-span-1 md:col-span-2">
            {userData.about.description?.map((desc, idx) => (
              <p
                key={idx}
                className="text-xl text-gray-700 mb-4 dark:text-gray-300 "
              >
                {desc}
              </p>
            ))}

            <h3 className="bg-red-500 text-3xl rounded-md px-2 py-1 inline-block font-bold text-gray-50">    Credly Badges </h3>
            <div className="grid grid-flow-col auto-cols-max gap-4 ">
              <div className="flex items-center gap-2 overflow-hidden">Updating the Credly section here</div>
                <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="90a3d6b2-1dad-4027-8979-1d6f9f222588" data-share-badge-host="https://www.credly.com"></div>
                <script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>
                </div>
          </div>
        </div>
      </div>
    </section>
  );
}



