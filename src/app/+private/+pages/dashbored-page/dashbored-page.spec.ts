import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboredPage } from './dashbored-page';

describe('DashboredPage', () => {
  let component: DashboredPage;
  let fixture: ComponentFixture<DashboredPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboredPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboredPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
