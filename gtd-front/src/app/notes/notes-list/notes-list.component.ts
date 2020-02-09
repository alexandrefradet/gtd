import { Component, OnInit } from '@angular/core';
import { NotesService } from '../notes.service';
import { Note } from '../note.model';
import { cardAnimation } from '../../shared/animations';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss'],
  animations: cardAnimation
})
export class NotesListComponent implements OnInit {
  notes: Note[];

  constructor(private notesService: NotesService) {
  }

  ngOnInit() {
    this.notesService.getAll().subscribe(result => this.notes = result);
  }

  deleteNote(id: number) {
    const self = this;
    this.notesService.delete(id).toPromise()
      .then(result => this.notes.splice(self.notes.findIndex(note => note.id == id),1))
      .catch(a => console.log("Fail to delete"));
  }
}
