import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-lets-talk',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './lets-talk.component.html',
})
export class LetsTalkComponent {
  @Output() formSubmitted = new EventEmitter<any>();

  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      jobSeeker: [false],
      employer: [false],
    });
  }

  onSubmit() {
    const { jobSeeker, employer } = this.contactForm.value;

    if (!jobSeeker && !employer) {
      alert('Please select at least one option: Job Seeker or Employer.');
      return;
    }

    if (this.contactForm.valid) {
      this.formSubmitted.emit(this.contactForm.value);
      this.contactForm.reset();
    }
  }
}
