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

  constructor(
    private _dataService:DataService
  ) { }

  ngOnInit(): void {
    this._dataService.getData().subscribe((data:Data) => {
      this.movies = data.entries.filter((movie:Entry) => movie.programType === 'movie')
    })
  }

}
