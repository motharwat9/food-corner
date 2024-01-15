import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlArrayComponent } from './control-array.component';

describe('ControlArrayComponent', () => {
  let component: ControlArrayComponent;
  let fixture: ComponentFixture<ControlArrayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControlArrayComponent]
    });
    fixture = TestBed.createComponent(ControlArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
