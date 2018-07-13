import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxBladeComponent } from './ngx-blade.component';

describe('NgxBladeComponent', () => {
  let component: NgxBladeComponent;
  let fixture: ComponentFixture<NgxBladeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxBladeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxBladeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
