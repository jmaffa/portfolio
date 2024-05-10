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
            src="/uno-cover.png"
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
            <Link className="hover:text-jm-red" href="#project-brief">
              2. Project Brief
            </Link>{" "}
            <br />
            <Link className="hover:text-jm-red" href="#sketching">
              3. Sketching
            </Link>{" "}
            <br />
            <Link className="hover:text-jm-red" href="#low-fi">
              4. Low-Fidelity Wireframes
            </Link>{" "}
            <br />
            <Link className="hover:text-jm-red" href="#high-fi">
              5. High-Fidelity Wireframes
            </Link>{" "}
            <br />
            <Link className="hover:text-jm-red" href="#learnings">
              6. Learnings
            </Link>{" "}
            <br />
            <Link className="hover:text-jm-red" href="#conclusion">
              7. Conclusion
            </Link>{" "}
            <br />
          </div>
          {/* Actual Case Study */}
          <div className="w-full px-8 lg:w-3/4 pt-2 lg:pr-36 lg:pl-0 ">
            {/* Overview */}
            <div className="py-4">
              <h1 className="text-5xl pb-2">Iterative Design</h1>
              <p className="text-lg">
                Redesigning a flow to improve access to Medicare benefits for
                your loved ones.
              </p>
            </div>

            <div className="w-4/5 grid grid-cols-3 gap-4 py-4 border-solid border-y-2 border-jm-blue">
              <div>
                <h3 className="font-bold text-jm-blue text-xl">Client</h3>
                <p>
                  <Link
                    target="_blank"
                    href="https://www.unohealth.com/"
                    className="underline hover:decoration-jm-yellow hover:text-jm-red"
                  >
                    Uno Health
                  </Link>{" "}
                  &
                  <br />{" "}
                  <Link
                    href={
                      "https://www.linkedin.com/in/elise-livingston-6766a948/"
                    }
                    className="underline hover:decoration-jm-yellow hover:text-jm-red"
                  >
                    Elise Livingston
                  </Link>{" "}
                  <br />
                  Lead Product Designer
                </p>
              </div>
              <div>
                <h3 className="font-bold text-jm-blue text-xl">Role</h3>
                <p>Designer</p>
              </div>
              <div>
                <h3 className="font-bold text-jm-blue text-xl">Date</h3>
                <p>April 2024</p>
              </div>
              <div>
                <h3 className="font-bold text-jm-blue text-xl">Tools</h3>
                <p>Figma, Loom</p>
              </div>
              <div>
                <h3 className="font-bold text-jm-blue text-xl">Team</h3>
                <p>
                  <Link
                    href={"https://www.linkedin.com/in/zynyee/"}
                    className="underline hover:decoration-jm-yellow hover:text-jm-red"
                  >
                    Zyn Ang
                  </Link>{" "}
                  — Designer
                  <br />
                  <Link
                    href={
                      "https://www.linkedin.com/in/alejandro-jackson-926160213/"
                    }
                    className="underline hover:decoration-jm-yellow hover:text-jm-red"
                  >
                    Alejandro Jackson
                  </Link>
                  — Designer
                  <br />
                  <Link
                    href={"https://www.linkedin.com/in/joshua-lim-yong-loon/"}
                    className="underline hover:decoration-jm-yellow hover:text-jm-red"
                  >
                    Joshua Lim
                  </Link>
                  — Designer
                  <br />
                </p>
              </div>
              <div>
                <h3 className="font-bold text-jm-blue text-xl">Links</h3>
                <Link
                  target="_blank"
                  className="underline hover:decoration-jm-yellow hover:text-jm-red"
                  href={
                    "https://www.figma.com/file/aMHx2LP2RbsXxn48Py9IKt/Uno-Health-Overview-(Working)?type=design&node-id=2131%3A1697&mode=design&t=CWTrd13Z7WrPdCa1-1"
                  }
                >
                  Wireframes
                </Link>{" "}
                <br />
                <Link
                  target="_blank"
                  className="underline hover:decoration-jm-yellow hover:text-jm-red"
                  href={
                    "https://www.loom.com/share/4ad33165524447fb889548e92bb0d542?sid=ac9c6ba7-8104-4242-8683-661f4446fa7a"
                  }
                >
                  Loom Walkthrough
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
                  Uno Health is a healthtech startup that helps identify
                  eligible Medicare members in order to enroll them in
                  government funded programs. The company&apos;s main user base
                  is made up of people that are 65 years or older. Although they
                  have a large user base already, there is a subset of the
                  possible eligible users that are not being reached due to a
                  lack of tech fluency.
                </p>
                <p className="text-base font-semibold italic pb-4">
                  How can we ensure that less technically fluent members still
                  receive the benefits that they deserve?
                </p>
                <p className="text-base">
                  My team and I were tasked with redesigning the main sign up
                  and application flow to allow for a caregiver who is more
                  technically competent to help the eligible member sign up to
                  get the benefits they deserve. Our design process started by
                  parsing a project brief and communicating with the client to
                  understand the problem space. After that, we developed
                  sketches, low-fidelity wireframes, and ultimately a high
                  fidelity, interactive prototype for a mobile interface.
                </p>
              </div>
              <div id="project-brief" className="text-xl py-4">
                <h3 className="text-2xl font-semibold py-2 text-jm-blue">
                  Project Brief
                </h3>
                <p className="text-base pb-4">
                  Our group was given a project brief that we parsed and marked
                  up with questions. When thinking of our design, we were
                  focused on input validation, proper consent for sensitive
                  data, and creating an accessible interface for all users.
                  Leading the communication with the client, I asked questions
                  such as:
                </p>
                <ul className="list-disc text-base pl-4">
                  <li>
                    What ways can we help caregivers who do not have the
                    information or documents they need to do the application for
                    their caree?
                  </li>
                  <li>
                    Can a caregiver register for the website without a caree?
                    Can both parties invite each other, or does it only go one
                    way?
                  </li>
                  <li>
                    Can both parties invite each other, or does it only go one
                    way?
                  </li>
                  <li>
                    How can we best support those with visual impairments or
                    different preferred languages?
                  </li>
                </ul>
              </div>
              <div id="sketching" className="text-xl py-4">
                <h3 className="text-2xl font-semibold py-2 text-jm-blue">
                  Sketching
                </h3>
                <p className="text-base pb-4">
                  To begin the design process, I brainstormed end to end flows
                  for the eligibility and application process. In my flows, I
                  focused on multiple forms of validation to reduce risk of
                  misinformed data leakage and different invitation routes.
                </p>
                <p>
                  View my{" "}
                  <Link
                    target="_blank"
                    href="https://www.figma.com/file/aMHx2LP2RbsXxn48Py9IKt/Uno-Health-Overview-(Working)?type=design&node-id=2558-2230&mode=design&t=DwsC3gC98keyq0hx-0"
                    className=" underline hover:decoration-jm-yellow hover:text-jm-red pt-4 font-bold text-lg"
                  >
                    sketches
                  </Link>{" "}
                  in full!
                </p>
                {/* TODO: IMAGES */}
                <Image
                  className="rounded-lg object-fill max-w-1/2 mx-auto my-4"
                  src="/dev-sketches.jpeg"
                  width={600}
                  height={100}
                  alt="Development Sketches"
                ></Image>
                <Image
                  className="rounded-lg object-cover max-w-1/2 mx-auto my-4"
                  src="/dev-low-fi.png"
                  width={600}
                  height={100}
                  alt="Development Low-Fi"
                ></Image>
              </div>
              {/* TODO: BELOW */}
              <div id="low-fi" className="text-xl py-4">
                <h3 className="text-2xl font-semibold py-2 text-jm-blue">
                  Low-Fidelity Wireframes
                </h3>
                <p className="text-base pb-4">
                  As we progressed further in the project, I took ownership of
                  the main sign up and login flow while my teammates handled the
                  eligibility and application process. My low-fidelity wireframe
                  focused on allowing both caregivers and eligible carees to
                  join the platform independently and connect their accounts to
                  each other. To receive feedback, I shared a{" "}
                  <Link
                    target="_blank"
                    href={
                      "https://www.loom.com/share/114af47126f74e64b43fdd83cfae8c6c"
                    }
                    className=" underline hover:decoration-jm-yellow hover:text-jm-red pt-4 font-bold"
                  >
                    Loom walkthrough
                  </Link>{" "}
                  with Elise.
                </p>
                <p className="text-base pb-4">
                  She appreciated the ability to either find or invite both user
                  types, but suggested that I add a way for caregivers to
                  complete the entire process for carees as they might not be
                  able to even navigate the app to accept an invite. As such, I
                  added a screen that allows caregivers to create their carees
                  account and will only require consent via a phone call or text
                  message instead of a full login process.
                </p>
                <p>
                  View my{" "}
                  <Link
                    target="_blank"
                    href="https://www.figma.com/file/aMHx2LP2RbsXxn48Py9IKt/Uno-Health-Overview-(Working)?type=design&node-id=2038-415&mode=design&t=DwsC3gC98keyq0hx-0"
                    className=" underline hover:decoration-jm-yellow hover:text-jm-red pt-4 font-bold text-lg"
                  >
                    low-fidelity wireframe
                  </Link>{" "}
                  and the{" "}
                  <Link
                    target="_blank"
                    href="https://www.figma.com/file/aMHx2LP2RbsXxn48Py9IKt/Uno-Health-Overview-(Working)?type=design&node-id=6130-617&mode=design&t=DwsC3gC98keyq0hx-0"
                    className=" underline hover:decoration-jm-yellow hover:text-jm-red pt-4 font-bold text-lg"
                  >
                    revisions
                  </Link>{" "}
                  in full!
                </p>
                <Image
                  className="rounded-lg object-cover max-w-1/2 mx-auto my-4"
                  src="/dev-song-list.png"
                  width={600}
                  height={100}
                  alt="Development POC"
                ></Image>
              </div>
              <div id="high-fi" className="text-xl py-4">
                <h3 className="text-2xl font-semibold py-2 text-jm-blue">
                  High-Fidelity Wireframes
                </h3>
                <p className="text-base pb-4">
                  Given the feedback from the low-fidelity wireframes, I added
                  interactability, color, and more detailed components to the
                  high-fidelity prototype. We also received feedback about
                  increasing accessibility, so I added two dropdowns to allow
                  users to change the language and font size of the interface.
                </p>
                <p className="text-base pb-4">
                  My group and I presented our finished prototype to Elise via
                  another{" "}
                  <Link
                    target="_blank"
                    href={
                      "https://www.loom.com/share/4ad33165524447fb889548e92bb0d542"
                    }
                    className=" underline hover:decoration-jm-yellow hover:text-jm-red pt-4 font-bold"
                  >
                    Loom walkthrough
                  </Link>{" "}
                  . She was impressed with the final product specifically with
                  regards to our accessibility adjustments and personalization.
                  She suggested two final changes: allowing for text updates to
                  be sent to notify caregivers and carees of help needed and
                  adjusting the login flow to suggest a &quot;happy path&quot;
                  that is desired. While it is important to allow different
                  means of interactions, we should weight the most common
                  preferred path heavier than the others to reduce cognitive
                  load.
                </p>
                <p>
                  View my{" "}
                  <Link
                    target="_blank"
                    href="https://www.figma.com/file/aMHx2LP2RbsXxn48Py9IKt/Uno-Health-Overview-(Working)?type=design&node-id=2131-1697&mode=design&t=DwsC3gC98keyq0hx-0"
                    className=" underline hover:decoration-jm-yellow hover:text-jm-red pt-4 font-bold text-lg"
                  >
                    high-fidelity wireframe
                  </Link>{" "}
                  and the{" "}
                  <Link
                    target="_blank"
                    href="https://www.figma.com/file/aMHx2LP2RbsXxn48Py9IKt/Uno-Health-Overview-(Working)?type=design&node-id=2421-1119&mode=design&t=DwsC3gC98keyq0hx-0"
                    className=" underline hover:decoration-jm-yellow hover:text-jm-red pt-4 font-bold text-lg"
                  >
                    revisions
                  </Link>{" "}
                  in full!
                </p>
              </div>
              <div id="learnings" className="text-xl py-4">
                <h3 className="text-2xl font-semibold py-2 text-jm-blue">
                  Learnings
                </h3>
                <p className="text-base pb-4">
                  I had a few key takeaways from this project:
                </p>
                <ul className="list-disc text-base pl-4">
                  <li>
                    <b className="italic">
                      Design with accessibility as the first concern!
                    </b>{" "}
                    This app presented a unique challenge in that it was a
                    technical product specifically for people who may not be
                    comfortable with technology at all. As such, it was
                    difficult to reframe my mindset on what is intuitive and
                    expected from common interfaces.
                  </li>
                  <li>
                    <b className="italic">
                      Utilize components in Figma to increase consistency and
                      speed!
                    </b>{" "}
                    As I developed my high fidelity prototype, I found myself
                    repeating a lot of common tasks in creating and moving
                    buttons and text. Only later in the process did I consider
                    how components might have saved me time and made the overall
                    design and cleanup process easier at the end.
                  </li>
                  <li>
                    <b className="italic">
                      Highlight a happy path for users to follow!
                    </b>{" "}
                    My intuition as a designer is to allow for wide
                    interactibility through the app, but I had never considered
                    emphasizing paths that we want to lead users down. While it
                    is important to consider edge cases, I learned that it is
                    just as important to make the common user experience as
                    comfortable and seamless as can be.
                  </li>
                </ul>
              </div>
              <div id="conclusion" className="text-xl py-4">
                <h3 className="text-2xl font-semibold py-2 text-jm-blue">
                  Conclusion
                </h3>
                <p className="text-base pb-4">
                  This project provided a unique challenge of working
                  collaboratively on a real problem that this startup is facing.
                  I was able to step through all aspects of the design process
                  from hand drawn sketches through high fidelity Figma
                  prototypes Beyond the technical aspects, I grew as a team
                  member and professional communicator, and got a taste of some
                  more standard industry practice with the iterative wireframing
                  process and client feedback. I am excited to see how Uno plans
                  to tackle this problem in their own work and am looking
                  forward to innovating on more healthtech problems in the
                  future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
