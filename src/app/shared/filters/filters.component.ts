import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  constructor() { }

  @Output() searchValue = new EventEmitter<string>();

  ngOnInit(): void {
  }

  search(value:string){
    this.searchValue.emit(value)
  }

}
