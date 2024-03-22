import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FastrackComponent } from './fastrack.component';

describe('FastrackComponent', () => {
  let component: FastrackComponent;
  let fixture: ComponentFixture<FastrackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FastrackComponent]
    });
    fixture = TestBed.createComponent(FastrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
