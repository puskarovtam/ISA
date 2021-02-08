import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pharmacy-admin-list',
  templateUrl: './pharmacy-admin-list.component.html',
  styleUrls: ['./pharmacy-admin-list.component.css'],
})
export class PharmacyAdminListComponent implements OnInit {
  pharmacyAdminHeaders = [
    'Name',
    'Surname',
    'Address',
    'City',
    'Country',
    'Phone',
    'E-mail',
    'Options'
  ];
  pharmacyAdmins: any;

  constructor() {}

  ngOnInit(): void {}
}
