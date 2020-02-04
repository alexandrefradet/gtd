import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Note } from '../../shared/note.model';
import { NotesService } from '../../shared/notes.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.scss']
})
export class NoteDetailsComponent implements OnInit {

  note: Note;
  id: number;

  constructor(private noteService: NotesService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      let isNew: boolean = params.id == 'new';
      this.id = isNew ? null : params.id;
      this.note = isNew ? new Note() : this.noteService.get(params.id);
    })
  }

  onSubmit(noteForm: NgForm) {
    if (this.id) {
      this.noteService.update(this.id, noteForm.value);
    } else {
      this.noteService.save(noteForm.value);
    }
    this.router.navigateByUrl('/');
  }

  onCancel() {
    this.router.navigateByUrl('/');
  }
}
