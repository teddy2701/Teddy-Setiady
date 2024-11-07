"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import {
  FloatingDockMobile,
  FloatingDockDesktop,
  IconContainer,
} from "../ui/floating-dock";
import {
  IconHome,
  IconIdBadge2,
  IconSettings,
  IconSun,
  IconMoon,
  IconBriefcase,
  IconLanguage,
} from "@tabler/icons-react";

const Index = ({ locale }) => {
  const [dark, setDark] = useState("false");
  const t = useTranslations("Navbar");
  const [open, setOpen] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  const hundleChangeLanguage = () => {
    const newLocale = locale === "id" ? "en" : "id";
    const path = pathname.split("/").slice(2).join("/");

    router.push(`/${newLocale}/${path}`);
  };

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  const links = [
    {
      title: t("Home"),
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: `/`,
    },

    {
      title: t("About"),
      icon: (
        <IconIdBadge2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: `/About`,
    },
    {
      title: t("Projects"),
      icon: (
        <IconBriefcase className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: `/Projects`,
    },
  ];

  return (
    <header className="fixed bottom-4 right-4 z-50 md:inset-x-1/2">
      <div className="flex items-center gap-3 justify-center max-md:flex-col-reverse">
        <FloatingDockDesktop items={links}>
          {/* ganti tema */}
          <button type="button" onClick={darkModeHandler}>
            <IconContainer
              title={t("Theme")}
              icon={
                dark ? (
                  <IconMoon className="h-full w-full text-neutral-500 dark:text-neutral-300" />
                ) : (
                  <IconSun className="h-full w-full text-neutral-500 dark:text-neutral-300" />
                )
              }
            />
            <span className="sr-only">Toggle Theme</span>
          </button>

          {/* ganti bahasa */}
          <button type="button" onClick={hundleChangeLanguage}>
            <IconContainer
              title={t("Language")}
              icon={
                <IconLanguage className="h-full w-full text-neutral-500 dark:text-neutral-300" />
              }
            />
            <span className="sr-only">Toggle Theme</span>
          </button>
        </FloatingDockDesktop>

        <FloatingDockMobile items={links} open={open}>
          <button
            onClick={() => setOpen(!open)}
            className="h-10 w-10 rounded-full bg-gray-50 dark:bg-neutral-800 flex items-center justify-center"
          >
            <IconSettings className="h-6 w-6  text-neutral-500 dark:text-neutral-300" />
          </button>

          {/* ganti bahasa */}
          <button
            type="button"
            onClick={hundleChangeLanguage}
            className="h-10 w-10 rounded-full bg-gray-50 dark:bg-neutral-900 flex items-center justify-center"
          >
            <IconLanguage className="h-6 w-6  text-neutral-500 dark:text-neutral-300" />

            <span className="sr-only">Toggle Theme</span>
          </button>

          {/* ganti tema */}
          <button
            type="button"
            onClick={darkModeHandler}
            className="h-10 w-10 rounded-full bg-gray-50 dark:bg-neutral-900 flex items-center justify-center"
          >
            {dark ? (
              <IconMoon className="h-6 w-6  text-neutral-500 dark:text-neutral-300" />
            ) : (
              <IconSun className="h-6 w-6  text-neutral-500 dark:text-neutral-300" />
            )}
            <span className="sr-only">Toggle Theme</span>
          </button>
        </FloatingDockMobile>
      </div>
    </header>
  );
};

export default Index;
