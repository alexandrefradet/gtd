import { ProjectStatus } from './project-status.enum';
import { ProjectAction } from './project-step.model';

export class Project {
  id: number;
  name: string;
  creationDate: Date;
  completionDate: Date;
  status: ProjectStatus;
  actions: ProjectAction[];
}
