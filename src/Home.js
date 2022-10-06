import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <div className=" font-extralight font-Poppins mb-4 mt-10 text-primary font-semibold">
      <div className="bg-transparent absolute flex right-12 top-10  z-50 ">
        {" "}
        <div className=" flex gap-10">
          {" "}
          <Link to="/About">Contact</Link>{" "}
          <Link to="/About">About</Link>{" "}
        </div>
      </div>
      <div class="">
        <div className="flex font-normal justify-start text-nine mt-40 ml-32">Sarah Kane</div>
        <div className=" text-five flex justify-center pl-32 pr-32">
          <p>
            {" "}
            I am a product designer with a background in front-end engineering.
            My work ethos can be expressed in one phrase,{" "}
            <span className="text-secondary">
              {" "}
              design with care, build with integrity.
            </span>
          </p>
        </div>
      </div>
      <div className="h-1 w-full mb-24 mt-32"></div>

      <div className="justify-around flex">
        <div className=" mt-20">
          <div className="text-eight font-normal ">Aprender</div>
          <div className="flex gap-2  text-gray-500 text-five">
            <div className="">Role:</div>
            <div className="">UX/UI Desigher, UX Researcher</div>
          </div>
          <p className="text-left mt-5 w-96 text-four">
            Yes. Another language learning app to add to the millions that are
            already out there.{" "}
            <span className="text-secondary text-four">
              But this one solves a problem in a way I have not seen before.
            </span>
          </p>
        </div>
        <div className="relative justify-center flex  ">
          <Link
            to="/aprender"
            className="
            bottom-16 
            px-20 py-1.5 
            left-6 
            absolute 
            border-white 
            rounded-full 
            border-2  
            text-white 
            h-10  
            font-Bhaijaan2 
            font-medium 
            animate-bounce"
          >
            Explore
          </Link>
          <img
            className=""
            width={270}
            height={600}
            src={"/images/explore-aprender.svg"}
            alt="Explore Screen"
          ></img>
        </div>
      </div>

      <div className="justify-around flex mt-32 mb-32">
        <div className="relative justify-center flex ">
          <Link
            to="/state-fair"
            className="bottom-7 px-24 py-1.5  absolute border-stateFairWhite rounded border font-Montserrat font-bold  text-stateFairWhite h-10 animate-bounce"
          >
            GO
          </Link>
          <img
            className=""
            width={270}
            height={600}
            src={"/images/state-fair-home-screen.svg"}
            alt="Explore Screen"
          ></img>
        </div>
        <div className=" mt-40">
          <div className="text-eight font-normal ">State Fair</div>
          <div className="flex gap-2  text-gray-500 text-five">
            <div className="">Role:</div>
            <div className="">UX/UI Designer, UX Researcher</div>
          </div>
          <p className=" text-left text-secondary mt-5 text-lg">Comming Soon...</p>
          <p className=" mt-10 text-lg w-96 hidden">
            Yet another redsign...{" "}
            <span className="text-secondary text-lg">
              But I tried to make it interesting, so bare with me.
            </span>
          </p>
          <div className="flex gap-2 text-xs">
            <div className=" mt-5 w-96"></div>
          </div>
        </div>
      </div>
      <div className="justify-around flex">
        <div className=" mt-32">
          <div className="flex text-left font-normal  text-eight text-Poppins">SOMO</div>
          <div className="flex gap-2 text-gray-500 text-five">
            <div className="">Role:</div>
            <div className="">UX/UI Designer, UX Researcher</div>
          </div>
          <p className=" text-left text-secondary mt-5 text-lg">Comming Soon...</p>
          <div className="flex gap-2 text-xs">
            <div className=" mt-5 w-96 text-white"></div>
          </div>
        </div>
        <div className="relative justify-center flex ">
          <Link
            to="somo"
            className="bottom-16 px-20 py-1.5  absolute border-somoBlue rounded-full border-2  text-somoBlue h-10 font-Inter font-bold animate-bounce "
          >
            Duka
          </Link>
          <img
            className=""
            width={270}
            height={600}
            src={"/images/somo-landing-screen.svg"}
            alt="Explore Screen"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Home;
