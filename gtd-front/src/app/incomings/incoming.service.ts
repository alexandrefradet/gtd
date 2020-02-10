import { Injectable, OnInit } from '@angular/core';
import { Incoming } from './incoming.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IncomingsService {

  /**
   * TODO :
   * - error management
   * - return on post / update
   */

  private readonly BASE_URL: string = "http://localhost:8080/incomings";

  constructor(private httpClient: HttpClient) { }

  get(id: number): Observable<Incoming> {
    return this.httpClient.get<Incoming>(this.BASE_URL + '/' + id, );
  }

  save(incoming: Incoming) {
    this.httpClient.post(this.BASE_URL, incoming).toPromise().then(result => console.log("Create"));
  }

  update(id: number, incoming: Incoming) {
    this.httpClient.put(this.BASE_URL + "/" + id, incoming).toPromise().then(result => console.log("Update"));
  }

  delete(id:number) {
    return this.httpClient.delete(this.BASE_URL + "/" + id);
  }


  getAll(): Observable<Incoming[]> {
    return this.httpClient.get<Incoming[]>(this.BASE_URL);
  }
}
