import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TshirtDetailComponent } from './tshirt-detail.component';

describe('TshirtDetailComponent', () => {
  let component: TshirtDetailComponent;
  let fixture: ComponentFixture<TshirtDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TshirtDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TshirtDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
