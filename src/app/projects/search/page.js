import React from "react";
import Image from "next/image";
import Link from "next/link";
import NavBar from "@/components/navbar";

export default function page() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <div className="flex flex-col items-center">
        <div className="w-3/5 max-h-screen align-middle">
          <Image
            className="rounded-lg"
            src="/search-cover.png"
            width={800}
            height={100}
            alt="Test"
          ></Image>
        </div>
        <div className="flex flex-row w-full pt-2">
          {/* Internal Nav */}
          <div className="hidden lg:inline pl-16 w-1/4 pt-8 text-base text-jm-blue sticky top-6 h-1/4">
            <Link className="hover:text-jm-red" href="#context">
              1. Context
            </Link>{" "}
            <br />
            <Link className="hover:text-jm-red" href="#ideation">
              2. Ideation
            </Link>{" "}
            <br />
            <Link className="hover:text-jm-red" href="#personas">
              3. Personas
            </Link>{" "}
            <br />
            <Link className="hover:text-jm-red" href="#comparative-analysis">
              4. Comparative Analysis
            </Link>{" "}
            <br />
            <Link className="hover:text-jm-red" href="#user-flows">
              5. User Flows
            </Link>{" "}
            <br />
            <Link className="hover:text-jm-red" href="#wireframes">
              6. Wireframes
            </Link>{" "}
            <br />
            <Link className="hover:text-jm-red" href="#prototype">
              7. Prototype
            </Link>{" "}
            <br />
            <Link className="hover:text-jm-red" href="#conclusion">
              8. Conclusion
            </Link>{" "}
            <br />
          </div>
          {/* Actual Case Study */}
          <div className="w-full px-8 lg:w-3/4 pt-2 lg:pr-36 lg:pl-0 ">
            {/* Overview */}
            <div className="py-4">
              <h1 className="text-5xl pb-2">
                Social Enterprise Management System
              </h1>
              <p className="text-lg">
                Fostering innovation in the Philippines by connecting aspiring
                entrepreneurs with experienced consultants.
              </p>
            </div>

            <div className="w-4/5 grid grid-cols-3 gap-4 py-4 border-solid border-y-2 border-jm-blue">
              <div>
                <h3 className="font-bold text-jm-blue text-xl">Client</h3>
                <p>
                  <Link
                    target="_blank"
                    href="https://www.bayansearch.org/"
                    className="underline hover:decoration-jm-yellow hover:text-jm-red"
                  >
                    Social Economy Action Research Foundation
                  </Link>{" "}
                  &
                  <br />{" "}
                  <Link
                    href={
                      "https://www.linkedin.com/in/paul-andrei-medina-56b04521b/"
                    }
                    className="underline hover:decoration-jm-yellow hover:text-jm-red"
                  >
                    Paul Medina
                  </Link>
                  —General Manager
                </p>
              </div>
              <div>
                <h3 className="font-bold text-jm-blue text-xl">Role</h3>
                <p>Product Manager</p>
              </div>
              <div>
                <h3 className="font-bold text-jm-blue text-xl">Date</h3>
                <p>May - August 2023</p>
              </div>
              <div>
                <h3 className="font-bold text-jm-blue text-xl">Tools</h3>
                <p>Figjam, Figma, Notion</p>
              </div>
              <div>
                <h3 className="font-bold text-jm-blue text-xl">Team</h3>
                <p>
                  <Link
                    href={"https://www.linkedin.com/in/rebeccajhy/"}
                    className="underline hover:decoration-jm-yellow hover:text-jm-red"
                  >
                    Rebecca Jiang
                  </Link>
                  —Design Manager
                  <br />
                  <Link
                    href={"https://www.linkedin.com/in/audrey-garc/"}
                    className="underline hover:decoration-jm-yellow hover:text-jm-red"
                  >
                    Audrey Garcia
                  </Link>
                  —Product Lead
                  <br />
                  <Link
                    href={"https://www.linkedin.com/in/anthony-manrique/"}
                    className="underline hover:decoration-jm-yellow hover:text-jm-red"
                  >
                    Anthony Manrique
                  </Link>
                  —Designer
                  <br />
                  <Link
                    href={"https://www.linkedin.com/in/tsuai/"}
                    className="underline hover:decoration-jm-yellow hover:text-jm-red"
                  >
                    Cynthia Cui
                  </Link>
                  —Designer
                  <br />
                  <Link
                    href={"https://www.linkedin.com/in/gabrielvicencio/"}
                    className="underline hover:decoration-jm-yellow hover:text-jm-red"
                  >
                    Gabe Vicencio
                  </Link>
                  —Designer
                  <br />
                  <Link
                    href={"https://www.linkedin.com/in/sejeonggwon/"}
                    className="underline hover:decoration-jm-yellow hover:text-jm-red"
                  >
                    Sejeong Gwon
                  </Link>
                  —Designer
                  <br />
                  <Link
                    href={"https://www.linkedin.com/in/srihan-reddy-618760231/"}
                    className="underline hover:decoration-jm-yellow hover:text-jm-red"
                  >
                    Srihan Reddy
                  </Link>
                  —Designer
                  <br />
                  <Link
                    href={"https://www.linkedin.com/in/tamtranht02/"}
                    className="underline hover:decoration-jm-yellow hover:text-jm-red"
                  >
                    Tam Tran
                  </Link>
                  —Designer
                  <br />
                  <Link
                    href={"https://www.linkedin.com/in/valeriekristenwong/"}
                    className="underline hover:decoration-jm-yellow hover:text-jm-red"
                  >
                    Valerie Wong
                  </Link>
                  —Designer
                  <br />
                  <Link
                    href={"https://www.linkedin.com/in/wendy-poon/"}
                    className="underline hover:decoration-jm-yellow hover:text-jm-red"
                  >
                    Wendy Poon
                  </Link>
                  —Designer
                  <br />
                </p>
              </div>
              <div>
                <h3 className="font-bold text-jm-blue text-xl">Links</h3>
                <Link
                  target="_blank"
                  className="underline hover:decoration-jm-yellow hover:text-jm-red"
                  href={
                    "https://www.figma.com/file/mXr8cXGpoN6aN7UEwApenm/Social-Economy-Action-Research-Foundation?type=design&node-id=6%3A4&mode=design&t=R5ccy7jHkf0nrnz8-1"
                  }
                >
                  Figma Prototypes & Wireframes
                </Link>{" "}
                <br />
                <Link
                  target="_blank"
                  className="underline hover:decoration-jm-yellow hover:text-jm-red"
                  href={
                    "https://www.figma.com/file/6O4yC5DpfO54PcIJJ8pjOE/SEAR-Brainstorm-Session?type=whiteboard&node-id=0-1&t=resAXWzVr7AZGnfU-0"
                  }
                >
                  Figjam
                </Link>
                <br />
                <Link
                  target="_blank"
                  className="underline hover:decoration-jm-yellow hover:text-jm-red"
                  href={
                    "https://www.notion.so/developforgood/Social-Economy-Action-Research-Foundation-designing-a-mobile-app-for-aspiring-social-entrepreneurs-ecc4528eeb5f47cc8bcfeae28bce31de?pvs=4#747da17e4fca43a29bde7170fc801895"
                  }
                >
                  Demo
                </Link>
                <br />
                <Link
                  target="_blank"
                  className="underline hover:decoration-jm-yellow hover:text-jm-red"
                  href={
                    "https://www.notion.so/developforgood/Social-Economy-Action-Research-Foundation-designing-a-mobile-app-for-aspiring-social-entrepreneurs-ecc4528eeb5f47cc8bcfeae28bce31de"
                  }
                >
                  Case Study + Clearer Images
                </Link>
              </div>
            </div>
            {/* Case Study */}
            <div className="py-4">
              <div id="context" className="text-xl py-4">
                <h3 className="text-2xl font-semibold py-2 text-jm-blue">
                  Context
                </h3>
                <p className="text-base pb-4">
                  The Social Economy Action Research Foundation (SEARCH) is a
                  community organization in the Philippines that empowers
                  grassroots organizations and social enterprises to create
                  positive social impacts in their communities. From their
                  research, they found that 9 out of 10 social enterprises fail
                  to thrive and succeed in their mission due to a lack of
                  funding or awareness of running a business at scale.
                </p>
                <p className="text-base font-semibold italic pb-4">
                  How can we get these social enterprises off the ground, so
                  they can make a positive impact in their communities?
                </p>
                <p className="text-base pb-4">
                  As a product manager for Develop for Good, I led a team of 8
                  designers, a design manager, and a product lead to design a
                  mobile application that connects aspiring social entrepreneurs
                  with experienced consultants in order to bridge the knowledge
                  and funding gap that these local organizations face.
                </p>
              </div>
              <div id="ideation" className="text-xl py-4">
                <h3 className="text-2xl font-semibold py-2 text-jm-blue">
                  Ideation
                </h3>
                <p className="text-base pb-4">
                  Leading the communication with our client Paul, we began by
                  agreeing upon a product requirements document outlining the
                  key features and target users of the application. In
                  explaining the project to our team, Paul first envisioned the
                  app to be a data metrics tool similar to Tableau or Power BI
                  but geared towards people with less comfort with or access to
                  complex technical products. After trying to develop a PRD for
                  this idea, we realized that what lay at the core of the
                  problem was a lack of ability to interpret and tackle key
                  business insights.
                </p>
                <p className="text-base pb-4">
                  In short,{" "}
                  <b>
                    the aspiring entrepreneurs did not necessarily need the
                    aggregated data, but rather the ability to understand and
                    act on it.
                  </b>{" "}
                  This led us to our final product vision: a consultancy app
                  where users could synchronously connect over video chat with
                  consultants to receive personalized advice and guidance. As
                  consultants, they are able to receive payments for their
                  services and also fund entrepreneurs that they believe in.
                  Alternatively, these entrepreneurs would also be able to apply
                  for grants to help get their project off the ground.
                </p>
              </div>
              <div id="personas" className="text-xl py-4">
                <h3 className="text-2xl font-semibold py-2 text-jm-blue">
                  Personas
                </h3>
                <p className="text-base pb-4">
                  After agreeing on the scope of our design, our team started
                  brainstorming personas for our intended users, an aspiring
                  entrepreneur and a social enterprise consultant.
                </p>
                {/* TODO: IMAGES */}
                <Image
                  className="rounded-lg object-fill max-w-1/2 mx-auto my-4"
                  src="/search-persona-ae.png"
                  width={600}
                  height={100}
                  alt="Aspiring Entrepreneur Persona"
                ></Image>
                <Image
                  className="rounded-lg object-fill max-w-1/2 mx-auto my-4"
                  src="/search-persona-sec.png"
                  width={600}
                  height={100}
                  alt="Aspiring Entrepreneur Persona"
                ></Image>
              </div>
              <div id="comparative-analysis" className="text-xl py-4">
                <h3 className="text-2xl font-semibold py-2 text-jm-blue">
                  Comparative Analysis
                </h3>
                <p className="text-base pb-4">
                  To brainstorm how we wanted our design to look, we conducted
                  comparative analyses for a few different key features: meeting
                  scheduling, video conferencing, and payment. We specifically
                  looked at popular platforms like Calendly, Microsoft Teams,
                  LinkedIn, Zoom, ADPList, Google Meets for meetings. For
                  payment, we looked at Stripe, Venmo, PayPal and local
                  Philippines apps like GCash and Pay Maya.
                </p>
                <p className="text-base pb-4">
                  Out of these and informed by user research, we found that the
                  most important features for our app were:
                </p>
                <ul className="list-disc text-base pl-4">
                  <li>See and adjust availability for scheduling meetings</li>
                  <li>Chat functionality during meetings</li>
                  <li>Taking and saving notes from meetings</li>
                  <li>Sharing paper figures with consultants</li>
                  <li>Preparing for meetings by sharing notes in advance</li>
                  <li>Receiving payment through multiple routes</li>
                </ul>
                <Image
                  className="rounded-lg object-fill max-w-1/2 mx-auto my-4"
                  src="/search-ca-money.png"
                  width={600}
                  height={100}
                  alt="Comparative Analysis: Payment"
                ></Image>
                <Image
                  className="rounded-lg object-fill max-w-1/2 mx-auto my-4"
                  src="/search-ca-meeting.png"
                  width={600}
                  height={100}
                  alt="Comparative Analysis: Meetings"
                ></Image>
              </div>
              <div id="user-flows" className="text-xl py-4">
                <h3 className="text-2xl font-semibold py-2 text-jm-blue">
                  User Flows
                </h3>
                <p className="text-base pb-4">
                  Using Figjam, we then brainstormed user flows for our app.
                  After signing up or logging in, we saw 4 main routes:
                  scheduling a meeting, conducting a meeting, receiving payment,
                  or browsing funding opportunities. You can view a couple user
                  flows below. One main challenge in creating this was
                  determining whether we should create two completely different
                  interfaces for entrepreneurs versus consultants. In the end,
                  we decided to do that in order to separate concerns and
                  highlight exactly what needed to be seen by each party. For
                  example consultants needed to be able to receive their
                  payments and set the meeting availability whereas that may be
                  less important for entrepreneurs.
                </p>
                <Image
                  className="rounded-lg object-fill max-w-1/2 mx-auto my-4"
                  src="/search-uf.png"
                  width={600}
                  height={100}
                  alt="Consultation User Flow"
                ></Image>
              </div>
              <div id="wireframes" className="text-xl py-4">
                <h3 className="text-2xl font-semibold py-2 text-jm-blue">
                  Wireframes
                </h3>
                <p className="text-base pb-4">
                  As a product manager, I oversaw the development of sketches
                  and wireframes for our app. I helped brainstorm some of these
                  flows and communicated the product with the client. Over the
                  course of a two-week design sprint, we utilized feedback to
                  iterate on these wireframes to create a cohesive and effective
                  design.
                </p>
                <Image
                  className="rounded-lg object-fill max-w-1/2 mx-auto my-4"
                  src="/search-lf.png"
                  width={600}
                  height={100}
                  alt="Scheduling sketches and wireframes"
                ></Image>
                <Image
                  className="rounded-lg object-fill max-w-1/2 mx-auto my-4"
                  src="/search-mf.png"
                  width={600}
                  height={100}
                  alt="Scheduling Mid-Fidelity Wireframe"
                ></Image>
              </div>
              <div id="prototype" className="text-xl py-4">
                <h3 className="text-2xl font-semibold py-2 text-jm-blue">
                  Prototype
                </h3>
                <p className="text-base pb-4">
                  I then led a second design sprint to transform these
                  wireframes into an interactive prototype. At the end of the
                  design process, we presented our project to our client Paul as
                  well as to other volunteers and industry professionals within
                  Develop For Good.
                </p>
                <p className="text-base pb-4 italic font-bold">
                  “I believe that it can really make a real difference for the
                  vulnerable and marginalized sector! Thank you DFG for helping
                  us change lives and create a positive impact!” — Paul Medina
                </p>
                <Image
                  className="rounded-lg object-fill max-w-1/2 mx-auto my-4"
                  src="/search-hf.png"
                  width={600}
                  height={100}
                  alt="Scheduling high fidelity prototype"
                ></Image>
              </div>

              <div id="conclusion" className="text-xl py-4">
                <h3 className="text-2xl font-semibold py-2 text-jm-blue">
                  Conclusion
                </h3>
                <p className="text-base pb-4">
                  This was a project of many firsts for me. Before this point, I
                  had really only done engineering, so this was my first foray
                  into the design space. I dove head first into the challenge,
                  learning and picking up skills as I went. I am thankful for
                  the team that I was able to work with, as our design manager
                  was able to provide me with great resources to familiarize
                  myself with the different aspects of design projects,
                  including user flows, iterative wireframes, comparative
                  analyses, and information architectures. As product manager,
                  it was an exciting challenge to lead meetings about design
                  processes that I was not familiar with, but I approached it
                  with research and hands-on experience. This was also my first
                  time leading such a large team and communicating directly with
                  a client that was not mocked by school projects. I learned the
                  qualities of a great leader and communicator: flexibility,
                  preparedness, and clarity, especially in the face of frequent
                  project shifts and feedback.
                </p>
                <p className="text-base pb-4">
                  At the end of the summer, we handed off our design project to Paul and the rest of SEARCH. I&apos;m excited to see how it evolves with user testing and development. 
                  I am really looking forward to seeing how this platform will transform social enterprises in the Philippines, and I am really excited to work on more projects for social good in the future.

                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
