import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDropdownChartComponent } from './dashboard-dropdown-chart.component';

describe('DashboardDropdownChartComponent', () => {
  let component: DashboardDropdownChartComponent;
  let fixture: ComponentFixture<DashboardDropdownChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardDropdownChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardDropdownChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
