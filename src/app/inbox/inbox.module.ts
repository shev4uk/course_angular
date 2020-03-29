import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InboxListComponent } from './inbox-list/inbox-list.component';
import { InboxSingleComponent } from './inbox-single/inbox-single.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: InboxListComponent
  },
  {
    path: ':id', component: InboxSingleComponent
  }
];

@NgModule({
  declarations: [InboxListComponent, InboxSingleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class InboxModule { }
