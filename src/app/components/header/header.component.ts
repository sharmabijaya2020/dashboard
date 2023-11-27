import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardIconComponent } from '../dashboard-icon/dashboard-icon.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, DashboardIconComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
