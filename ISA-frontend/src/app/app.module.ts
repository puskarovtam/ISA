import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { RegisterComponent } from './components/register/register.component';
import { PharmacyAddComponent } from './components/admin-system/pharmacy-add/pharmacy-add.component';
import { PharmacyListComponent } from './components/admin-system/pharmacy-list/pharmacy-list.component';
import { PharmacyAdminAddComponent } from './components/admin-system/pharmacy-admin-add/pharmacy-admin-add.component';
import { PharmacyAdminListComponent } from './components/admin-system/pharmacy-admin-list/pharmacy-admin-list.component';
import { AdminSystemHomepageComponent } from './components/admin-system/admin-system-homepage/admin-system-homepage.component';
import { SystemAdminAddComponent } from './components/admin-system/system-admin-add/system-admin-add.component';
import { SystemAdminListComponent } from './components/admin-system/system-admin-list/system-admin-list.component';
import { MedicationAddComponent } from './components/admin-system/medication-add/medication-add.component';
import { MedicationListComponent } from './components/admin-system/medication-list/medication-list.component';
import { AdminSystemProfileComponent } from './components/admin-system/admin-system-profile/admin-system-profile.component';
import { AdminPharmacyHomepageComponent } from './components/admin-pharmacy/admin-pharmacy-homepage/admin-pharmacy-homepage.component';
import { AdminPharmacyProfileComponent } from './components/admin-pharmacy/admin-pharmacy-profile/admin-pharmacy-profile.component';
import { PharmacistAddComponent } from './components/admin-pharmacy/pharmacist-add/pharmacist-add.component';
import { PharmacistListComponent } from './components/admin-pharmacy/pharmacist-list/pharmacist-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavigationComponent,
    LoginComponent,
    RegisterComponent,
    PharmacyAddComponent,
    PharmacyListComponent,
    PharmacyAdminAddComponent,
    PharmacyAdminListComponent,
    AdminSystemHomepageComponent,
    SystemAdminAddComponent,
    SystemAdminListComponent,
    MedicationAddComponent,
    MedicationListComponent,
    AdminSystemProfileComponent,
    AdminPharmacyHomepageComponent,
    AdminPharmacyProfileComponent,
    PharmacistAddComponent,
    PharmacistListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
