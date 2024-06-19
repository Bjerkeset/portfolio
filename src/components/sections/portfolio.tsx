import PortfolioCard from "../cards/portfolio-card";

export type PortfolioItem = {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  github: string;
  technologies: string[];
};

export default function Portfolio() {
  const PORTFOLIO: PortfolioItem[] = [
    {
      id: 1,
      title: "Holidaze",
      description:
        "A travel booking platform with location-based searches using Maps API. Built with NEXT 13, Node.js, and styled with Tailwind CSS.",
      image: "/holidaze.png",
      link: "https://holidaze-mu.vercel.app/",
      github: "https://github.com/Bjerkeset/holidaze",
      technologies: [
        "NEXT 13",
        "Node.js",
        "Tailwind CSS",
        "Typescript",
        "Maps Api",
      ],
    },
    {
      id: 2,
      title: "Year One Exam",
      description:
        "A blog website developed for the first-year exam at Noroff. Features a CMS for managing content, built with Vanilla JS, CSS, and Sanity CMS.",
      image: "/exam-year-one.png",
      link: "https://fed1-exam-project-bjerkeset.vercel.app/",
      github: "https://github.com/Bjerkeset/noroff-year-1-exam",
      technologies: ["Sanity CMS", "CSS", "Vanilla JS"],
    },
    {
      id: 3,
      title: "TicketToken",
      description:
        "Front-end development for a Norwegian ticketing startup. Built with NEXT 13, Node.js, NestJs, and styled with Tailwind CSS.",
      image: "/tickettoken.png",
      link: "https://tickettoken.no/",
      github: "",
      technologies: [
        "NEXT 13",
        "Node.js",
        "Tailwind CSS",
        "Typescript",
        "NestJs",
      ],
    },
  ];

  return (
    <section className="flex flex-col gap-2 items-center w-full xl:flex-row pt-2">
      {PORTFOLIO.map((item) => (
        <PortfolioCard key={item.id} {...item} />
      ))}
    </section>
  );
}
