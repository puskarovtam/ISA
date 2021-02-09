import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminPharmacyHomepageComponent } from './components/admin-pharmacy/admin-pharmacy-homepage/admin-pharmacy-homepage.component';
import { AdminPharmacyProfileComponent } from './components/admin-pharmacy/admin-pharmacy-profile/admin-pharmacy-profile.component';
import { PharmacistAddComponent } from './components/admin-pharmacy/pharmacist-add/pharmacist-add.component';
import { PharmacistListComponent } from './components/admin-pharmacy/pharmacist-list/pharmacist-list.component';
import { AdminSystemHomepageComponent } from './components/admin-system/admin-system-homepage/admin-system-homepage.component';
import { AdminSystemProfileComponent } from './components/admin-system/admin-system-profile/admin-system-profile.component';
import { MedicationAddComponent } from './components/admin-system/medication-add/medication-add.component';
import { MedicationListComponent } from './components/admin-system/medication-list/medication-list.component';
import { PharmacyAddComponent } from './components/admin-system/pharmacy-add/pharmacy-add.component';
import { PharmacyAdminAddComponent } from './components/admin-system/pharmacy-admin-add/pharmacy-admin-add.component';
import { PharmacyAdminListComponent } from './components/admin-system/pharmacy-admin-list/pharmacy-admin-list.component';
import { PharmacyListComponent } from './components/admin-system/pharmacy-list/pharmacy-list.component';
import { SystemAdminAddComponent } from './components/admin-system/system-admin-add/system-admin-add.component';
import { SystemAdminListComponent } from './components/admin-system/system-admin-list/system-admin-list.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'adminSystem',
    component: AdminSystemHomepageComponent,
    children: [
      { path: 'profile', component: AdminSystemProfileComponent },
      { path: 'addPharmacy', component: PharmacyAddComponent },
      { path: 'listPharmacy', component: PharmacyListComponent },
      { path: 'addPharmacyAdmin', component: PharmacyAdminAddComponent },
      { path: 'listPharmacyAdmin', component: PharmacyAdminListComponent },
      { path: 'addSystemAdmin', component: SystemAdminAddComponent },
      { path: 'listSystemAdmin', component: SystemAdminListComponent },
      { path: 'addMedication', component: MedicationAddComponent },
      { path: 'listMedication', component: MedicationListComponent },
    ]
  },
  {
    path: 'adminPharmacy',
    component: AdminPharmacyHomepageComponent,
    children: [
      { path: 'profile', component: AdminPharmacyProfileComponent },
      { path: 'addPharmacist', component: PharmacistAddComponent },
      { path: 'listPharmacist', component: PharmacistListComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
