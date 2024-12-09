import { Component } from '@angular/core';
import { reusableAnimation } from '../../animations';

@Component({
  selector: 'app-first',
  imports: [],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css',
  animations: [reusableAnimation],
})
export class FirstComponent {
  toggle: string = 'inactive';

  toggleAnimation() {
    this.toggle = this.toggle === 'inactive' ? 'active' : 'inactive';
  }
}
