import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPetsComponent } from './new-pets.component';

describe('NewPetsComponent', () => {
  let component: NewPetsComponent;
  let fixture: ComponentFixture<NewPetsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewPetsComponent]
    });
    fixture = TestBed.createComponent(NewPetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
