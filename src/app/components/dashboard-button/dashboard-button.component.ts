import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-dashboard-button',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './dashboard-button.component.html',
  styleUrl: './dashboard-button.component.css'
})
export class DashboardButtonComponent {

  toggleChart() {
    alert();
  }
}
