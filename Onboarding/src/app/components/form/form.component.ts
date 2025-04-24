import { Component, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-form',
  imports: [MatIconModule, ReactiveFormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
  standalone: true,
})
export class FormComponent {
  firstName = signal('');
  lastName = signal('');
  email = signal('');
  phone = signal('');

  firstNameChange = (event: Event) => {
    const input = event.target as HTMLInputElement;
    this.firstName.set(input.value);
  };

  lastNameChange = (event: Event) => {
    const input = event.target as HTMLInputElement;
    this.lastName.set(input.value);
  };

  emailChange = (event: Event) => {
    const input = event.target as HTMLInputElement;
    this.email.set(input.value);
  };

  phoneChange = (event: Event) => {
    const input = event.target as HTMLInputElement;
    this.phone.set(input.value);
  };

  submitForm = () => {
    fetch('https://ntfy.sh/onboarding_forms', {
      method: 'POST',
      body: `
      Name: ${this.firstName().trim()} ${this.lastName().trim()}
Email: ${this.email().trim()}
Phone: ${this.phone().trim()}`,
      headers: {
        Title: 'ONBOARDING FORM SUBMISSION',
        Priority: 'urgent',
      },
    });
  };
}
