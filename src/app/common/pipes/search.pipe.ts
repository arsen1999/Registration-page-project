import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'searchPipe'
})

export class SearchPipe implements PipeTransform {
  transform(value, searchText: string) {
    const filteredArr = [];
    if (searchText === '') {
      return value;
    }
    for (const region of value) {
      if (region.toLowerCase().startsWith(searchText.toLowerCase())) {
        filteredArr.push(region);
      }
    }
    return filteredArr;
  }

}
