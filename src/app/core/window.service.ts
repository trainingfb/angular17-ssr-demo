import { DOCUMENT } from '@angular/common';
import { inject, Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WindowService {
  doc = inject(DOCUMENT);

  getWidth(): number | undefined {
    return this.doc.defaultView?.innerWidth
  }
}
