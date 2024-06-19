"use client";
import { PortfolioItem } from "@/components/sections/portfolio";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { IoIosLink } from "react-icons/io";
import { LuGithub } from "react-icons/lu";
import Link from "next/link";
import { motion } from "framer-motion";

export default function PortfolioCard({
  title,
  description,
  image,
  link,
  github,
  technologies,
}: PortfolioItem) {
  return (
    <article className="relative border rounded-md p-4 bg-popover h-auto w-full sm:w-[500px]  xl:w-[500px] overflow-hidden ">
      <div className="relative h-2/3 w-full">
        <Image
          src={image}
          alt={title}
          width={500}
          height={500}
          className=" w-full h-60   xl:h-80 object-cover rounded-md"
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 rounded-md"
        >
          <p className="text-secondary-foreground w-2/3 text-wrap">
            {description}
          </p>
        </motion.div>
      </div>
      <div className="absolute top-10 right-5 flex flex-col gap-1">
        {github && (
          <Link href={github}>
            <LuGithub className="rounded-full h-16 w-16 hover:bg-primary text-popover backdrop-blur-lg bg-gray-300/50 border border-black transition-colors duration-200 p-2" />
          </Link>
        )}
        {link && (
          <Link href={link}>
            <IoIosLink className="rounded-full h-16 w-16 hover:bg-primary text-popover backdrop-blur-lg bg-gray-300/50 border border-black transition-colors duration-200 p-2" />
          </Link>
        )}
      </div>
      <div className="flex justify-between w-full mt-2">
        <h2 className="text-xl">{title}</h2>
      </div>
      <div className="">
        <h2>Technologies</h2>
        <ul className="flex gap-2 flex-wrap h-14">
          {technologies.map((tech, index) => (
            <li key={index}>
              <Badge className="bg-primary/50 border-border hover:bg-primary/50 pointer-events-none">
                {tech}
              </Badge>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
