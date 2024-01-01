import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  message?: string;

  setMessage(message: string) {
    this.message = message;
  }

  getMessage() {
    return this.message || '';
  }
}
