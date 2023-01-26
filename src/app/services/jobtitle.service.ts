import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobtitleService {
  get() {
    return { "Lead Engineer": 0, "SharePoint Practice Head": 0, "Operations Manager": 0, "Product Engineer": 0, "Lead Engineer-Dot Net": 0, "Network Engineer": 0, "Talent Manager": 0, "Software Engineer": 0, "UI Designer": 0 };
  }
}
