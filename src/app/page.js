import Image from "next/image";

export default function Home() {
  return (
    <div className="flex-col min-h-screen font-merriweather">
      {/* Need a NavBar on this page to get back to home */}
      <div className="flex-col p-12">
        <div className="flex-row grow max-w-screen">
          <h1 className="text-8xl text-jm-blue italic">Hi, I&apos;m Joe Maffa!</h1>
        </div>
        <div className="text-3xl w-3/4">
          <h3 className="text-2xl">I'm a <b>design-oriented full-stack engineer</b> responsibly navigating the growing tech landscape and its intersection with education and healthcare systems.</h3>
          <h3 className="text-xl">As a rising senior at Brown University, I've been deeply involved with the computer science department as a teaching assistant for introductory and intermediate courses. I am passionate about enhancing the student experience on both ends of the TA program.</h3>
          <h3 className="text-xl">Outside of class, I play <a href="https://gendotaiko.com/">taiko</a>, <a href="https://sites.google.com/brown.edu/brownclubtennis/home?authuser=0">tennis</a>, and edit a <a href="https://www.browndailyherald.com/post-magazine">creative nonfiction magazine</a>. I also love eating around Providence, taking photos, and raving about music.</h3>
          <h3 className="text-xl">Thanks for stopping by :)</h3>
        </div>
      </div>
      <div className="flex flex-row w-1/2 p-12 underline decoration-jm-yellow">
        <div className="pl-0 p-4 w-1/4"><a className="hover:font-bold" href="/projects">Projects</a></div>
        <div className="p-4 w-1/4"><a className="hover:font-bold" href="/about">About</a></div>
        <div className="p-4 w-1/4"><a className="hover:font-bold" href="/about">Fun</a></div>
        <div className="p-4 w-1/4"><a className="hover:font-bold" href="/contact">Contact Me</a></div>
      </div>

    </div>
    

  );
}
