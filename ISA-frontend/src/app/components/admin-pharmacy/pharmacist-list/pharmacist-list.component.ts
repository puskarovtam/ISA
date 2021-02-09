import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pharmacist-list',
  templateUrl: './pharmacist-list.component.html',
  styleUrls: ['./pharmacist-list.component.css'],
})
export class PharmacistListComponent implements OnInit {
  
  pharmacistHeaders = [
    'Name',
    'Surname',
    'Address',
    'City',
    'Phone',
    'E-mail',
    'Shift starts',
    'Shift ends',
    'Options',
  ];
  pharmacist: any;

  constructor() {}

  ngOnInit(): void {}
}
