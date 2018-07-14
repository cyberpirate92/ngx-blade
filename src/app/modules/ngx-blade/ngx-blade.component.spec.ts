import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxBladeComponent } from './ngx-blade.component';
import { DebugElement } from '@angular/core';
import { componentRefresh } from '../../../../node_modules/@angular/core/src/render3/instructions';

describe('NgxBladeComponent', () => {
  let component: NgxBladeComponent;
  let fixture: ComponentFixture<NgxBladeComponent>;
  let closeButton: DebugElement;
  let maximizeButton: DebugElement;
  let minimizeButton: DebugElement;

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

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('close button should be disabled when config.closebutton set to false', () => {
    component.config.closeButton = false;
    fixture.detectChanges();
    closeButton = fixture.nativeElement.querySelector('#ngxBladeCloseBtn');
    expect(closeButton).toBeFalsy();
  });

  it('close button should be enabled when config.closeButton set to true', () => {
    component.config.closeButton = true;
    fixture.detectChanges();
    closeButton = fixture.nativeElement.querySelector('#ngxBladeCloseBtn');
    expect(closeButton).toBeTruthy();
  });

  it('maxmimize button must be enabled in default config', () => {
    maximizeButton = fixture.nativeElement.querySelector('#ngxBladeMaximizeBtn');
    expect(maximizeButton).toBeTruthy();
  });

  it('minimize button must be disabled in default config', () => {
    minimizeButton = fixture.nativeElement.querySelector('#ngxBladeMinimizeBtn');
    expect(minimizeButton).toBeFalsy();
  });

  it('calling onMaximize should disable maximize button and enable maximize button', () => {
    component.onMaximize();
    fixture.detectChanges();
    maximizeButton = fixture.nativeElement.querySelector('#ngxBladeMaximizeBtn');
    minimizeButton = fixture.nativeElement.querySelector('#ngxBladeMinimizeBtn');
    expect((component as any).isMinimized).toBeFalsy();
    expect(maximizeButton).toBeFalsy();
    expect(minimizeButton).toBeTruthy();
  });

  it('calling onMinimize should disable minimize button and enable maximize button', () => {
    component.onMaximize();
    fixture.detectChanges();
    component.onMinimize();
    fixture.detectChanges();
    maximizeButton = fixture.nativeElement.querySelector('#ngxBladeMaximizeBtn');
    minimizeButton = fixture.nativeElement.querySelector('#ngxBladeMinimizeBtn');
    expect((component as any).isMinimized).toBeTruthy();
    expect(maximizeButton).toBeTruthy();
    expect(minimizeButton).toBeFalsy();
  });
});
