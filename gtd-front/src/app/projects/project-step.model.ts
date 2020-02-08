import { Project } from './project.model';

export interface ProjectStep {

  id: number;
  label: string;
  completed: boolean;
  stepPosition: number;
  project: Project;
}
