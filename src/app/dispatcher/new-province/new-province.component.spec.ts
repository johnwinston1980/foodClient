import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProvinceComponent } from './new-province.component';

describe('NewProvinceComponent', () => {
  let component: NewProvinceComponent;
  let fixture: ComponentFixture<NewProvinceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewProvinceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProvinceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
