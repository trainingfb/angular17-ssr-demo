import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {
  getItem(key: string): string | null {
    return window.localStorage.getItem(key)
  }
}
