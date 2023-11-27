import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-dashboard-icon',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './dashboard-icon.component.html',
  styleUrl: './dashboard-icon.component.css'
})
export class DashboardIconComponent {

}
