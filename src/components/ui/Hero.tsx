import React from "react";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto text-center flex flex-col items-center justify-center gap-5">
      <h1 className="text-6xl font-bold">
        Fund your <br />
        creative work
      </h1>
      <h2 className="mb-4">
        Accept support for your work. <br /> It's easier than you think.
      </h2>
      <button className="bg-yellow-500 border-2 border-white px-8 py-4 font-bold rounded-full hover:drop-shadow-lg hover:border-2 hover:border-yellow-900">
        Start my page
      </button>
    </section>
  );
};

export default Hero;
