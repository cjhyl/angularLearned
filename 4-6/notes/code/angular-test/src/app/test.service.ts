import { Injectable } from '@angular/core';

// 服务类装饰器
@Injectable({
  providedIn: 'root'
})
export class TestService {
  test = "test"
  constructor() { }
}
