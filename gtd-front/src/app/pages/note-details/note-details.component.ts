import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Note } from '../../shared/note.model';
import { NotesService } from '../../shared/notes.service';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.scss']
})
export class NoteDetailsComponent implements OnInit {

  note: Note;

  constructor(private noteService: NotesService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
        if (params.id != 'new') {
          this.noteService.get(Number(params.id)).subscribe(result => this.note = result)
        } else {
          this.note = new Note();
        }
      }
    )
  }

  onSubmit(noteForm: NgForm) {
    const note: Note = noteForm.value;
    if (note.id) {
      this.noteService.update(note.id, note);
    } else {
      this.noteService.save(note);
    }
    this.router.navigateByUrl('/');
  }

  onCancel() {
    this.router.navigateByUrl('/');
  }
}
