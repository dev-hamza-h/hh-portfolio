import Link from "next/link";


export default function Footer() {
    return (
      <footer className="bg-blue-950 text-white py-6">
        <div className="container mx-auto text-center">
          <p className="text-sm mb-2">
            &copy; {new Date().getFullYear()} Hamza Hassan. All Rights Reserved.
          </p>
          <div className="flex justify-center space-x-4 font-semibold">
            <Link
              href="https://github.com/dev-hamza-h"
              className="text-white hover:text-transparent bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text transition font-serif"
              target="_blank" rel="noopener noreferrer"
            >
              GitHub
            </Link>
            <Link
              href="https://linkedin.com/in/hamzahassan-webdev"
              className="text-white hover:text-transparent bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text transition font-serif"
              target="_blank" rel="noopener noreferrer"
            >
              LinkedIn
            </Link>
            <Link
              href="mailto:hk5732065@gmail.com"
              className="text-white hover:text-transparent bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text transition font-serif"
            >
              Email
            </Link>
          </div>
        </div>
      </footer>
    );
}
