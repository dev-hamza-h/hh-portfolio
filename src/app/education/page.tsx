import React from 'react';

const Education: React.FC = () => {
  return (
    <div className="bg-blue-950 text-white min-h-screen flex flex-col items-center pt-10">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 mt-16 animate-slideFromTop">
        My <span className="text-cyan-500">Education</span>
      </h1>
      <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mt-6 relative px-4 sm:px-0 animate-slideInLeft">
        {/* Timeline container */}
        <div className="border-l-4 border-cyan-400 relative">
          {/* Education Block - Right */}
          <div className="mb-8 md:mb-10 ml-6 sm:ml-10 flex flex-col md:flex-row-reverse items-start">
            <div className="w-4 h-4 sm:w-5 sm:h-5 bg-cyan-400 rounded-full animate-pulse mt-1 sm:mr-4"></div>
            <div className="mt-2 md:mt-0">
              <p className="text-cyan-400 font-semibold text-sm sm:text-lg">2020 - 2021</p>
              <div className="bg-sky-800 p-3 sm:p-4 rounded-lg border-2 border-cyan-400 mt-2 hover:shadow-[0_4px_20px_rgba(0,255,255,0.6)] hover:shadow-cyan-500">
                <h3 className="font-semibold text-base sm:text-lg">Matriculation (Science-Biology)</h3>
                <p className="text-xs sm:text-sm">
                  Pursued School studies with Science at Rakhshinda Public School.
                </p>
              </div>
            </div>
          </div>

          {/* Education Block - Left */}
          <div className="mb-8 md:mb-10 ml-6 sm:ml-10 flex flex-col md:flex-row items-start">
            <div className="w-4 h-4 sm:w-5 sm:h-5 bg-cyan-400 rounded-full animate-pulse mt-1 sm:mr-4"></div>
            <div className="mt-2 md:mt-0">
              <p className="text-cyan-400 font-semibold text-sm sm:text-lg">2022 - 2023</p>
              <div className="bg-sky-800 p-3 sm:p-4 rounded-lg border-2 border-cyan-400 mt-2 hover:shadow-[0_4px_20px_rgba(0,255,255,0.6)] hover:shadow-cyan-500">
                <h3 className="font-semibold text-base sm:text-lg">Intermediate (FSC pre-engineering)</h3>
                <p className="text-xs sm:text-sm">
                  Pursued college studies with Science (Engineering) at Government College Forman Nazimabad.
                </p>
              </div>
            </div>
          </div>

          {/* Education Block - Right */}
          <div className="mb-8 md:mb-10 ml-6 sm:ml-10 flex flex-col md:flex-row-reverse items-start">
            <div className="w-4 h-4 sm:w-5 sm:h-5 bg-cyan-400 rounded-full animate-pulse mt-1 sm:mr-4"></div>
            <div className="mt-2 md:mt-0">
              <p className="text-cyan-400 font-semibold text-sm sm:text-lg">2024 - 2025</p>
              <div className="bg-sky-800 p-3 sm:p-4 rounded-lg border-2 border-cyan-400 mt-2 hover:shadow-[0_4px_20px_rgba(0,255,255,0.6)] hover:shadow-cyan-500">
                <h3 className="font-semibold text-base sm:text-lg">Generative AI Web3 & Metaverse</h3>
                <p className="text-xs sm:text-sm">
                  Embarked on my AI journey at GIAIC, acquiring valuable knowledge and insights.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
