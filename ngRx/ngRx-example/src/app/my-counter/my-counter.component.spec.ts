import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCounterComponent } from './my-counter.component';

describe('MyCounterComponent', () => {
  let component: MyCounterComponent;
  let fixture: ComponentFixture<MyCounterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyCounterComponent]
    });
    fixture = TestBed.createComponent(MyCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
