import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-merriweather">
      {/* Need a NavBar on this page to get back to home */}
      <div className="flex-col p-12">
        <div className="flex-row grow max-w-screen">
          <h1 className="text-8xl text-jm-blue italic">Hi, I&apos;m Joe Maffa!</h1>
        </div>
        <div className="lg:flex flex-row w-full">
          <div className="flex flex-col lg:w-1/2">
            <h3 className="text-3xl italic pt-6 pb-6">I'm a <b>design-oriented full-stack engineer</b> responsibly navigating the growing tech landscape and its intersection with education and healthcare systems.</h3>
            <h3 className="text-xl pb-6">As a rising senior at Brown University, I've been deeply involved with the computer science department as a teaching assistant for introductory (<a className="font-bold underline hover:text-jm-red hover:decoration-jm-yellow decoration-2" target="_blank" href="https://cs.brown.edu/courses/csci0111/">cs111</a> & <a className="font-bold underline hover:text-jm-red hover:decoration-jm-yellow decoration-2" target="_blank" href="https://cs.brown.edu/courses/info/csci0150/">cs15</a>) and intermediate courses (<a className="font-bold underline hover:text-jm-red hover:decoration-jm-yellow decoration-2" target="_blank" href="https://cs.brown.edu/courses/info/csci0320/">cs32</a>). I am passionate about enhancing the student experience on both ends of the TA program.</h3>
            <h3 className="text-xl pb-6">Outside of class, I play <a target="_blank" className="font-bold underline hover:text-jm-red hover:decoration-jm-yellow decoration-2" href="https://gendotaiko.com/">taiko</a>, <a target="_blank" className="font-bold underline hover:text-jm-red hover:decoration-jm-yellow decoration-2" href="https://sites.google.com/brown.edu/brownclubtennis/home?authuser=0"> tennis</a>, and edit a <a target="_blank" className="font-bold underline hover:text-jm-red hover:decoration-jm-yellow decoration-2" href="https://www.browndailyherald.com/post-magazine">creative nonfiction magazine</a>. I also love eating around Providence, taking photos, and raving about music.</h3>
            <h3 className="text-xl">Thanks for stopping by :)</h3>
          </div>
          <div className="flex justify-center place-items-center lg:w-1/2  object-right">
            <Image className="rounded-full" src="/self.jpg" alt="Joe playing taiko" width="450" height="450" />
          </div>
        </div>
      </div>
      <div className="w-full lg:flex flex-row pl-12">
        <div className="flex flex-row lg:w-1/2 underline decoration-jm-yellow text-xl justify-evenly font-bold">
          <div className="pl-0 p-4 w-1/4"><a className="underline hover:text-jm-red hover:decoration-jm-yellow decoration-2" href="/projects">Projects</a></div>
          <div className="p-4 w-1/4"><a className="underline hover:text-jm-red hover:decoration-jm-yellow decoration-2" href="/about">About</a></div>
          <div className="p-4 w-1/4"><a className="underline hover:text-jm-red hover:decoration-jm-yellow decoration-2" href="/about">Fun</a></div>
          <div className="p-4 w-1/4"><a className="underline hover:text-jm-red hover:decoration-jm-yellow decoration-2" href="/contact">Contact Me</a></div>
        </div>
      </div>
      

    </div>
    

  );
}
