import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-person-add-page',
  templateUrl: './person-add-page.component.html',
  styleUrl: './person-add-page.component.scss'
})
export class PersonAddPageComponent {
  
  form: FormGroup
  
  constructor(private fb: FormBuilder) {
      this.form = fb.group({
        name: ["", Validators.required],
        age: ["", Validators.required]
      })
    }
}
