import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-medication-add',
  templateUrl: './medication-add.component.html',
  styleUrls: ['./medication-add.component.css']
})
export class MedicationAddComponent implements OnInit {
  medicationForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.medicationForm = this.formBuilder.group({
      code: ['', Validators.required],
      name: ['', Validators.required]
    });
  }

  get f() {
    return this.medicationForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.medicationForm.invalid) {
      return;
    }
  }

  onReset() {
    this.submitted = false;
    this.medicationForm.reset();
  }

}
