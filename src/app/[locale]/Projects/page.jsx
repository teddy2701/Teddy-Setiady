import React from "react";
import ProjectCard from "../../../components/ProjectCard";
import { useTranslations } from "next-intl";

const Page = () => {
  const t = useTranslations("Project");
  const projects = t.raw("proyek");

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col ">
        <h1 className="font-bold text-2xl">{t("title")}</h1>
        <span className="font-thin text-sm">{t("titleDesc")}</span>
      </div>
      <div className="">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={{
              ...project,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
