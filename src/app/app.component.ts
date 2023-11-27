import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import { DashboardTabsComponent } from './components/dashboard-tabs/dashboard-tabs.component';
import { DashboardTableComponent } from './components/dashboard-table/dashboard-table.component';
import { NgChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent,MatSlideToggleModule,MatIconModule,DashboardTabsComponent,
    NgChartsModule],
  
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'vbg-dashboard-poc';
}
