import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeComponent } from 'src/app/components/home/home.component';
import { MoviesComponent } from 'src/app/components/movies/movies.component';
import { SeriesComponent } from 'src/app/components/series/series.component';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';

fdescribe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let router: any
  let location: Location

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarComponent ],
      imports: [ 
        RouterTestingModule.withRoutes([
          { path: 'home', component: HomeComponent },
          { path: 'movies', component: MoviesComponent },
          { path: 'series', component: SeriesComponent },
        ]) 
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router)
    location = TestBed.inject(Location)
    fixture.detectChanges();
  });

  // ------------------------------------- GENERAL AND HOME TESTS ------------------------------------- 

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not display movies and series links and filters on home page', () => {
    component.ruta = ''
    fixture.detectChanges()
    
    const navElements = fixture.debugElement.queryAll(By.css('.logo div'))
    const filterElement = fixture.debugElement.query(By.css('.login-filter'))
    expect(navElements).toHaveSize(0)
    expect(filterElement).toBeFalsy()
  })

  it('should stay in home page when clicking home link button', fakeAsync(() => {
    component.ruta = ''
    fixture.detectChanges()

    const homeButton = fixture.debugElement.query(By.css('.logo-image'))
    homeButton.triggerEventHandler('click', null)
    tick();
    expect(location.path()).toBe('/home')
  }))

  
  // ------------------------------------- MOVIES PAGE ------------------------------------- 


  it('should display correct elements on movies component', () => {
    component.ruta = 'movies'
    fixture.detectChanges();

    const navElements = fixture.debugElement.queryAll(By.css('.logo div'))
    const filterElement = fixture.debugElement.query(By.css('.login-filter'))

    expect(navElements).toHaveSize(2)
    expect(filterElement).toBeTruthy();
  })

  it('should display nav items correct background colors on movies page', () => {
    component.ruta = 'movies'
    fixture.detectChanges();

    const navElements = fixture.debugElement.queryAll(By.css('.logo div'))
    const moviesButton = navElements[0]
    const seriesButton = navElements[1]
    const moviesComputedStyles = getComputedStyle(moviesButton.nativeElement)
    const seriesComputedStyles = getComputedStyle(seriesButton.nativeElement)

    expect(moviesComputedStyles.backgroundColor).toBe('rgb(255, 0, 0)')
    expect(seriesComputedStyles.backgroundColor).toBe('rgb(0, 0, 0)')
  })

  it('should navigate to home when clicking home button on movies page', fakeAsync(() => {
    component.ruta = 'movies'
    fixture.detectChanges();

    const homeButton = fixture.debugElement.query(By.css('.logo-image'))
    homeButton.triggerEventHandler('click', null)
    tick()
    expect(location.path()).toBe('/home')
  }))

  it('should navigate to series when clicking series button on movies page', fakeAsync(() => {
    component.ruta = 'movies'
    fixture.detectChanges();

    const navElements = fixture.debugElement.queryAll(By.css('.logo div'))

    navElements[1].triggerEventHandler('click', null)
    tick()
    expect(location.path()).toBe('/series')
  }))

  it('should stay in movies page when clicking movies button', fakeAsync(() => {
    component.ruta = 'movies'
    fixture.detectChanges();

    const navElements = fixture.debugElement.queryAll(By.css('.logo div'))
    const moviesButton = navElements[0]
    moviesButton.triggerEventHandler('click', null)
    tick()
    expect(location.path()).toBe('/movies')

    const moviesComputedStyles = getComputedStyle(moviesButton.nativeElement)
    expect(moviesComputedStyles.backgroundColor).toBe('rgb(255, 0, 0)')
  }))


  // ------------------------------------- SERIES PAGE ------------------------------------- 


  it('should display correct elements on series component', () => {
    component.ruta = 'series'
    fixture.detectChanges();

    const navElements = fixture.debugElement.queryAll(By.css('.logo div'))
    const filterElement = fixture.debugElement.query(By.css('.login-filter'))

    expect(navElements).toHaveSize(2)
    expect(filterElement).toBeTruthy();
  })

  it('should display nav items correct background colors on series page', () => {
    component.ruta = 'series'
    fixture.detectChanges();

    const navElements = fixture.debugElement.queryAll(By.css('.logo div'))
    const moviesButton = navElements[0]
    const seriesButton = navElements[1]
    const moviesComputedStyles = getComputedStyle(moviesButton.nativeElement)
    const seriesComputedStyles = getComputedStyle(seriesButton.nativeElement)

    expect(moviesComputedStyles.backgroundColor).toBe('rgb(0, 0, 0)')
    expect(seriesComputedStyles.backgroundColor).toBe('rgb(255, 0, 0)')
  })

  it('should navigate to home when clicking home button on series page', fakeAsync(() => {
    component.ruta = 'series'
    fixture.detectChanges();

    const homeButton = fixture.debugElement.query(By.css('.logo-image'))
    homeButton.triggerEventHandler('click', null)
    tick()
    expect(location.path()).toBe('/home')
  }))

  it('should navigate to movies when clicking movies button on series page', fakeAsync(() => {
    component.ruta = 'series'
    fixture.detectChanges();

    const navElements = fixture.debugElement.queryAll(By.css('.logo div'))

    navElements[0].triggerEventHandler('click', null)
    tick()
    expect(location.path()).toBe('/movies')
  }))

  it('should stay in series page when clicking series button', fakeAsync(() => {
    component.ruta = 'series'
    fixture.detectChanges();

    const navElements = fixture.debugElement.queryAll(By.css('.logo div'))
    const seriesButton = navElements[1]
    seriesButton.triggerEventHandler('click', null)
    tick()
    expect(location.path()).toBe('/series')

    const seriesComputedStyles = getComputedStyle(seriesButton.nativeElement)
    expect(seriesComputedStyles.backgroundColor).toBe('rgb(255, 0, 0)')
  }))
});
