import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DescriptionComponent } from './components/description/description.component';
import { AboutComponent } from './components/about/about.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { ThirdComponent } from './components/third/third.component';
import { ParentComponent } from './components/parent/parent.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    AboutComponent,
    DescriptionComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    ParentComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'my-project';
}
