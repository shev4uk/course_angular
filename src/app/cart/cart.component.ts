import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/internal/operators';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  unSubscribe = new Subject();

  counter = 0;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.dataService.deleteProductSubject.pipe(takeUntil(this.unSubscribe)).subscribe( (data: number) => {
      this.counter += data;
      console.log(this.counter);
    })
  }

  ngOnDestroy() {
    this.unSubscribe.next();
    this.unSubscribe.complete();
  }

}
