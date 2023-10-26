import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanecasComponent } from './canecas.component';

describe('CanecasComponent', () => {
  let component: CanecasComponent;
  let fixture: ComponentFixture<CanecasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CanecasComponent]
    });
    fixture = TestBed.createComponent(CanecasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
