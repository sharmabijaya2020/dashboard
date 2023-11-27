import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardBarChartComponent } from './dashboard-bar-chart.component';

describe('DashboardBarChartComponent', () => {
  let component: DashboardBarChartComponent;
  let fixture: ComponentFixture<DashboardBarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardBarChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
