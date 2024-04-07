import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { MoviesComponent } from '../movies/movies.component';
import { Location } from '@angular/common';


describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let router: any
  let location: Location

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [ 
        RouterTestingModule.withRoutes([
          { path: 'home', component: HomeComponent },
          { path: 'movies', component: MoviesComponent },
        ]) 
      ]
    })

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router)
    location = TestBed.inject(Location)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have initial opacity of 0.6', () => {
    const viewElements = fixture.debugElement.queryAll(By.css('.view'));
  
    for (const viewElement of viewElements) {
      const computedStyles = window.getComputedStyle(viewElement.nativeElement);
      expect(computedStyles.opacity).toBe('0.6');
    }
  });

  // it('should change opacity when hover', () => {
  //   const imgElement = fixture.debugElement.query(By.css('img'))
  //   const viewElement = fixture.debugElement.query(By.css('.view'))
    
  //   imgElement.triggerEventHandler('mouseover', null);
  //   fixture.detectChanges();

  //   expect(window.getComputedStyle(viewElement.nativeElement).opacity).toBe('1')  
  // })

  it('should redirect to movies', fakeAsync(() => {
    const moviesElement = fixture.debugElement.query(By.css('article'));

    moviesElement.triggerEventHandler('click', null);
    tick()

    expect(location.path()).toBe('/movies')
  }))

  it('should redirect to series', () => {
    const seriesElement = fixture.debugElement.queryAll(By.css('article'))[1]
    const spy = spyOn(router, 'navigate')

    seriesElement.triggerEventHandler('click', null)
    fixture.detectChanges();

    expect(spy).toHaveBeenCalledWith(['series'])
  })
}); 
