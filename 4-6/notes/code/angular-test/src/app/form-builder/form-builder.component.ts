import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styles: [
  ]
})
export class FormBuilderComponent implements OnInit {
  contactForm: FormGroup
  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      fullName: this.fb.group({
        firstName: ['默认fname', [Validators.required]],
        lastName: []
      })
    })
  }

  onSubmit() {
    console.log('form-builder submit', this.contactForm)
  }

  ngOnInit(): void {
    this.contactForm.controls.fullName.get('lastName')?.valueChanges.subscribe((value)=>{
      console.log('lastName valueChanges',value)
    })
  }

  // patchValue可以只改变部分字段(也可改变所有字段)
  onPatchValue(){
    this.contactForm.controls.fullName.patchValue({
      firstName:'patchValue'
    })
  }
  // setValue必须改变所有字段
  onSetValue(){
    this.contactForm.controls.fullName.setValue({
      firstName:'set',
      lastName:'value'
    })
  }
  onReset(){
    this.contactForm.controls.fullName.reset()
  }

}
