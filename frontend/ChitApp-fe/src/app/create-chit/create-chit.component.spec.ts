import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateChitComponent } from './create-chit.component';

describe('CreateChitComponent', () => {
  let component: CreateChitComponent;
  let fixture: ComponentFixture<CreateChitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateChitComponent]
    });
    fixture = TestBed.createComponent(CreateChitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
