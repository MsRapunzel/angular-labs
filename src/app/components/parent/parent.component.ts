import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parent',
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
})
export class ParentComponent {
  messageToChild: string = $localize`Hello from parent component!`;

  constructor(private router: Router) {}

  navigateToPageThree(id: number) {
    this.router.navigate(['/three', id]);
  }
}
