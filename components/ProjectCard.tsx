import { Badge } from "@/components/ui/badge";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

interface ProjectCardProps {
  imageSrc: string;
  title: string;
  description: string;
  techStack: string[];
  websiteLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  imageSrc,
  title,
  description,
  techStack,
  websiteLink,
}) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="border rounded-lg shadow-lg overflow-hidden w-full md:w-1/3">
      <div className="relative w-full h-64">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-contain shadow-"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl mb-4 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          {title}
        </h2>
        <p className="dark:text-white lg:text-base text-sm">{description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {techStack.map((tech, index) => (
            <Badge key={index} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
        <div className="mt-12">
          <a href={websiteLink} target="_blank" rel="noopener noreferrer">
            <Badge variant="outline" className="custom-cursor-pointer">
              {mounted && (
                <Image
                  src={
                    resolvedTheme === "dark"
                      ? "/globe-light.svg"
                      : "/globe-dark.svg"
                  }
                  alt="globe"
                  width={20}
                  height={20}
                  className="mr-2"
                />
              )}
              <span className="dark:text-white">Website</span>
            </Badge>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
