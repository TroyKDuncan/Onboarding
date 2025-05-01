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
  submitted = signal(false);
  errorMessage = signal('');

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

  isValidEmail = (email: string) => {
    // Simple regex for email validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  isValidPhone = (phone: string) => {
    // Accepts digits, spaces, dashes, parentheses; must have at least 10 digits
    return phone.replace(/\D/g, '').length >= 10;
  };

  isFormValid = () => {
    return (
      this.firstName().trim().length > 0 &&
      this.lastName().trim().length > 0 &&
      this.isValidEmail(this.email().trim())
    );
  };

  //   submitForm = () => {
  //     const fname = this.firstName().trim();
  //     const lname = this.lastName().trim();
  //     const email = this.email().trim();
  //     const phone = this.phone().trim();

  //     if (!fname || !lname || !email || !phone) {
  //       this.errorMessage.set('Please fill out all fields.');
  //       return;
  //     }

  //     if (!this.isValidEmail(email) && !this.isValidPhone(phone)) {
  //       this.errorMessage.set('Please enter a valid email address and phone number.');
  //       return;
  //     }

  //     if (!this.isValidEmail(email)) {
  //       this.errorMessage.set('Please enter a valid email address.');
  //       return;
  //     }

  //     if (!this.isValidPhone(phone)) {
  //       this.errorMessage.set('Please enter a valid phone number.');
  //       return;
  //     }

  //     // Clear error and proceed
  //     this.errorMessage.set('');

  //     fetch('https://ntfy.sh/onboarding_forms', {
  //       method: 'POST',
  //       body: `
  // Name: ${fname} ${lname}
  // Email: ${email}
  // Phone: ${phone}`,
  //       headers: {
  //         Title: 'ONBOARDING FORM SUBMISSION',
  //         Priority: 'urgent',
  //       },
  //     });

  //     this.submitted.set(true);
  //   };

  submitForm = () => {
    const fname = this.firstName().trim();
    const lname = this.lastName().trim();
    const email = this.email().trim();
    const phone = this.phone().trim();

    if (!fname || !lname || !email || !phone) {
      this.errorMessage.set('Please fill out all fields.');
      return;
    }

    if (!this.isValidEmail(email) && !this.isValidPhone(phone)) {
      this.errorMessage.set(
        'Please enter a valid email address and phone number.'
      );
      return;
    }

    if (!this.isValidEmail(email)) {
      this.errorMessage.set('Please enter a valid email address.');
      return;
    }

    if (!this.isValidPhone(phone)) {
      this.errorMessage.set('Please enter a valid phone number.');
      return;
    }

    this.errorMessage.set('');

    fetch('http://localhost:3000/api/notify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ firstName: fname, lastName: lname, email, phone }),
    })
      .then((res) => {
        if (!res.ok) throw new Error('Server error');
        this.submitted.set(true);
      })
      .catch((err) => {
        console.error(err);
        this.errorMessage.set('Something went wrong. Please try again.');
      });
  };

  resetForm = () => {
    this.firstName.set('');
    this.lastName.set('');
    this.email.set('');
    this.phone.set('');
    this.submitted.set(false);
  };
}
