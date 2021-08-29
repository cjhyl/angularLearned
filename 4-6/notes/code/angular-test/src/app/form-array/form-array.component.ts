import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styles: [
  ]
})
export class FormArrayComponent implements OnInit {

  constructor() { }

  // 初始化联系方式组
  contactForm: FormGroup = new FormGroup({
    contacts: new FormArray([])
  })

  // 获取联系方式组
  get contacts() {
    // console.log('contacts', this.contactForm.get("contacts"))
    return this.contactForm.get("contacts") as FormArray
  }

  // 添加联系方式
  addContact() {
    // 联系方式表单
    let myContact: FormGroup = new FormGroup({
      address: new FormControl(),
      phone: new FormControl(),
      name: new FormControl(),
    })
    // 向联系方式数组中添加联系方式
    this.contacts.push(myContact)
  }

  // 删除联系方式
  removeContact(i: number) {
    this.contacts.removeAt(i)
  }

  ngOnInit(): void {
    // 初始化 添加默认的一组联系方式
    this.addContact()
  }

  onSubmit() {
    console.log('contactForm submit',this.contactForm.value)
  }

}
