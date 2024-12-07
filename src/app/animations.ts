import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

export const reusableAnimation = trigger('reusableToggle', [
    state('inactive', style({
      transform: 'scale(1)',
      backgroundColor: '#f8f9fa',
    })),
    state('active', style({
      transform: 'scale(1.1)',
      backgroundColor: '#007BFF',
      color: '#fff',
    })),
    transition('inactive => active', animate('600ms ease-in-out', keyframes([
      style({ transform: 'scale(1)', offset: 0 }),
      style({ transform: 'scale(1.05)', offset: 0.5 }),
      style({ transform: 'scale(1.1)', offset: 1 }),
    ]))),
    transition('active => inactive', animate('600ms ease-in-out', keyframes([
      style({ transform: 'scale(1.1)', offset: 0 }),
      style({ transform: 'scale(1.05)', offset: 0.5 }),
      style({ transform: 'scale(1)', offset: 1 }),
    ]))),
]);