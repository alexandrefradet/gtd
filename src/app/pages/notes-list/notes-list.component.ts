import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent implements OnInit {
  notes: any[];

  constructor() { }

  ngOnInit() {
    this.notes = [{title: "title 1", content: "content1"}, {title: "title 2", content: "content2"}]
  }

}
