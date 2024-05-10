import React from "react";
import NavBar from "../../components/navbar";
import Link from "next/link";

export default function contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <div className="pl-16">
        <h1 className="text-jm-blue text-6xl">Contact</h1>
        <p>
          <b>WIP:</b> I&apos;m excited to share how you can reach me in a nicer
          way ... after I finish my finals :-)
        </p>
        <p>
          But for now, you can email me at{" "}
          <Link
            className="underline hover:decoration-jm-yellow hover:text-jm-red"
            href={"mailto:joseph_maffa@brown.edu"}
          >
            joseph_maffa@brown.edu
          </Link>
          .
        </p>
        <p>
          Or you can find me on{" "}
          <Link
            className="underline hover:decoration-jm-yellow hover:text-jm-red"
            href={"https://www.linkedin.com/in/joseph-maffa/"}
          >
            LinkedIn
          </Link>.
        </p>
      </div>
    </div>
  );
}
