import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../projects.service';
import { Project } from '../project.model';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit {

  projects: Project[];

  constructor(private projectService: ProjectsService) { }

  ngOnInit() {
    this.projectService.findAll().toPromise()
      .then(results => {
        console.log("result recu");
        console.log(results);
        this.projects = results
      })
      .catch(error => {
        console.log("error");
        console.log(error);
      })
  }

}
