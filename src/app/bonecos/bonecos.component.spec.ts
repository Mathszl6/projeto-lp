import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BonecosComponent } from './bonecos.component';

describe('BonecosComponent', () => {
  let component: BonecosComponent;
  let fixture: ComponentFixture<BonecosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BonecosComponent]
    });
    fixture = TestBed.createComponent(BonecosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
