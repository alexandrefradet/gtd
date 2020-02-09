import { Project } from './project.model';

export interface ProjectAction {

  id: number;
  label: string;
  completed: boolean;
  stepPosition: number;
  project: Project;
}
