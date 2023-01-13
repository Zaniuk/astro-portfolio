export interface IMetaHead {
  title: string;
  description: string;
  ogImageUrl: string;
}

export interface IHeroProps {
  name: string;
  about: string;
  accent: string;
  profile: string;
}

export interface IExperience {
  name: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  techStack? : Tech[];
}
interface Tech {
  name: string;
  color: EBGColors;
}
export enum EBGColors {
  cyan = "bg-cyan-600",
  green = "bg-green-600",
  yellow = "bg-yellow-400",
  red = "bg-red-600",
  pink = "bg-pink-600",
  purple = "bg-purple-600",
  orange = "bg-orange-600",
  blue =  "bg-sky-700",
  darkgreen = "bg-green-800",

}
export interface IExperiences {
  title: string;
  details: IExperience[];
  
}

export interface IProject {
  title: string;
  isFeatured: boolean;
  thumbnail: string;
  githubUrl: string;
  liveUrl: string;
}
export interface IProjects {
  projects: IProject[];
}

export interface IProjectDetails {
  projectDetail: IProject;
}

export interface IBlogPostCardProps {
  title: string;
  slug: string;
  thumbnail: string;
  description: string;
  modified_at: string;
  metadata: {
    description: string;
  };
}

export enum EColors {
  react = "text-cyan-600",
  node = "text-green-600",
  javascript = "text-yellow-500",
  typescript = "text-cyan-700",
  mongodb = "text-green-600",
  postgresql = "text-cyan-600",
  html = "text-red-600", 
  css = "text-cyan-600",
  sass = "text-pink-600",
  tailwind = "text-cyan-600",
  git = "text-red-600",
  dotnet = "text-cyan-600",
  csharp = "text-purple-600",
  python = "text-sky-400",
  dark = "text-gray-800 dark:text-white",

}