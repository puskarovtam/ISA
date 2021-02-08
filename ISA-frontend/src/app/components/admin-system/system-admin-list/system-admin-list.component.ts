import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-system-admin-list',
  templateUrl: './system-admin-list.component.html',
  styleUrls: ['./system-admin-list.component.css'],
})
export class SystemAdminListComponent implements OnInit {
  systemAdminHeaders = [
    'Name',
    'Surname',
    'Address',
    'City',
    'Country',
    'Phone',
    'E-mail',
    'Options',
  ];
  systemAdmins: any;

  constructor() {}

  ngOnInit(): void {}
}
