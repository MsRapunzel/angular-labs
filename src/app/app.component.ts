import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DescriptionComponent } from './description/description.component';
import { AboutComponent } from './about/about.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { ParentComponent } from './parent/parent.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    AboutComponent,
    DescriptionComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    ParentComponent], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-project';
}
