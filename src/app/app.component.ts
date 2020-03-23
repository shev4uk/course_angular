import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'course';

  constructor(
    private dataService: DataService
  ) {}

  changeView(view) {
    this.dataService.viewCatalog.next(view);
  }
}
