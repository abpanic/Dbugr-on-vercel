import React from "react";
import certData from "../constants/badgeinfo";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

interface BadgeProps {
  name: string;
  link: string;
  image: string;
  number: string;
}

const BadgeCard = ({ name, link, image, number }: BadgeProps) => {
  return (
    <a href={link} className="w-full block shadow-1xl">
      <div className="flex">
        <div className="relative overflow-hidden">
          <div className="object-cover h-50 w-50">
            <img
              src={image}
              alt={name}
              className="transform hover:scale-110 transition ease-in-out delay-150 h-40 w-40"
            />
          </div>
          <h2 className="px-4 py-2 text-sm text-red-400 font-semibold rounded-full border border-red-200 hover:text-white hover:bg-red-400 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2">
            {name}
          </h2>
        </div>
      </div>
    </a>
  );
};

export default function Cert() {
  return (
    <section className="bg-white dark:bg-gray-800">
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
          <div><h3 className="bg-green-500 text-3xl rounded-md px-2 py-1 inline-block font-bold text-gray-50">    Credly Badges: </h3>
        <div className="grid grid-flow-col auto-cols-max gap-4 ">
            <div className="bg-[#F1F1F1] dark:bg-gray-900">
              <div className="max-w-sm mx-auto grid grid-cols-3 md:grid-cols-2 gap-2 py-20 pb-40">
                {certData.accepted_badges.map((badg, idx) => (
                  <BadgeCard
                    name={badg.name}
                    link={"https://credly.com/badges/".concat(badg.id)}
                    image={badg.image}
                    number={`${idx + 1}`}
                  />
                ))}
              </div>
            </div>          
        </div>
      </div>
      </div>
      </div>
    </section>
  );
}

