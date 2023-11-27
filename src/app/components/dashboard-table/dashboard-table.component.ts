import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-dashboard-table',
  standalone: true,
  imports: [CommonModule,MatTableModule, MatIconModule],
  templateUrl: './dashboard-table.component.html',
  styleUrl: './dashboard-table.component.css'
})
export class DashboardTableComponent {
  displayedColumns: string[] = ['demo-channel', 'demo-totalCount', 'demo-mismatchCount', 'demo-matchPercentage'];
  dataSource = ELEMENT_DATA;
}

export interface PeriodicElement {
  channel: string;
  totalCount: string;
  mismatchCount: string;
  matchPercentage: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {channel: "VZW-ACSS", totalCount: '4,082', mismatchCount: '3,709', matchPercentage: '90.86%'},
  {channel: "VZW-EROES", totalCount: '7,866', mismatchCount: '7,308', matchPercentage: '92.91%'},
  {channel: "VZW-INTERNETSERVICES", totalCount: '3,671', mismatchCount: '3,532', matchPercentage: '96.21%'},
  {channel: "VZW-IVR", totalCount: '13', mismatchCount: '12', matchPercentage: '92.31%'},
  {channel: "VZW-MFA", totalCount: '8,498', mismatchCount: '8,084', matchPercentage: '95.13%'},
  {channel: "VZW-MFA-CHATBOT", totalCount: '219', mismatchCount: '213', matchPercentage: '97.26%'},
  {channel: "VZW-NETACE", totalCount: '15,498', mismatchCount: '14,820', matchPercentage: '95.63%'},
  {channel: "VZW-TS-BMW", totalCount: '4', mismatchCount: '4', matchPercentage: '10O%'},
  {channel: "Total", totalCount: '39,850', mismatchCount: '37,682', matchPercentage: '94.56%'}
];

