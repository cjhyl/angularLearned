import { AbstractControl, ValidationErrors } from "@angular/forms"

export class MyValidators {
  // 字段值中不能包含空格
  static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    // 有空格 验证未通过
    if (/\s/.test(control.value)){
      return { cannotContainSpace: true }
    }
    // 验证通过
    return null
  }
  // 异步
  static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise((resolve) => {
      setTimeout(() => {
        if(control.value === 'admin'){
          resolve({shouldBeUnique: true})
        }else {
          resolve(null)
        }
      }, 2000);
    })
  }
}