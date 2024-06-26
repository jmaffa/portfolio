import React from "react";
import NavBar from "../../components/navbar";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <div className="pl-16">
        <h1 className="text-jm-blue text-6xl">About</h1>
        <p>
          <b>WIP:</b> I&apos;m excited to tell you more about myself... after I
          finish my finals :-)
        </p>
      </div>
    </div>
  );
}
