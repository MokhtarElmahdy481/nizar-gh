"use client"
import {
  Card,
  Typography,
  List,
  ListItem,
  Accordion,
  AccordionHeader,
  AccordionBody,
  IconButton
} from "@/configurations/materialconfig";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import LanguageSelector from "./LanguageSelector";
import { pages } from "@/fakers/data";
import { FaBars } from "react-icons/fa";
import i18n from 'i18next';
import { useTranslation } from "react-i18next";
type Props = {};
export default function Sidebar({}: Props) {
  const {t,i18n} = useTranslation()
  const [open, setOpen] = useState(0);

  const handleOpen = (value:number) => {
    setOpen(open === value ? 0 : value);
  };
  
  return (
    
      <Card id="sideMenu" className="fixed top-0 bottom-0 transition-all w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 z-50 hidden">
        <div className="mb-2 p-4 flex justify-end">
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
        <List>
          <Link href={"/"}>
          <ListItem>{t("home")}</ListItem>
          </Link>
          <Accordion
            open={open === 1}
            icon={
              <IoIosArrowDown
                strokeWidth={2.5}
                className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`}
              />
            }
          >
            <ListItem className="p-0" selected={open === 1}>
              <AccordionHeader
                onClick={() => handleOpen(1)}
                className="border-b-0 p-3"
              >
                <Typography color="blue-gray" className="me-auto font-normal">
                  {t("services")}
                </Typography>
              </AccordionHeader>
            </ListItem>
            <AccordionBody className="py-1">
              <List className="p-0">
                <Link href={"/departments"}>
                <ListItem>{t("cat")}</ListItem>
                </Link>
                <Link href={"/team"}>
                <ListItem>{t("team")}</ListItem>
                </Link>
              </List>
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 2}
            icon={
              <IoIosArrowDown
                strokeWidth={2.5}
                className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`}
              />
            }
          >
            <ListItem className="p-0" selected={open === 2}>
              <AccordionHeader
                onClick={() => handleOpen(2)}
                className="border-b-0 p-3"
              >
                <Typography color="blue-gray" className="me-auto font-normal">
                {t("about")}
                </Typography>
              </AccordionHeader>
            </ListItem>
            <AccordionBody className="py-1">
              <List className="p-0">
                <Link href={"/about"}>
                <ListItem>{t("about")}</ListItem>
                </Link>
                <Link href={"/about-nizar"}>
                <ListItem>{t("aboutNizar")}</ListItem>
                </Link>
              </List>
            </AccordionBody>
          </Accordion>
          <Link href={"/branches"}>
          <ListItem>{t("branches")}</ListItem>
          </Link>
          <Link href={"/cases"}>
          <ListItem>{t("cases")}</ListItem>
          </Link>
          <Link href={"/contact"}>
          <ListItem>
            {t("contact")}</ListItem>
          </Link>
          <LanguageSelector/>
        </List>
      </Card>
    
  );
}
