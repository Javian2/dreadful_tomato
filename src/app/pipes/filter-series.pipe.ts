import { Pipe, PipeTransform } from '@angular/core';
import { Entry } from '../interfaces/data.model';

@Pipe({
  name: 'filterSeries'
})
export class FilterSeriesPipe implements PipeTransform {

  transform(series:Entry[], filterText:string, filterYear:number): any {
    
    filterText = filterText.toLowerCase().replace(' ', '');

    return filterYear > 0
      ? series.filter(serie => serie.title.toLowerCase().replace(' ', '').includes(filterText) && serie.releaseYear === filterYear)
      : series.filter(serie => serie.title.toLowerCase().replace(' ', '').includes(filterText))
  }

}
