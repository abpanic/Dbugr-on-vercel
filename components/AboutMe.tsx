import React from "react";
import userData from "../constants/data";

export default function AboutMe() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          About Me.
        </h1>
      </div>
      <div className="bg-[#F1F1F1] -mt-10 dark:bg-gray-900">
        <div className="text-container max-w-6xl mx-auto pt-20">
          <p
            className="leading-loose text-2xl md:text-4xl font-semibold  mx-4"
            style={{ lineHeight: "3rem" }}
          >
            {userData.about.title}. Currently working on{" "}
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
            <div>
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                Contact
              </h1>
              <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                For any sort help / enquiry, shoot a{" "}
                <div><a
                  href={`mailto:abhilash.panicker@outlook.com`}
                  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                >
                  mail
                </a></div>{" "}
                and I'll get back. I swear.
              </p>
            </div>
            <div className="mt-8">
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                Job Opportunities
              </h1>
              <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                I'm looking for a job currently as PM or Data Scientist, with an exciting challenge. If you see me as a good fit,
                check my{" "}
                <div><a
                  href={userData.resumeUrl}
                  target="__blank"
                  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                >
                  CV
                </a></div>{" "}
                and I'd love to work with you.
              </p>
            </div>
            {/* Social Links */}
            <h1 className="text-xl font-semibold text-gray-700 mt-8 dark:text-gray-200">
              Social Links
            </h1>
            <div className="mt-4 ml-4">
              <div className="flex flex-row justify-start items-center">
                <div><a
                  href={userData.socialLinks.github}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <div className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    GitHub
                  </div>
                </a></div>
              </div>
              <div className="flex flex-row justify-start items-center">
                <div><a
                  href={userData.socialLinks.linkedin}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <div className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    LinkedIn
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

            <h3 className="bg-red-500 text-3xl rounded-md px-2 py-1 inline-block font-bold text-gray-50">    Programming Languages </h3>
            <div className="grid grid-flow-col auto-cols-max gap-4 ">
              <div className="flex items-center gap-2 overflow-hidden"><a href="https://www.w3schools.com/cs/" target="_blank" rel="noreferrer"> <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg" alt="csharp"
                className="h-10 w-10 mx-2 my-2 object-contain" /><p className="text-sm font-semibold leading-4 tracking-tight">C# </p></a></div>

              <div className="flex items-center gap-2 overflow-hidden"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                alt="javascript" className="h-10 w-10 mx-2 my-2 object-contain" /> JavaScript </a></div>

              <div className="flex items-center gap-2 overflow-hidden"><a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"> <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
                alt="typescript" className="h-10 w-10 mx-2 my-2 object-contain" />TypeScript </a></div>

              <div className="flex items-center gap-2 overflow-hidden"><a href="https://www.python.org" target="_blank" rel="noreferrer"> <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python"
                className="h-10 w-10 mx-2 my-2 object-contain" />Python </a></div>
            </div>

            <h3 className="bg-red-500 text-3xl rounded-md px-2 py-1 inline-block font-bold text-gray-50"> Frontend Development </h3>
            <div className="grid grid-flow-col auto-cols-max gap-4 ">
              <div className="flex items-center"><a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                alt="html5" className="h-10 w-10 mx-2 my-2" />HTML5 </a></div>

              <div className="flex items-center"><a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3"
                className="h-10 w-10 mx-2 my-2" />CSS3 </a></div>

              <div className="flex items-center"><a href="https://tailwindcss.com/" target="_blank" rel="noreferrer"> <img
                src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" className="h-10 w-10 mx-2 my-2" />Tailwind </a></div>

              <div className="flex items-center"><a href="https://getbootstrap.com" target="_blank" rel="noreferrer"> <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"
                alt="bootstrap" className="h-10 w-10 mx-2 my-2" /> Bootstrap</a></div>


              <div className="flex items-center"><a href="https://webpack.js.org" target="_blank" rel="noreferrer"> <img
                src="https://raw.githubusercontent.com/devicons/devicon/d00d0969292a6569d45b06d3f350f463a0107b0d/icons/webpack/webpack-original-wordmark.svg"
                alt="webpack" className="h-10 w-10 mx-2 my-2" />Webpack </a></div>


              <div><a href="https://redux.js.org" target="_blank" rel="noreferrer"> <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux"
                className="h-10 w-10 mx-2 my-2" /> Redux</a></div>

              <div><a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                alt="react" className="h-10 w-10 mx-2 my-2" /> React</a></div>
            </div>
            <h3 className="bg-red-500 text-3xl rounded-md px-2 py-1 inline-block font-bold text-gray-50">Backend Development</h3>
            <div className="grid grid-flow-col auto-cols-max gap-4 ">

              <div><a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                alt="nodejs" className="h-10 w-10 mx-2 my-2" />NodeJS </a></div>

              <div><a href="https://graphql.org" target="_blank" rel="noreferrer"> <img
                src="https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg" alt="graphql" className="h-10 w-10 mx-2 my-2" />GraphQL
              </a></div>

              <div><a href="https://hadoop.apache.org/" target="_blank" rel="noreferrer"> <img
                src="https://www.vectorlogo.zone/logos/apache_hadoop/apache_hadoop-icon.svg" alt="hadoop" className="h-10 w-10 mx-2 my-2" />Hadoop </a></div>

              <div><a href="https://kafka.apache.org/" target="_blank" rel="noreferrer"> <img
                src="https://www.vectorlogo.zone/logos/apache_kafka/apache_kafka-icon.svg" alt="kafka" className="h-10 w-10 mx-2 my-2" />
                Kafka</a></div>


            </div><h3 className="bg-red-500 text-3xl rounded-md px-2 py-1 inline-block font-bold text-gray-50">Mobile App Development</h3>
            <div className="grid grid-flow-col auto-cols-max gap-4 ">

              <div><a href="https://developer.android.com" target="_blank" rel="noreferrer"> <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/android/android-original-wordmark.svg"
                alt="android" className="h-10 w-10 mx-2 my-2" /> Android</a></div>

              <div><a href="https://reactnative.dev/" target="_blank" rel="noreferrer"> <img
                src="https://reactnative.dev/img/header_logo.svg" alt="reactnative" className="h-10 w-10 mx-2 my-2" />ReactNative </a></div>


            </div><h3 className="bg-red-500 text-3xl rounded-md px-2 py-1 inline-block font-bold text-gray-50">AI/ML</h3>
            <div className="grid grid-flow-col auto-cols-max gap-4 ">
              <div><a href="https://www.tensorflow.org" target="_blank" rel="noreferrer"> <img
                src="https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg" alt="tensorflow" className="h-10 w-10 mx-2 my-2" /> TensorFlow</a></div>

              <div><a href="https://scikit-learn.org/" target="_blank" rel="noreferrer"> <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" alt="scikit_learn"
                className="h-10 w-10 mx-2 my-2" /> Scikit-Learn</a></div>

              <div><a href="https://seaborn.pydata.org/" target="_blank" rel="noreferrer"> <img
                src="https://seaborn.pydata.org/_images/logo-mark-lightbg.svg" alt="seaborn" className="h-10 w-10 mx-2 my-2" />Seaborn
              </a></div>

              <div><a href="https://pytorch.org/" target="_blank" rel="noreferrer">
                <img src="https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg" alt="pytorch" className="h-10 w-10 mx-2 my-2" />Pytorch
              </a></div>

              <div><a href="https://opencv.org/" target="_blank" rel="noreferrer">
                <img src="https://www.vectorlogo.zone/logos/opencv/opencv-icon.svg" alt="opencv" className="h-10 w-10 mx-2 my-2" />
                OpenCV</a></div>

              <div><a href="https://pandas.pydata.org/" target="_blank" rel="noreferrer"> <img
                src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/pandas/pandas-original.svg"
                alt="pandas" className="h-10 w-10 mx-2 my-2" /> Pandas</a></div>


            </div><h3 className="bg-red-500 text-3xl rounded-md px-2 py-1 inline-block font-bold text-gray-50">Data Visualization</h3>
            <div className="grid grid-flow-col auto-cols-max gap-4 ">

              <div><a href="https://d3js.org/" target="_blank" rel="noreferrer"> <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/d3js/d3js-original.svg" alt="d3js"
                className="h-10 w-10 mx-2 my-2" />D3JS </a></div>


            </div><h3 className="bg-red-500 text-3xl rounded-md px-2 py-1 inline-block font-bold text-gray-50">Devops</h3>
            <div className="grid grid-flow-col auto-cols-max gap-4 ">

              <div><a href="https://kubernetes.io" target="_blank" rel="noreferrer"> <img
                src="https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg" alt="kubernetes" className="h-10 w-10 mx-2 my-2" />Kubernetes </a></div>

              <div><a href="https://www.docker.com/" target="_blank" rel="noreferrer"> <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg"
                alt="docker" className="h-10 w-10 mx-2 my-2" /> Docker</a></div>

              <div><a href="https://azure.microsoft.com/en-in/" target="_blank" rel="noreferrer"> <img
                src="https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg" alt="azure" className="h-10 w-10 mx-2 my-2" />Azure DevOps</a></div>

            </div><h3 className="bg-red-500 text-3xl rounded-md px-2 py-1 inline-block font-bold text-gray-50">Framework</h3>
            <div className="grid grid-flow-col auto-cols-max gap-4 ">

              <div><a href="https://www.djangoproject.com/" target="_blank" rel="noreferrer">
                <img src="https://cdn.worldvectorlogo.com/logos/django.svg" alt="django" className="h-10 w-10 mx-2 my-2" />Django </a></div>

              <div><a href="https://flask.palletsprojects.com/" target="_blank" rel="noreferrer">
                <img src="https://www.vectorlogo.zone/logos/pocoo_flask/pocoo_flask-icon.svg" alt="flask" className="h-10 w-10 mx-2 my-2" />Flask</a></div>

              <div><a href="https://dotnet.microsoft.com/" target="_blank" rel="noreferrer">
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original-wordmark.svg"
                  alt="dotnet" className="h-10 w-10 mx-2 my-2" /> .NET</a></div>


            </div><h3 className="bg-red-500 text-3xl rounded-md px-2 py-1 inline-block font-bold text-gray-50">Testing</h3>
            <div className="grid grid-flow-col auto-cols-max gap-4 ">
              <div><a href="https://jestjs.io" target="_blank" rel="noreferrer">
                <img src="https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg" alt="jest" className="h-10 w-10 mx-2 my-2" />
                JestJS
              </a></div>


            </div><h3 className="bg-red-500 text-3xl rounded-md px-2 py-1 inline-block font-bold text-gray-50">Database</h3>
            <div className="grid grid-flow-col auto-cols-max gap-4 ">
              <div><a href="https://www.postgresql.org" target="_blank" rel="noreferrer"> <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg"
                alt="postgresql" className="h-10 w-10 mx-2 my-2" />PostgreSQL </a></div>

              <div><a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"> <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
                alt="mongodb" className="h-10 w-10 mx-2 my-2" />MongoDB </a></div>

              <div><a href="https://www.microsoft.com/en-us/sql-server" target="_blank" rel="noreferrer"> <img
                src="https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg" alt="mssql" className="h-10 w-10 mx-2 my-2" />MS
                SQL </a></div>

              <div><a href="https://hive.apache.org/" target="_blank" rel="noreferrer"> <img
                src="https://www.vectorlogo.zone/logos/apache_hive/apache_hive-icon.svg" alt="hive" className="h-10 w-10 mx-2 my-2" />
                Apache Hive</a></div>


            </div><h3 className="bg-red-500 text-3xl rounded-md px-2 py-1 inline-block font-bold text-gray-50">Static Site Generation</h3>
            <div className="grid grid-flow-col auto-cols-max gap-4 ">

              <div><a href="https://jekyllrb.com/" target="_blank" rel="noreferrer"> <img
                src="https://www.vectorlogo.zone/logos/jekyllrb/jekyllrb-icon.svg" alt="jekyll" className="h-10 w-10 mx-2 my-2" />Jekyll
              </a></div>

              <div><a href="https://nextjs.org/" target="_blank" rel="noreferrer">
                <img src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg" alt="nextjs" className="h-10 w-10 mx-2 my-2" /> NextJS</a></div>



            </div><h3 className="bg-red-500 text-3xl rounded-md px-2 py-1 inline-block font-bold text-gray-50">Game Engines</h3>
            <div className="grid grid-flow-col auto-cols-max gap-4 ">
              <div><a href="https://unity.com/" target="_blank" rel="noreferrer"> <img
                src="https://www.vectorlogo.zone/logos/unity3d/unity3d-icon.svg" alt="unity" className="h-10 w-10 mx-2 my-2" />Unity </a></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
