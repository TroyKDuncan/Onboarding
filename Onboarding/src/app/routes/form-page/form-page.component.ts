import { Component } from '@angular/core';
import { FormComponent } from '../../components/form/form.component';
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-form-page',
  imports: [FormComponent, FooterComponent],
  standalone: true,
  templateUrl: './form-page.component.html',
  styleUrl: './form-page.component.css'
})
export class FormPageComponent {

}
