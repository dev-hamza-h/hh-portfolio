"use client";

import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.current) {
      emailjs.sendForm(
        'service_66flsoq',
        'template_7rh8ylm',
        form.current,
        'MoYQr81-KqPrSOm1a'
      )
      .then((result) => {
          console.log(result.text);
          setIsSubmitted(true);
      }, (error) => {
          console.log(error.text);
          alert("Failed to send message. Please try again.");
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen  bg-blue-950 text-white">
      {isSubmitted ? (
        <div className="fixed inset-0 bg-white bg-opacity-100 flex flex-col items-center justify-center">
          <div className="text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-500 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 11l3 3L22 4" />
              <path d="M21 12v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h11" />
            </svg>
            <h2 className="text-2xl font-bold mt-4 text-green-600">Form submitted successfully!</h2>
            <p className="text-gray-700 mt-2">Thank you! We will reply to you soon.</p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg"
            >
              Go back
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col-reverse md:flex-row md:items-start p-8 max-w-6xl mt-10 mb-16 space-y-8 md:space-y-0 md:space-x-60">
          
          {/* Let’s Connect Section - Appears below the form on smaller screens */}
          <div className="w-full md:w-1/3 text-center md:text-left animate-slideFromTop md:mt-32">
            <h2 className="text-2xl font-bold mb-4 font-serif">Let’s Connect</h2>
            <p className="mb-4">
              I&apos;m currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="https://github.com/dev-hamza-h" target="_blank" rel="noopener noreferrer">
                <FaGithub className="h-8 w-8 text-white hover:text-gray-500 transition duration-300" />
              </a>
              <a href="https://linkedin.com/in/hamzahassan-webdev" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="h-8 w-8 text-white hover:text-sky-400 transition duration-300" />
              </a>
            </div>
          </div>

          {/* Contact Form - Appears first on smaller screens */}
          <form ref={form} onSubmit={sendEmail} className="w-full md:w-2/3 max-w-lg p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-12 text-center animate-slideFromTop">
              <span className="text-white">Contact </span>
              <span className="text-cyan-400">Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-slideInRight">
              <div>
                <input
                  type="text"
                  name="from_name"
                  placeholder="Full Name"
                  required
                  className="w-full p-3 border border-cyan-500 bg-transparent rounded-xl placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="reply_to"
                  placeholder="Email Address"
                  required
                  className="w-full p-3 border border-cyan-500 bg-transparent rounded-xl placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Mobile Number"
                  required
                  className="w-full p-3 border border-cyan-500 bg-transparent rounded-xl placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Email Subject"
                  required
                  className="w-full p-3 border border-cyan-500 bg-transparent rounded-xl placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="mt-4 animate-slideInRight">
              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                required
                className="w-full p-3 border border-cyan-500 bg-transparent rounded-xl placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <div className="flex justify-center animate-slideInFromBottom">
              <button
                type="submit"
                className="mt-6 w-32 py-2 bg-cyan-500 text-white font-semibold rounded-lg hover:bg-cyan-400 transition duration-500 hover:scale-105"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Contact;