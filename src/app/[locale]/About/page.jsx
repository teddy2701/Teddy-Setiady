import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { IconIdBadge2, IconSettings } from "@tabler/icons-react";
import {
  arduino,
  bootstrap,
  tailwind,
  css3,
  expressjs,
  firebase,
  html5,
  javascript,
  monggodb,
  nextjs,
  nodejs,
  react,
  php,
  mysql,
} from "../../../assets";

const teknologi = [
  { id: 1, title: "NextJS", img: nextjs },
  {
    id: 2,
    title: "ReactJS",
    img: react,
  },
  {
    id: 3,
    title: "NodeJS",
    img: nodejs,
  },
  {
    id: 4,
    title: "ExpressJS",
    img: expressjs,
  },
  {
    id: 5,
    title: "MongoDB",
    img: monggodb,
  },
  {
    id: 6,
    title: "Firebase",
    img: firebase,
  },
  {
    id: 7,
    title: "HTML5",
    img: html5,
  },
  {
    id: 8,
    title: "CSS3",
    img: css3,
  },
  {
    id: 9,
    title: "TailwindCSS",
    img: tailwind,
  },
  {
    id: 10,
    title: "Bootstrap",
    img: bootstrap,
  },
  {
    id: 11,
    title: "Arduino",
    img: arduino,
  },
  {
    id: 12,
    title: "JavaScript",
    img: javascript,
  },
  {
    id: 13,
    title: "PHP",
    img: php,
  },
  {
    id: 14,
    title: "MySql",
    img: mysql,
  },
];

const Page = () => {
  const t = useTranslations("About");
  return (
    <>
      <div className="flex flex-col ">
        <h1 className="font-bold text-2xl">
          <IconIdBadge2 className="w-10 inline-block" />
          {t("title")}
        </h1>
        <span className="font-thin text-sm">{t("titleDesc")}</span>
      </div>

      <div className="flex flex-col gap-3">
        <p className="text-justify">{t("desc1")}</p>
        <p className="text-justify">{t("desc2")}</p>
        <p className="text-justify">{t("desc3")}</p>
        <p className="text-justify">{t("desc4")}</p>
        <p className="text-justify">{t("desc5")}</p>
      </div>

      <div className="flex flex-col ">
        <h1 className="font-bold text-2xl">
          <IconSettings className="w-10 inline-block" />
          {t("tech")}
        </h1>
        <span className="font-thin text-sm">{t("techDesc")}</span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 sm:grid-cols-3 gap-4 ">
        {teknologi.map((item) => {
          return (
            <div
              key={item.id}
              className="flex flex-row items-center justify-start bg-white dark:bg-blackSecondary ring-2 ring-gray-200 dark:ring-gray-900 rounded-md py-2 px-3"
            >
              <Image src={item.img} alt={item.title} className="w-5 me-2" />
              <span className="text-sm font-semibold">{item.title}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Page;
