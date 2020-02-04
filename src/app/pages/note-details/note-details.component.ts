import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Note } from '../../shared/note.model';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.scss']
})
export class NoteDetailsComponent implements OnInit {

  note: Note;

  constructor() { }

  ngOnInit() {
    let note = new Note();
    note.content= "contentNote";
    note.title=  "";
    this.note = note

  }

  onSubmit(noteForm: NgForm) {
    console.log(noteForm);

  }
}
