import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  videoSrc: string;
  title: string;
  description: string;
  techStack: string[];
}
const ProjectCard: React.FC<ProjectCardProps> = ({
  videoSrc,
  title,
  description,
  techStack,
}) => {
  return (
    <div className="border rounded-lg shadow-lg overflow-hidden w-full md:w-1/3">
      <div className="relative w-full h-64">
        <video
          src={videoSrc}
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl mb-4 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">{title}</h2>
        <p className="text-white">{description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {techStack.map((tech, index) => (
            <Badge key={index} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
