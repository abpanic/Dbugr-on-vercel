import React from "react";
import certData from "../constants/badgeinfo";
import userData from "../constants/badgeinfo";

export default function BadgesCert() {
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
          {/* Text area */}
         

            
            <div><h3 className="bg-green-500 text-3xl rounded-md px-2 py-1 inline-block font-bold text-gray-50">    Credly Badges </h3>
            </div>
            <div className="grid grid-flow-col auto-cols-max gap-4 ">
                          <div className="flex items-center gap-2 overflow-hidden">Updating the Credly section here</div>
              <div className="grid gap-4 grid-flow-row h-20 w-20">
                <a href="https://www.credly.com/badges/90a3d6b2-1dad-4027-8979-1d6f9f222588/">Acclaim Badge link Testing
                </a></div>
                Coursera Certification Links:
                https://www.coursera.org/account/accomplishments/specialization/SWDBDGADF5D3
                </div>
                <div className="grid gap-4 grid-flow-row h-20 w-20">IIT Roorkee Certification: TO DO</div>
                 <div className="grid gap-4 grid-flow-row h-20 w-20">DataCamp link: To DO</div>            
                 <div className="bg-[#F1F1F1] dark:bg-gray-900">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20 pb-40">
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
            className="transform hover:scale-125 transition duration-2000 ease-out object-cover h-full w-full"
          />
        </div>
        <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2">
          {name}
        </h1>
        <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl">
          {number.length === 1 ? "0" + number : number}
        </h1>
      </div>
    </a>
  );
};