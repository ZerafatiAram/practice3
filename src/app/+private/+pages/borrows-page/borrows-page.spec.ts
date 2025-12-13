import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowsPage } from './borrows-page';

describe('BorrowsPage', () => {
  let component: BorrowsPage;
  let fixture: ComponentFixture<BorrowsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BorrowsPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BorrowsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
