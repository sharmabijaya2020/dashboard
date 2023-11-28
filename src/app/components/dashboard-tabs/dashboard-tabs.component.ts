import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Observable, Observer } from 'rxjs';
import { MatTabsModule } from '@angular/material/tabs';
import { AsyncPipe } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { DashboardTableComponent } from '../dashboard-table/dashboard-table.component';
import { DashboardLineChartComponent } from '../dashboard-line-chart/dashboard-line-chart.component';
import { DashboardBarChartComponent } from '../dashboard-bar-chart/dashboard-bar-chart.component';
import { DashboardDropdownChartComponent } from '../dashboard-dropdown-chart/dashboard-dropdown-chart.component';
import { DashboardButtonComponent } from '../dashboard-button/dashboard-button.component';

export interface ExampleTab {
  label: string;
  content: string;
}

@Component({
  selector: 'app-dashboard-tabs',
  standalone: true,
  imports: [CommonModule,
    MatTabsModule,
    HeaderComponent,
    DashboardTableComponent,
    DashboardLineChartComponent,
    DashboardBarChartComponent,
    DashboardDropdownChartComponent,
    DashboardButtonComponent
  ],
  templateUrl: './dashboard-tabs.component.html',
  styleUrl: './dashboard-tabs.component.css'
})
export class DashboardTabsComponent {

}
