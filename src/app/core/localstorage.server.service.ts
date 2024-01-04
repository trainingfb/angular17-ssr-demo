import { Injectable } from '@angular/core';

@Injectable()
export class LocalstorageServerService {
  getItem(): string | null {
    return 'fake value';
  }
}
