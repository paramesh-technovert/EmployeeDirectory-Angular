import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  get() {
    return { "IT Department": 0, "HR Department": 0, "UX Department": 0 };
  }
}
