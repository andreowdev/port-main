import React from "react";
import HeaderFinal from "../components/Header/index.jsx";
import Stack from "../components/stacks/stacks.jsx";
import Github from "../components/github/github.jsx";
import About from "../components/contents/about.jsx";
import "./home.css";
import SpotifyRecentTracks from "../components/spotify/SpotifyRecentTracks.jsx";
import Footer from "../components/footer/footer.jsx";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center   text-white py-14">
      <div className="container max-w-screen-lg rounded-lg ">
        <HeaderFinal />
        <main>
          <div className="flex lg:flex-row flex-col justify-between mt-8 person-div">
            <div className="bg-opacity-custom shadow-lg rounded-lg p-3 mb-4 lg:mb-0">
              <Stack />
            </div>
            <div className="w-full lg:w-2/3 h-56 text-white   rounded-lg  mr-32 ml-12">
              <SpotifyRecentTracks />
            </div>
          </div>
          <div className="mt-8 person rounded-lg">
            <Github />
          </div>
          <div className="mt-8 person rounded-lg">
            <About />
          </div>
        </main>
        <div className=" lg:flex-row justify-center mt-8">
            <Footer />
        </div>
      </div>
    </div>
  );
}
