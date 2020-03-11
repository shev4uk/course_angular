import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform<T>(products: T, direction: any, param): T {
    function sortPrice(a, b) {
      if (direction) {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
      
    }
    return products.sort(sortPrice);
  }

}
