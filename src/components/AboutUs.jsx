import React from "react";
import MyImg from "../images/myimg.jpg";
const AboutUs = () => {
  return (
    <>
      <div>
        <section class="">
          <div class="gap-24 bg-gray-100 items-center px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div class="font-light text-gray-500 sm:text-lg ">
              <h1 className="text-5xl mb-5 font-bold xl:block hidden leading-tight text-black  underline decoration-indigo-700 decoration-4 underline-offset-4">
                About Me
              </h1>
              <p class="mb-4">
                We are strategists, designers and developers. Innovators and
                problem solvers. Small enough to be simple and quick, but big
                enough to deliver the scope you want at the pace you need. Small
                enough to be simple and quick, but big enough to deliver the
                scope you want at the pace you need.
              </p>
              <p>
                We are strategists, designers and developers. Innovators and
                problem solvers. Small enough to be simple and quick.
              </p>
            </div>
            <div class="">
              <img class="w-4/7 rounded-lg" src={MyImg}/>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutUs;
