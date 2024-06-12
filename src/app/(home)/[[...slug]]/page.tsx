import { ContactForm } from "@/components/forms/contact-form";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FaDiscord, FaLinkedin, FaGithub } from "react-icons/fa";
import { BsArrowUpRight } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import AnimateTransition from "@/components/context/transition";
// import PostHogClient from "@/lib/utils/posthog/posthog";

export default async function HomePage({
  params,
}: {
  params: { slug: string };
}) {
  // const posthog = PostHogClient();
  // const flags = await posthog.getAllFlags(
  //   "user_distinct_id", // replace with a user's distinct ID
  // );
  // await posthog.shutdown();

  const style =
    "border rounded-2xl p-4 h-full bg-secondary/50 backdrop-blur-md grid-flow-row-dense border-ring/20 hover:bg-secondary/60 transition-colors duration-300 ";
  const ExpandedStyle = "col-span-8 row-span-5";
  const hiddenStyle = "hidden bg-green-400";
  const slug = params.slug && params.slug[0];
  let isPortfolioExpanded = false;
  if (slug === "portfolio") {
    isPortfolioExpanded = true;
  }

  const components = {
    hero: {
      component: <Hero />,
      styles: "col-span-4 xl:col-span-4 row-span-3 bg-card/50 hover:bg-card/60",
    },
    linkedin: {
      component: <FaLinkedin className="w-36 h-36 " />,
      styles: "col-span-2 md:col-span-1 p-0 flex items-center justify-center",
    },
    contactForm: {
      component: <ContactForm />,
      styles:
        "flex flex-col gap-2 col-span-4 md:col-span-3 row-span-2 justify-center row-start-6 md:row-start-auto",
    },
    github: {
      component: (
        <a target="_blank" href="https://github.com/yourusername" className="">
          <FaGithub className="w-36 h-36 " />
        </a>
      ),
      styles: "col-span-2 md:col-span-1 p-0 flex items-center justify-center",
    },
    comingSoon: {
      component: (
        <>
          <ComingSoon />
          <FaDiscord className="w-full h-full opacity-50" />
        </>
      ),
      styles: "xl:col-span-1 xl:row-span-1 opacity-50 hidden xl:block",
    },
    aboutMe: {
      component: <AboutMe />,
      styles: "col-span-4 xl:col-span-3 row-span-2 space-y-4",
    },
    projects: {
      component: <Projects />,
      styles:
        "col-span-2 row-span-2 bg-popover/50 hover:bg-popover/60 hidden xl:block",
    },
    portfolio: {
      component: (
        <Link href={"/portfolio"}>
          <Portfolio isExpanded={isPortfolioExpanded} />
        </Link>
      ),
      styles:
        "col-span-4 xl:row-span-2 space-y-2 row-start-4 row-end-6 xl:col-span-3",
    },
    hireMeButton: {
      component: <HireMeButton />,
      styles:
        "md:col-span-2 p-0 col-span-2 bg-green-600/50 h-full w-full rounded-2xl backdrop-blur-md border-ring/20 flex items-center justify-center opacity-50",
    },
    downloadResumeButton: {
      component: <DownloadResumeButton />,
      styles:
        "xl:col-span-1 col-span-2 flex items-center justify-center opacity-50 bg-primary/35 hover:bg-primary/35",
    },
  };

  return (
    <>
      <main className="px-2 mt-[10vh] pb-40 xl:max-w-screen-xl w-full grid grid-cols-4 max-w-screen-md xl:grid-cols-8 gap-4 auto-rows-[135px] text-secondary-foreground text-pretty">
        {Object.entries(components).map(([key, item], index) => (
          <div
            key={index}
            className={cn(
              style,
              item.styles,
              slug === "portfolio" && key !== "portfolio" && hiddenStyle,
              slug === "portfolio" && key === "portfolio" && ExpandedStyle,
            )}
          >
            <AnimateTransition>{item.component}</AnimateTransition>
          </div>
        ))}
        <div className="fixed w-96 h-96 bg-orange-400/40 rounded-full -z-10 top-[15%] left-[90%] translate-x-[-50%] translate-y-[-50%] blur-3xl" />
        <div className="fixed w-96 h-96 bg-orange-400/5 rounded-full -z-10 top-[100%] left-[15%] translate-x-[-50%] translate-y-[-50%] blur-3xl" />
      </main>
    </>
  );
}

function Hero() {
  return (
    <section className="flex flex-col justify-around h-full">
      <h1 className="text-3xl md:text-6xl">YOUR NAME</h1>
      <div className="space-y-4">
        <p className="text:lg md:text-2xl">Welcome to My Portfolio</p>
        <p className="md:text-lg list-disc text-secondary-foreground opacity-75">
          This is a brief introduction about yourself. Highlight your key skills
          and experiences.
        </p>
      </div>
      <div>
        <ul className="flex px-10 gap-4 flex-wrap mt-10">
          {FEATURE_LIST.map((resource, index) => (
            <li key={index} className={cn("")}>
              <Badge className="text-primary bg-primary/20 backdrop-blur-md border border- hover:bg-primary/20">
                {resource.label}
              </Badge>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex gap-2"></div>
    </section>
  );
}
function AboutMe() {
  return (
    <>
      <h2 className="text-2xl text-secondary-foreground">ABOUT ME</h2>
      <p className="opacity-75">
        This section contains a brief bio about yourself. Talk about your
        background, education, and interests.
      </p>
    </>
  );
}
function Portfolio({ isExpanded }: { isExpanded: boolean }) {
  return (
    <>
      <div className="flex justify-between items-center">
        <h2 className="text-2xl text-secondary-foreground p-2">PORTFOLIO</h2>
        {isExpanded ? (
          <Link href={"/"}>
            <RxCross1 className="border text-4xl rounded-full h-12 w-12 p-2 hover:bg-secondary hover:text-primary transition-colors duration-300" />
          </Link>
        ) : (
          <BsArrowUpRight className="border text-4xl rounded-full h-12 w-12 p-2 hover:bg-secondary hover:text-primary transition-colors duration-300" />
        )}
      </div>
      <p>
        This section showcases your portfolio projects. Each project can have a
        brief description and links to more details or the live project.
      </p>
      <p className="text-sm opacity-75">
        Provide details about the technologies used, your role in the project,
        and any noteworthy accomplishments.
      </p>
    </>
  );
}
function ComingSoon() {
  return (
    <p className="absolute -bottom-1 left-[50%] translate-x-[-50%] translate-y-[-50%] text-nowrap text-sm">
      Coming soon
    </p>
  );
}
function Projects() {
  return (
    <>
      <h2 className="text-2xl text-secondary-foreground">PROJECTS</h2>
      {PROJECT_LINKS.map((project, index) => (
        <a
          target="_blank"
          href={project.url}
          key={index}
          className="text-primary/70 cursor-pointer"
        >
          <li className={cn(buttonVariants({ variant: "link" }))}>
            {project.label}
          </li>
        </a>
      ))}
    </>
  );
}

const PROJECT_LINKS = [
  {
    label: "Project 1",
    url: "https://github.com/yourusername/project1",
  },
  {
    label: "Project 2",
    url: "https://github.com/yourusername/project2",
  },
  {
    label: "Project 3",
    url: "https://github.com/yourusername/project3",
  },
];
const FEATURE_LIST = [
  {
    label: "Web Development",
  },
  {
    label: "UI/UX Design",
  },
  {
    label: "Project Management",
  },
];
function HireMeButton() {
  return (
    <>
      <h2 className="text-2xl text-secondary-foreground">HIRE ME</h2>
      <ComingSoon />
    </>
  );
}

function DownloadResumeButton() {
  return <>DOWNLOAD RESUME</>;
}
