import React from "react";

function Home() {
  return (
    <div className="bg-gray-900 text-white h-screen flex flex-col justify-center items-center">
      <h1 className="text-6xl font-extrabold mb-4">Je suis Guillaume C</h1>
      <p className="text-xl mb-8">Développeur Web Freelance - Spécialiste React & Tailwind CSS</p>
      <a
        href="/portfolio"
        className="px-8 py-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-300"
      >
        Découvrir mes projets
      </a>
    </div>
  );
}

export default Home;
