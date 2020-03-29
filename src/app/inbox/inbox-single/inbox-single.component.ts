import { Component, OnInit } from '@angular/core';
import { InboxService } from '../inbox.service';
import { ActivatedRoute } from '@angular/router';
import { Inbox } from '../inbox.model';

@Component({
  selector: 'app-inbox-single',
  templateUrl: './inbox-single.component.html',
  styleUrls: ['./inbox-single.component.scss']
})
export class InboxSingleComponent implements OnInit {

  inbox: Inbox

  constructor(
    private inboxService: InboxService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.inboxService.getInboxById(id).subscribe( (res) => {
      this.inbox = res;
    })
  }

}
