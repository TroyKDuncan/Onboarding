import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from "../form/form.component";

@Component({
  selector: 'app-lets-talk',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormComponent],
  templateUrl: './lets-talk.component.html',
})
export class LetsTalkComponent {}
