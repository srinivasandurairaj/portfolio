export interface IProjectInfoAttributes {
  projectTitle: string;
  projectDescription: string;
  responsiblites?: string[];
}

export interface IProjectInfo {
  project: IProjectInfoAttributes[];
}
