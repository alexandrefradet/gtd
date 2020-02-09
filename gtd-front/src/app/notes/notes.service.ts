import { Injectable, OnInit } from '@angular/core';
import { Note } from './note.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  /**
   * TODO :
   * - error management
   * - return on post / update
   */

  private readonly BASE_URL: string = "http://localhost:8080/notes";

  constructor(private httpClient: HttpClient) { }

  get(id: number): Observable<Note> {
    return this.httpClient.get<Note>(this.BASE_URL + '/' + id, );
  }

  save(note: Note) {
    this.httpClient.post(this.BASE_URL, note).toPromise().then(result => console.log("Create"));
  }

  update(id: number, note: Note) {
    this.httpClient.put(this.BASE_URL + "/" + id, note).toPromise().then(result => console.log("Update"));
  }

  delete(id:number) {
    return this.httpClient.delete(this.BASE_URL + "/" + id);
  }


  getAll(): Observable<Note[]> {
    return this.httpClient.get<Note[]>(this.BASE_URL);
  }
}
