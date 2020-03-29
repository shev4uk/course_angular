import { Component, OnInit } from '@angular/core';
import { InboxService } from '../inbox.service';
import { Inbox } from '../inbox.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inbox-list',
  templateUrl: './inbox-list.component.html',
  styleUrls: ['./inbox-list.component.scss']
})
export class InboxListComponent implements OnInit {

  inbox: Inbox[];

  constructor(
    private inboxService: InboxService,
    private router: Router
  ) { }

  ngOnInit() {
    this.inboxService.getAllInbox().subscribe((res) => {
      this.inbox = res;
      console.log(res);
    })
  }

  goToEmail(id) {
    this.router.navigate(['/inbox', id])
  }

}
