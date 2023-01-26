import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OfficeService {

  get() {
    return { "India": 0, "Seattle": 0 };
  }
}
