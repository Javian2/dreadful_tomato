import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from '../interfaces/data.model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  getMovies() {
    return this.http.get<Data>('https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/data.json').pipe(
      map(data => data.entries.filter(entry => entry.programType === 'movies'))
    );
  }
  
  getSeries() {
    return this.http.get<Data>('https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/data.json').pipe(
      map(data => data.entries.filter(entry => entry.programType === 'series'))
    );
  }


}
