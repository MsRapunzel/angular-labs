import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data: string[] = ['Item 1', 'Item 2', 'Item 3'];

  constructor(private logger: LoggerService) {}

  getData(): string[] {
    this.logger.log('Fetching data...');
    return this.data;
  }

  addData(item: string): void {
    this.data.push(item);
    this.logger.log(`Added new item: ${item}`);
  }

  removeData(item: string): void {
    const index = this.data.indexOf(item);
    if (index !== -1) {
      this.data.splice(index, 1);
      this.logger.warn(`Removed item: ${item}`);
    } else {
      this.logger.error(`Item not found: ${item}`);
    }
  }
}
