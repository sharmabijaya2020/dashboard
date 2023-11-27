import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-dashboard-dropdown-chart',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule],
  templateUrl: './dashboard-dropdown-chart.component.html',
  styleUrl: './dashboard-dropdown-chart.component.css'
})
export class DashboardDropdownChartComponent {
  toppings = new FormControl('');
  toppingList: string[] = ['VZW-ACSS', 'VZW-EROES', 'VZW-INTERNETSERVICES', 'VZW-IVR', 'VZW-MFA', 'VZW-MFA-CHATBOT', 'VZW-NETACE', 'VZW-TS-BMW'];
  
  reports = new FormControl('');
  reportList: string[] = ['Daily', 'Weekly', 'Monthly'];
  
  billDates = new FormControl('');
  billDateList: string[] = ['Last Six month', 'Last Month'];
  
}
