import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pharmacy-list',
  templateUrl: './pharmacy-list.component.html',
  styleUrls: ['./pharmacy-list.component.css'],
})
export class PharmacyListComponent implements OnInit {
  pharmacyHeaders = ['Name', 'Address', 'City', 'Country', 'Description', 'Options'];
  pharmacies: any;

  constructor() {}

  ngOnInit(): void {}
}
