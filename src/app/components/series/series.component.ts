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
  seriesFiltradas: Entry[] = []
  paginaActual:number = 1;
  no_image:string = '../../../assets/no_image.png'
  search:string = ''

  constructor(
    private _dataService:DataService
  ) { }

  ngOnInit(): void {
    this._dataService.getData().subscribe((data:Data) => {
      this.series = data.entries.filter((movie:Entry) => movie.programType === 'series')
      this.seriesFiltradas = JSON.parse(JSON.stringify(this.series))
    })
  }

  searchSerie(value:string){
    value = value.toLowerCase().replace(' ', '');
    this.seriesFiltradas = this.series.filter(serie => serie.title.toLowerCase().replace(' ', '').includes(value))
  }

}
