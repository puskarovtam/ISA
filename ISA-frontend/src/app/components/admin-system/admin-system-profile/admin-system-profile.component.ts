import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from 'src/app/functions/must-match.validator';

@Component({
  selector: 'app-admin-system-profile',
  templateUrl: './admin-system-profile.component.html',
  styleUrls: ['./admin-system-profile.component.css'],
})
export class AdminSystemProfileComponent implements OnInit {
  systemAdminProfileForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.systemAdminProfileForm = this.formBuilder.group(
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
    return this.systemAdminProfileForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.systemAdminProfileForm.invalid) {
      return;
    }
  }

  onReset() {
    this.submitted = false;
    this.systemAdminProfileForm.reset();
  }
}
