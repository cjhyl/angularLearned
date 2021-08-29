import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from "@angular/forms"
interface Data {
  name: string
  value: string
}
@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styles: [
  ]
})
export class CheckboxComponent implements OnInit {
  Data: Array<Data> = [
    { name: "Pear", value: "pear" },
    { name: "Plum", value: "plum" },
    { name: "Kiwi", value: "kiwi" },
    { name: "Apple", value: "apple" },
    { name: "Lime", value: "lime" }
  ]
  form: FormGroup

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      checkArray: this.fb.array([])
    })
  }

  ngOnInit(): void {
  }

  onChange(event: Event) {
    const target = event.target as HTMLInputElement
    const value = target.value
    const checked = target.checked
    const checkArray = this.form.get("checkArray") as FormArray

    if (checked) {
      checkArray.push(this.fb.control(value))
    } else {
      const index = checkArray.controls.findIndex(
        control => control.value === value
      )
      checkArray.removeAt(index)
    }
  }

  onSubmit() {
    console.log('checkbox onSubmit',this.form.value)
  }

}