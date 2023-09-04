import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExempleComponent } from './exemple.component';

describe('ExempleComponent', () => {
  let component: ExempleComponent;
  let fixture: ComponentFixture<ExempleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExempleComponent]
    });
    fixture = TestBed.createComponent(ExempleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
