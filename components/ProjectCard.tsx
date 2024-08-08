import { Badge } from "@/components/ui/badge";
import Image from "next/image";

interface ProjectCardProps {
  videoSrc: string;
  title: string;
  description: string;
  techStack: string[];
  websiteLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  videoSrc,
  title,
  description,
  techStack,
  websiteLink,
}) => {
  return (
    <div className="border rounded-lg shadow-lg overflow-hidden w-full md:w-1/3">
      <div className="relative w-full h-64">
        <Image
          src={videoSrc}
          alt={title}
          width={3792}
          height={1869}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl mb-4 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          {title}
        </h2>
        <p className="text-white font-medium text-base">{description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {techStack.map((tech, index) => (
            <Badge key={index} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
        <div className="mt-12">
          <a href={websiteLink} target="_blank" rel="noopener noreferrer">
            <Badge variant="outline">
              <Image
                src="/globe.svg"
                alt="globe"
                width={20}
                height={20}
                className="mr-2"
              />
              <span className="text-white">Website</span>
            </Badge>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
