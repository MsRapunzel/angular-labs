import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DescriptionComponent } from './description/description.component';
import { AboutComponent } from './about/about.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AboutComponent, DescriptionComponent], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-project';
}
