import { Pipe, PipeTransform } from '@angular/core';
import { Entry } from '../interfaces/data.model';

@Pipe({
  name: 'filterMovies'
})
export class FilterMoviesPipe implements PipeTransform {

  transform(movies:Entry[], filterText:string, filterYear:number): any {
    
    filterText = filterText.toLowerCase().replace(' ', '');

    return filterYear > 0
      ? movies.filter(movie => movie.title.toLowerCase().replace(' ', '').includes(filterText) && movie.releaseYear === filterYear)
      : movies.filter(movie => movie.title.toLowerCase().replace(' ', '').includes(filterText))
  }

}
