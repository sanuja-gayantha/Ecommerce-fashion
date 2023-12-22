import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenifitItemsComponent } from './benifit-items.component';

describe('BenifitItemsComponent', () => {
  let component: BenifitItemsComponent;
  let fixture: ComponentFixture<BenifitItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BenifitItemsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BenifitItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
