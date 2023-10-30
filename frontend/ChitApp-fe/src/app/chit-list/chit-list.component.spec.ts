import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChitListComponent } from './chit-list.component';

describe('ChitListComponent', () => {
  let component: ChitListComponent;
  let fixture: ComponentFixture<ChitListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChitListComponent]
    });
    fixture = TestBed.createComponent(ChitListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
