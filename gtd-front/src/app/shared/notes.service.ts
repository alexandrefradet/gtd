import { Injectable, OnInit } from '@angular/core';
import { Note } from './note.model';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  notes: Note[] = [
    {title: "title1", content: "content1"},
    {title: "title2", content: "content2"},
  ];

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
    this.notes.splice(id, 1);
  }

  getAll() {
    return this.notes;
  }
}
