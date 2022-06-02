/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OgrenciComponent } from './ogrenci.component';

describe('OgrenciComponent', () => {
  let component: OgrenciComponent;
  let fixture: ComponentFixture<OgrenciComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OgrenciComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OgrenciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
