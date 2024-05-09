import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-col w-full lg:hidden sm:flex-row sm:justify-evenly text-center sm:text-left px-12 py-6 text-xl font-bold">
        <div className="">
          <a
            className="underline hover:text-jm-red hover:decoration-jm-yellow decoration-2"
            href="/"
          >
            home
          </a>
        </div>
        <div className="sm:basis-full flex sm:flex-row flex-col underline decoration-jm-yellow sm:justify-evenly font-bold">
          <div className="">
            <a
              className="underline hover:text-jm-red hover:decoration-jm-yellow decoration-2"
              href="/projects"
            >
              projects
            </a>
          </div>
          <div className="">
            <a
              className="underline hover:text-jm-red hover:decoration-jm-yellow decoration-2"
              href="/about"
            >
              about
            </a>
          </div>
          <div className="">
            <a
              className="underline hover:text-jm-red hover:decoration-jm-yellow decoration-2"
              href="/fun"
            >
              fun
            </a>
          </div>
          <div className="">
            <a
              className="underline hover:text-jm-red hover:decoration-jm-yellow decoration-2"
              href="/contact"
            >
              contact me
            </a>
          </div>
        </div>
      </div>
      {/* Need a NavBar on this page to get back to home */}
      <div className="flex-col px-6 lg:px-12 lg:py-4">
        <div className="flex-row grow max-w-screen">
          <h1 className="text-8xl text-jm-blue italic">
            Hi, I&apos;m Joe Maffa!
          </h1>
        </div>
        <div className="lg:flex flex-row w-full">
          <div className="flex flex-col lg:w-3/4">
            <h3 className="text-2xl italic pt-6 pb-6">
              I&apos;m a <b>design-oriented full-stack engineer</b> responsibly
              navigating the growing tech landscape and its intersection with
              education and healthcare systems.
            </h3>
            <h3 className="text-lg pb-6">
              As a rising senior at Brown University, I&apos;ve been deeply
              involved with the computer science department as a teaching
              assistant for introductory (
              <a
                className="font-bold underline hover:text-jm-red hover:decoration-jm-yellow decoration-2"
                target="_blank"
                href="https://cs.brown.edu/courses/csci0111/"
              >
                cs111
              </a>{" "}
              &{" "}
              <a
                className="font-bold underline hover:text-jm-red hover:decoration-jm-yellow decoration-2"
                target="_blank"
                href="https://cs.brown.edu/courses/info/csci0150/"
              >
                cs15
              </a>
              ) and intermediate courses (
              <a
                className="font-bold underline hover:text-jm-red hover:decoration-jm-yellow decoration-2"
                target="_blank"
                href="https://cs.brown.edu/courses/info/csci0320/"
              >
                cs32
              </a>
              ). I am passionate about enhancing the student experience on both
              ends of the TA program.
            </h3>
            <h3 className="text-lg pb-6">
              Outside of class, I play{" "}
              <a
                target="_blank"
                className="font-bold underline hover:text-jm-red hover:decoration-jm-yellow decoration-2"
                href="https://gendotaiko.com/"
              >
                taiko
              </a>
              ,{" "}
              <a
                target="_blank"
                className="font-bold underline hover:text-jm-red hover:decoration-jm-yellow decoration-2"
                href="https://sites.google.com/brown.edu/brownclubtennis/home?authuser=0"
              >
                {" "}
                tennis
              </a>
              , and edit a{" "}
              <a
                target="_blank"
                className="font-bold underline hover:text-jm-red hover:decoration-jm-yellow decoration-2"
                href="https://www.browndailyherald.com/post-magazine"
              >
                creative nonfiction magazine
              </a>
              . I also love eating around Providence, taking photos, and raving
              about music.
            </h3>
            <h3 className="text-lg">Thanks for stopping by :)</h3>
          </div>
          <div className="pt-6 flex justify-center lg:justify-end place-items-center lg:w-1/2 lg:pt-0">
            <Image
              className="rounded-full"
              src="/self.jpg"
              alt="Headshot"
              width="400"
              height="400"
            />
          </div>
        </div>
      </div>
      <div className="w-full hidden lg:flex flex-row pl-12">
        <div className="flex flex-row lg:w-1/2 underline decoration-jm-yellow text-xl justify-evenly font-bold">
          <div className="pl-0 p-4 w-1/4">
            <a
              className="underline hover:text-jm-red hover:decoration-jm-yellow decoration-2"
              href="/projects"
            >
              projects
            </a>
          </div>
          <div className="p-4 w-1/4">
            <a
              className="underline hover:text-jm-red hover:decoration-jm-yellow decoration-2"
              href="/about"
            >
              about
            </a>
          </div>
          <div className="p-4 w-1/4">
            <a
              className="underline hover:text-jm-red hover:decoration-jm-yellow decoration-2"
              href="/fun"
            >
              fun
            </a>
          </div>
          <div className="p-4 w-1/4">
            <a
              className="underline hover:text-jm-red hover:decoration-jm-yellow decoration-2"
              href="/contact"
            >
              contact me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
