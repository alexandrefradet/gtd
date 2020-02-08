import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from './project.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private readonly BASE_URL: string = "http://localhost:8080/projects";

  constructor(private httpClient: HttpClient) { }

  findAll(): Observable<Project[]> {
    return this.httpClient.get<Project[]>(this.BASE_URL);
  }
}
