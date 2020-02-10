import { Component, OnInit } from '@angular/core';
import { Incoming } from '../incoming.model';
import { cardAnimation } from '../../shared/animations';
import { IncomingsService } from '../incoming.service';

@Component({
  selector: 'app-incomings-list',
  templateUrl: './incomings-list.component.html',
  styleUrls: ['./incomings-list.component.scss'],
  animations: cardAnimation
})
export class IncomingsListComponent implements OnInit {
  incomings: Incoming[];

  constructor(private incomingsService: IncomingsService) {
  }

  ngOnInit() {
    this.incomingsService.getAll().subscribe(result => this.incomings = result);
  }

  deleteIncoming(id: number) {
    const self = this;
    this.incomingsService.delete(id).toPromise()
      .then(result => this.incomings.splice(self.incomings.findIndex(incoming => incoming.id == id),1))
      .catch(a => console.log("Fail to delete"));
  }
}
