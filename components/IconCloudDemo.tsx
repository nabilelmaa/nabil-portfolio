import IconCloud from "@/components/magicui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "java",
  "react",
  "tailwindcss",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "vercel",
  "docker",
  "git",
  "jira",
  "github",
  "visualstudiocode",
  "figma",
  "mongodb",
  "notion"
];

export function IconCloudDemo() {
  return (
    <div className="custom-cursor-pointer relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg bg-transparent px-20 pb-20 pt-8 ">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
