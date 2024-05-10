import React from "react";
import NavBar from "../../components/navbar";

export default function Fun() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <div className="pl-16">
        <h1 className="text-jm-blue text-6xl">Fun</h1>
        <p>
          <b>WIP:</b> I&apos;m excited to share all the other things I do
          outside of the CIT... after I finish my finals :-)
        </p>
      </div>
    </div>
  );
}
