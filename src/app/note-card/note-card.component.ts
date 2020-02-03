import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent implements OnInit {

  @ViewChild('truncator', {static: true}) truncator: ElementRef<HTMLElement>;
  @ViewChild('bodyText',  {static: true}) bodyText:  ElementRef<HTMLElement>;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    // TODO FIXME : not working
    // work out if there is a text overflow and if not, hide the truncator
    const style = window.getComputedStyle(this.bodyText.nativeElement, null);
    const viewwableHeight = parseInt(style.getPropertyValue("height"), 10);
    console.log('viewable : ' + viewwableHeight);
    console.log('scrollHeight' + this.bodyText.nativeElement.scrollHeight);

    if (this.bodyText.nativeElement.scrollHeight > viewwableHeight) {
      this.renderer.setStyle(this.truncator.nativeElement, 'display', 'block');
    } else {
      this.renderer.setStyle(this.truncator.nativeElement, 'display', 'none');
    }
  }

}
