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
    <div className="min-h-screen flex flex-col items-center text-white py-14 px-4">
      <div className="max-w-screen-lg w-full rounded-lg">
        <HeaderFinal />

        <main className="w-full mt-8">
          <div className="flex flex-col lg:flex-row lg:justify-between gap-4">
            <div className="bg-opacity-custom shadow-lg rounded-lg p-4 flex-1 lg:w-1/3">
              <Stack />
            </div>
            <div className="w-full lg:w-2/3 h-auto text-white rounded-lg">
              <SpotifyRecentTracks />
            </div>
          </div>
          <div className="mt-8 bg-opacity-custom shadow-lg rounded-lg p-4">
            <Github />
          </div>
          <div className="mt-8 bg-opacity-custom shadow-lg rounded-lg p-4">
            <About />
          </div>
        </main>
        <div className="mt-8">
          <Footer />
        </div>
      </div>
    </div>
  );
}
