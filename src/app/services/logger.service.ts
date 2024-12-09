import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  log(message: string) {
    console.log(`[LoggerService]: ${message}`);
  }

  error(message: string) {
    console.error(`[LoggerService ERROR]: ${message}`);
  }

  warn(message: string) {
    console.warn(`[LoggerService WARNING]: ${message}`);
  }
}
