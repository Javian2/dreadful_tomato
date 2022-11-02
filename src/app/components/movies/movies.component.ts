import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Data, Entry } from '../../interfaces/data.model';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies: Entry[] = []
  paginaActual:number = 1;
  no_image:string = '../../../assets/no_image.png'

  filterText:string = ''
  filterYear:number = NaN;

  constructor(
    private _dataService:DataService
  ) { }

  ngOnInit(): void {
    this._dataService.getData().subscribe((data:Data) => {
      this.movies = data.entries.filter((movie:Entry) => movie.programType === 'movies')
    })
  }

  searchMovie(text:string){
    this.filterText = text;
    this.paginaActual = 1;
  }

  dateMovie(year:number){
    this.filterYear = year;
    this.paginaActual = 1;
  }

}
