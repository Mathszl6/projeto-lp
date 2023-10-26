import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeluciasComponent } from './pelucias.component';

describe('PeluciasComponent', () => {
  let component: PeluciasComponent;
  let fixture: ComponentFixture<PeluciasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PeluciasComponent]
    });
    fixture = TestBed.createComponent(PeluciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
