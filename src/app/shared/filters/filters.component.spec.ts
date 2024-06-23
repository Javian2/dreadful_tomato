import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersComponent } from './filters.component';
import { By } from '@angular/platform-browser';

describe('FiltersComponent', () => {
  let component: FiltersComponent;
  let fixture: ComponentFixture<FiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test @Output', () => {
    const searchBar = fixture.debugElement.query(By.css('input'));
    let outputData!: string;
    component.searchValue.subscribe(data => outputData = data);

    searchBar.nativeElement.value = 'breaking';
    searchBar.nativeElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(outputData).toBe('breaking');
  });

});
