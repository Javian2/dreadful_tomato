import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Data, Entry } from '../../interfaces/data.model';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {

  series: Entry[] = []
  paginaActual:number = 1;
  no_image:string = '../../../assets/no_image.png'
  search:string = ''

  filterText:string = ''
  filterYear:number = NaN;

  constructor(
    private _dataService:DataService
  ) { }

  ngOnInit(): void {
    this._dataService.getData().subscribe((data:Data) => {
      this.series = data.entries.filter((movie:Entry) => movie.programType === 'series')
    })
  }

  dateSerie(year:number){
    this.filterYear = year;
    this.paginaActual = 1;
  }

  searchSerie(text:string){
    this.filterText = text;
    this.paginaActual = 1;
  }
}
