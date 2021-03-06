import { Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { Incoming } from '../incoming.model';

@Component({
  selector: 'app-incoming-card',
  templateUrl: './incoming-card.component.html',
  styleUrls: ['./incoming-card.component.scss']
})
export class IncomingCardComponent implements OnInit {

  @Input() incoming: Incoming;
  @Input() id: number;

  // Event sent to parent on X click
  @Output('delete') deleteEvent: EventEmitter<void> = new EventEmitter<void>();

  @ViewChild('truncator', {static: true}) truncator: ElementRef<HTMLElement>;
  @ViewChild('bodyText',  {static: true}) bodyText:  ElementRef<HTMLElement>;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    // TODO FIXME : not working
    // work out if there is a text overflow and if not, hide the truncator
    const style = window.getComputedStyle(this.bodyText.nativeElement, null);
    const viewwableHeight = parseInt(style.getPropertyValue("height"), 10);

    if (this.bodyText.nativeElement.scrollHeight > viewwableHeight) {
      this.renderer.setStyle(this.truncator.nativeElement, 'display', 'block');
    } else {
      this.renderer.setStyle(this.truncator.nativeElement, 'display', 'none');
    }
  }

  deleteIncoming() {
    this.deleteEvent.emit()
  }
}
