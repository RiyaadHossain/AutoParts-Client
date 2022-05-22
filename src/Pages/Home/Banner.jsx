import React from "react";

const Banner = () => {
  return (
    <div
      class="hero h-[94vh]"
      style={{
        backgroundImage: "url(https://api.lorem.space/image/car?w=1000&h=800)",
      }}
    >
      <div class="hero-overlay bg-opacity-60"></div>
      <div class="hero-content text-center text-neutral-content">
        <div class="">
          <h1 class="mb-5 max-w-xl text-4xl mx-auto md:text-5xl font-bold">World's Best <span className="text-red-800">Auto Parts</span> are here</h1>
          <p class="mb-5 md:text-lg max-w-2xl mx-auto">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button class="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
