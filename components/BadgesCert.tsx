import React from "react";
import certData from "../constants/badgeinfo";
import userData from "../constants/badgeinfo";

export default function BadgesCert() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h3 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          Certifications & Badges
        </h3>
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
        </div>
      
      <div><h3 className="bg-green-500 text-3xl rounded-md px-2 py-1 inline-block font-bold text-gray-50">    Credly Badges </h3>
        <div className="grid grid-flow-col auto-cols-max gap-4 ">

            <div className="bg-[#F1F1F1] dark:bg-gray-900">
              <div className="max-w-3xl mx-auto grid grid-cols-3 md:grid-cols-2 gap-2 py-20 pb-40">
                {certData.accepted_badges.map((badg, idx) => (
                  <BadgeCard
                    name={badg.name}
                    link={"https://credly.com/badges/${badg.id}"}
                    id={badg.id}
                    image={badg.image}
                    number={`${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          
        </div>
      </div>
      </div>

    </section>
  );
}



const BadgeCard = ({ name, link, image, number, id }) => {
  return (
    <a href="https://credly.com/badges/" className="w-full block shadow-2xl">

      <div className="relative overflow-hidden">
        <div className="h-72 object-cover">
          <img
            src={image}
            alt={name}
            className="transform hover:scale-80 transition duration-2000 ease-out object-contain h-30 w-40"
          />
        </div>
        <h1 className="px-4 py-1 text-sm text-red-600 font-semibold rounded-full border border-red-200 hover:text-white hover:bg-red-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2">
          {name}
        </h1>

      </div>
    </a>
  );
};