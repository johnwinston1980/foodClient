import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProvincesComponent } from './list-provinces.component';

describe('ListProvincesComponent', () => {
  let component: ListProvincesComponent;
  let fixture: ComponentFixture<ListProvincesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListProvincesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProvincesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
