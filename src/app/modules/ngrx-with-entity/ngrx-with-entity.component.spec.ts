import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxWithEntityComponent } from './ngrx-with-entity.component';

describe('NgrxWithEntityComponent', () => {
  let component: NgrxWithEntityComponent;
  let fixture: ComponentFixture<NgrxWithEntityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgrxWithEntityComponent]
    });
    fixture = TestBed.createComponent(NgrxWithEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
