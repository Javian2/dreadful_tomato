import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from '../interfaces/data.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  getData(){
    return this.http.get<Data>('https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/data.json')
  }


}
