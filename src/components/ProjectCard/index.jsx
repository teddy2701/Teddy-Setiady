import Link from "next/link";

const ProjectCard = ({ project }) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg bg-white dark:bg-blackSecondary my-3 ">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{project.title}</div>
        <p className=" text-base">{project.description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {project.tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="px-6 py-4">
        {project.demoUrl && (
          <Link
            href={project.demoUrl}
            target="_blank"
            className="bg-primary hover:bg-primaryBold text-white font-bold py-2 px-4 rounded mr-2"
          >
            Demo
          </Link>
        )}
        {project.codeUrl && (
          <Link
            href={project.codeUrl}
            target="_blank"
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            Code
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
