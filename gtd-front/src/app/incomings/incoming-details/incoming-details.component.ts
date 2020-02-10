import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Incoming } from '../incoming.model';
import { ActivatedRoute, Router } from '@angular/router';
import { IncomingsService } from '../incoming.service';

@Component({
  selector: 'app-incoming-details',
  templateUrl: './incoming-details.component.html',
  styleUrls: ['./incoming-details.component.scss']
})
export class IncomingDetailsComponent implements OnInit {

  incoming: Incoming;

  constructor(private incomingService: IncomingsService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
        if (params.id != 'new') {
          this.incomingService.get(Number(params.id)).subscribe(result => this.incoming = result)
        } else {
          this.incoming = new Incoming();
        }
      }
    )
  }

  onSubmit(incomingForm: NgForm) {
    const incoming: Incoming = incomingForm.value;
    if (incoming.id) {
      this.incomingService.update(incoming.id, incoming);
    } else {
      this.incomingService.save(incoming);
    }
    this.router.navigateByUrl('/');
  }

  onCancel() {
    this.router.navigateByUrl('/');
  }
}
