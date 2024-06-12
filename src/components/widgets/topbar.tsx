import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoDiscord } from "react-icons/io5";
import { Button, buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import { FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Topbar() {
  return (
    <nav className="w-full max-w-screen-xl flex items-center justify-between py-1 px-4">
      <div>Logo</div>
      <ul className="flex gap-1">
        <li>
          <a
            href=""
            // className={cn(buttonVariants({ variant: "outline" }))}
          >
            <Button variant={"outline"} size={"icon"}>
              <FaXTwitter className="w-6 h-6" />
            </Button>
          </a>
        </li>
        <li>
          <a href="">
            <Button variant={"outline"} size={"icon"}>
              <FaDiscord className="w-6 h-6 " />
            </Button>
          </a>
        </li>
      </ul>
    </nav>
  );
}
