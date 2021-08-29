import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styles: [
  ]
})
export class RadioComponent implements OnInit {
  form: FormGroup
  constructor(public fb: FormBuilder) {
    this.form = this.fb.group({ gender: "" })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('radio onSubmit',this.form.value)
  }

}
