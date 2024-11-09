import Image from 'next/image';
import AboutProfile from "@/assets/profile1.png";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-950 px-4 sm:px-8 md:px-16 pt-16 sm:pt-24"> 
      <div className="relative w-48 h-48 sm:w-64 sm:h-64 mb-6 flex items-center justify-center">
        <div className="absolute w-52 h-52 sm:w-64 sm:h-64 border-8 border-t-transparent border-cyan-500 rounded-full spin-slow "></div>
        <div className="relative w-44 h-44 sm:w-56 sm:h-56 rounded-full border-2 border-cyan-300 flex items-center justify-center "> 
          <Image
            src={AboutProfile}
            alt="Profile Picture"
            width={218}  
            height={218} 
            className="rounded-full"
          />
        </div>
      </div>

      <h2 className="text-4xl font-bold text-white animate-slideInFromBottom ">
        About <span className="text-cyan-500">Me</span>
      </h2>
      <p className="text-2xl font-semibold text-white mt-2 animate-slideInFromBottom">Web Developer</p>

      <p className="text-center text-gray-300 mt-4 font-semibold sm:max-w-2xl lg:max-w-4xl mx-auto sm:mx-4 md:mx-8 w-full animate-slideInFromBottom">
        I&apos;m Hamza Hassan, & I&apos;m a student at the Governor Initiative, exploring the dynamic fields of Cloud, Applied Generative AI,
        & Web 3.0 and I&apos;m a passionate web developer who specializes in using modern web technologies to create user-friendly and
        responsive websites and applications. I have expertise in HTML, CSS, JavaScript, TypeScript, React, and Next.js, and I always focus on
        providing user-centric solutions. My goal is to balance both performance and aesthetics in every project. Continuously improving my
        skills and staying up-to-date with new trends is my priority. I aim to create digital experiences that are impactful and engaging for users.
      </p>
    </div>
  );
};

export default About;
