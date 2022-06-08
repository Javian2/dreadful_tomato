import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() ruta:string = ''

  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {

  }

  redirect(ruta:string){
    this.router.navigate([ruta])
  }

}
