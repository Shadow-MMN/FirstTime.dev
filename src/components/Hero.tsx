const Hero = () => {
  return (
    <header className="flex flex-col items-center justify-center text-center mt-12 md:mt-20 px-4">
      <div className="max-w-[700px]">
        <h1 className="text-stone-800 text-3xl md:text-4xl xl:text-5xl font-semibold dark:text-stone-100">
          FirstTime.dev
        </h1>
        <p className="text-stone-600 dark:text-stone-300 text-base md:text-lg my-4 leading-relaxed">
          Discover beginner-friendly GitHub issues and start your open-source
          journey with ease.{" "}
          <span className="text-blue-600 dark:text-blue-400 font-medium">
            FirstTime.dev
          </span>{" "}
          helps developers find projects that match their skill level. This
          ensures you can focus on learning, building, and contributing
          confidently.
        </p>
      </div>
    </header>
  );
};

export default Hero;
