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
  javascript = "text-yellow-400",
  typescript = "text-cyan-700",
  mongodb = "text-green-600",
  postgresql = "text-blue-600",
  html = "text-red-600", 
  css = "text-blue-600",
  sass = "text-pink-600",
  tailwind = "text-blue-600",
  git = "text-red-600",
  dotnet = "text-cyan-600",
  csharp = "text-purple-600",
  python = "text-yellow-400",
}