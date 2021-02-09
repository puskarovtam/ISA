import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pharmacist-add',
  templateUrl: './pharmacist-add.component.html',
  styleUrls: ['./pharmacist-add.component.css'],
})
export class PharmacistAddComponent implements OnInit {
  pharmacistForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.pharmacistForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        shiftStart: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(5)]],
        shiftEnd: ['', Validators.required, Validators.minLength(5), Validators.maxLength(5)],
        name: ['', Validators.required],
        surname: ['', Validators.required],
        address: ['', Validators.required],
        city: ['', Validators.required],
        country: ['', Validators.required],
        phone: ['', Validators.required],
      }
    );
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.pharmacistForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.pharmacistForm.invalid) {
      return;
    }
  }

  onReset() {
    this.submitted = false;
    this.pharmacistForm.reset();
  }
}
