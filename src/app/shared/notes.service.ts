import { Injectable } from '@angular/core';
import { Note } from './note.model';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  notes: Note[];

  constructor() { }

  public get(id: number) {
    return this.notes[id];
  }

  public save(note: Note): number {
    return this.notes.push(note) - 1;
  }

  public update(id: number, note: Note) {
    this.notes[id] = note;
  }

  public delete(id:number) {
    this.notes.slice(id);
  }
}
