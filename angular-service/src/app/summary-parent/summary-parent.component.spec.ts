import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryParentComponent } from './summary-parent.component';

describe('SummaryParentComponent', () => {
  let component: SummaryParentComponent;
  let fixture: ComponentFixture<SummaryParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SummaryParentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SummaryParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
