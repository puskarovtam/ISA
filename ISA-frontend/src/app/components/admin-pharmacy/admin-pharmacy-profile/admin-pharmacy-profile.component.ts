import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from 'src/app/functions/must-match.validator';

@Component({
  selector: 'app-admin-pharmacy-profile',
  templateUrl: './admin-pharmacy-profile.component.html',
  styleUrls: ['./admin-pharmacy-profile.component.css'],
})
export class AdminPharmacyProfileComponent implements OnInit {
  pharmacyAdminProfileForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.pharmacyAdminProfileForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required, Validators.minLength(6)],
        name: ['', Validators.required],
        surname: ['', Validators.required],
        address: ['', Validators.required],
        city: ['', Validators.required],
        country: ['', Validators.required],
        phone: ['', Validators.required],
      },
      {
        validator: MustMatch('password', 'confirmPassword'),
      }
    );
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.pharmacyAdminProfileForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.pharmacyAdminProfileForm.invalid) {
      return;
    }
  }

  onReset() {
    this.submitted = false;
    this.pharmacyAdminProfileForm.reset();
  }
}
