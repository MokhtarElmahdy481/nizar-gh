"use client";
import {
  Card,
  Typography,
  List,
  ListItem,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Navbar,
  IconButton,
} from "@/configurations/materialconfig";
import { FaBars } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

type Props = {
  general: {
    logo: string;
    fav: string;
    title: string;
    description: string;
    copyRight: string;
  };
};

export default function Appbar({general}: Props) {
  return (
    <Navbar
      // variant="gradient"
      // color="blue-gray"
      shadow={false}
      className="mx-auto px-4 py-0"
      fullWidth
    >
      <div className="flex flex-wrap items-center justify-between gap-y-4 text-white">
        <div className="flex gap-1 md:ms-4">
          <IconButton id="menuToggle" className="text-xl !outline-none !border-none"
            onMouseEnter={() =>
              document.getElementById("sideMenu")?.classList.toggle("hidden")
            }
            variant="outlined"
          >
            <span className="material-icons">
              <FaBars />
            </span>
          </IconButton>
        </div>
        <Link href="/" className="ms-4 me-2">
          <Image
            width={100}
            height={100}
            alt={general?.title}
            src={general?.logo}
            className="pointer"
          />
        </Link>

        {/* <div className="relative flex w-full gap-2 md:w-max">
         hhhhh
        </div> */}
        <div className="hidden md:block"></div>
      </div>
    </Navbar>
  );
}
