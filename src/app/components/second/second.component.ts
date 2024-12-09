import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-second',
  imports: [ReactiveFormsModule, CommonModule],
  standalone: true,
  templateUrl: './second.component.html',
  styleUrl: './second.component.css',
})
export class SecondComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      personalInfo: this.fb.group({
        firstName: ['', [Validators.required, Validators.minLength(2)]],
        lastName: ['', [Validators.required, Validators.minLength(2)]],
      }),
      address: this.fb.group({
        city: ['', Validators.required],
        postalCode: [
          '',
          [Validators.required, Validators.pattern('^[0-9]{5}$')],
        ],
      }),
      contact: this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        phone: ['', [Validators.required, Validators.pattern('^[- +()0-9]+$')]],
      }),
    });
  }

  updateForm(userData?: any) {
    console.log(this.form.value);
    console.log(userData);
    this.form.patchValue({
      personalInfo: {
        firstName: userData.personalInfo.firstName,
        lastName: userData.personalInfo.lastName,
      },
      address: {
        city: userData.address.city,
        postalCode: userData.address.postalCode,
      },
      contact: {
        email: userData.contact.email,
        phone: userData.contact.phone,
      },
    });
  }

  resetForm() {
    this.form.patchValue({
      personalInfo: { firstName: '', lastName: '' },
      address: { city: '', postalCode: '' },
      contact: { email: '', phone: '' },
    });
  }
}
