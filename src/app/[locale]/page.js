import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "../../i18n/routing";
import { IconAddressBook } from "@tabler/icons-react";
import {
  tangan,
  discord,
  instagram,
  gmail,
  github,
  work,
  linkedin,
} from "../../assets";
import PageMetaData from "../../components/PageMetaData";
import PengalamanKerja from "../../components/PengalamanKerja";

export async function generateMetadata() {
  return PageMetaData("HomePage");
}

const cards = [
  {
    id: 1,
    title: "Instagram",
    icon: instagram,
    link: "https://www.instagram.com/tedy.jsx/",
  },
  {
    id: 2,
    title: "Gmail",
    icon: gmail,
    link: "mailto:teddysetiadi850@gmail.com",
  },
  {
    id: 3,
    title: "Discord",
    icon: discord,
    link: "https://discord.com/users/704387944089124865",
  },
  {
    id: 4,
    title: "Github",
    icon: github,
    link: "https://github.com/teddy2701",
  },

  {
    id: 5,
    title: "LinkedIn",
    icon: linkedin,
    link: "https:/linkedin.com/in/",
  },
];

const Page = () => {
  const t = useTranslations("HomePage");
  const riwayatKerja = t.raw("Kerja");
  return (
    <>
      <div className="flex flex-col ">
        <h1 className="font-bold text-2xl">
          <Image src={tangan} alt="tangan" className="w-10 inline-block" />
          {t("title")}
        </h1>
        <span className="font-thin text-sm">{t("titleDesc")}</span>
      </div>
      <div className="flex flex-col justify-center items-start gap-3">
        <p className="text-justify">{t("desc")}</p>
        <div className="flex justify-start items-center gap-5 ">
          <Link
            className="py-2 px-3 text-white ring-2 ring-primary bg-primary rounded-lg font-semibold text-sm  "
            href="/About"
          >
            {t("btnMore")}
          </Link>

          {/* <DownloadCV title="resume" /> */}
          <a
            href="/api/download-cv"
            className="py-2 px-3 ring-2 ring-primary rounded-lg font-semibold text-sm "
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>
      </div>

      <div className="flex flex-col">
        <h2 className="font-bold text-2xl">
          <IconAddressBook className="w-10 inline-block" />
          {t("contact")}
        </h2>
        <span className="font-thin text-sm">{t("contactDesk")}</span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 ">
        {cards.map((card) => {
          return (
            <a
              href={card.link}
              key={card.id}
              target="_BLANK"
              className="py-2 px-3 bg-white dark:bg-blackSecondary ring-2 ring-gray-200 dark:ring-gray-900 rounded-md flex justify-start items-center gap-1"
            >
              <Image
                src={card.icon}
                alt={card.title}
                className="w-5 inline-block  "
              />
              <span className=" font-semibold text-sm">{card.title}</span>
            </a>
          );
        })}
      </div>

      <div className="flex flex-col">
        <h2 className="font-bold text-2xl">
          <Image src={work} alt="work" className="w-10 inline-block" /> &nbsp;
          {t("workExperience")}
        </h2>
        <span className="font-thin text-sm">{t("workExperienceDesc")}</span>
      </div>

      {riwayatKerja.map((item) => {
        return (
          <PengalamanKerja
            key={item.id}
            title={item.title}
            posisi={item.posisi}
            desc={item.desc}
            date={item.date}
            pencapaian={item.pencapaian}
            text={item.textPencapaian}
          />
        );
      })}
    </>
  );
};

export default Page;
