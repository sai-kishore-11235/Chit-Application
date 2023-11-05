import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditChitComponent } from './edit-chit.component';

describe('EditChitComponent', () => {
  let component: EditChitComponent;
  let fixture: ComponentFixture<EditChitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditChitComponent]
    });
    fixture = TestBed.createComponent(EditChitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
