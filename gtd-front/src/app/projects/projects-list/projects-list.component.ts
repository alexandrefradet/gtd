import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../projects.service';
import { Project } from '../project.model';
import { cardAnimation } from '../../shared/animations';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss'],
  animations: cardAnimation
})
export class ProjectsListComponent implements OnInit {

  projects: Project[];

  constructor(private projectService: ProjectsService) { }

  ngOnInit() {
    this.projectService.findAll().toPromise()
      .then(results => {
        this.projects = results
      })
      .catch(error => {
        console.log("error");
        console.log(error);
      })
  }

}
