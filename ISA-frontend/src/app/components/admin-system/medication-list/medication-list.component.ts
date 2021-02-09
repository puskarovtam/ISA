import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medication-list',
  templateUrl: './medication-list.component.html',
  styleUrls: ['./medication-list.component.css'],
})
export class MedicationListComponent implements OnInit {
  medicationHeaders = ['Code', 'Name', 'Options'];
  medications: any;

  constructor() {}

  ngOnInit(): void {}
}
