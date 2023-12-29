import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealOfTheWeekComponent } from './deal-of-the-week.component';

describe('DealOfTheWeekComponent', () => {
  let component: DealOfTheWeekComponent;
  let fixture: ComponentFixture<DealOfTheWeekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DealOfTheWeekComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DealOfTheWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
