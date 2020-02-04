import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../shared/notes.service';
import { Note } from '../../shared/note.model';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent implements OnInit {
  notes: Note[];

  constructor(private notesService: NotesService) { }

  ngOnInit() {
    this.notes = this.notesService.getAll();
  }

  deleteNote(id: number) {
    this.notesService.delete(id);
  }
}
