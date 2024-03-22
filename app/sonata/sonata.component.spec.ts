import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SonataComponent } from './sonata.component';

describe('SonataComponent', () => {
  let component: SonataComponent;
  let fixture: ComponentFixture<SonataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SonataComponent]
    });
    fixture = TestBed.createComponent(SonataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
