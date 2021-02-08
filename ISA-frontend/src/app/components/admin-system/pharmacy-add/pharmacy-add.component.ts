import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pharmacy-add',
  templateUrl: './pharmacy-add.component.html',
  styleUrls: ['./pharmacy-add.component.css'],
})
export class PharmacyAddComponent implements OnInit {
  pharmacyForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.pharmacyForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      address: ['', [Validators.required]],
      city: ['', [Validators.required]],
      country: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });
  }

  get f() {
    return this.pharmacyForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.pharmacyForm.invalid) {
      return;
    }
  }

  onReset() {
    this.submitted = false;
    this.pharmacyForm.reset();
  }
}
