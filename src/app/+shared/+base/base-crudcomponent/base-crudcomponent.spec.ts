import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseCRUDComponent } from './base-crudcomponent';

describe('BaseCRUDComponent', () => {
  let component: BaseCRUDComponent;
  let fixture: ComponentFixture<BaseCRUDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaseCRUDComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseCRUDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
