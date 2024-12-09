import { Routes } from '@angular/router';
import { NotFoundComponent } from './components/notfound/notfound.component';
import { AppComponent } from './app.component';
import { FullPageComponent } from './components/full-page/full-page.component';
import { FirstComponent } from './components/first/first.component';
import { ParentComponent } from './components/parent/parent.component';
import { ThirdComponent } from './components/third/third.component';

export const routes: Routes = [
    // { path: '/' },
    { path: 'lab-14', component: FullPageComponent },
    { path: 'redirect', redirectTo: '/three/12', pathMatch: 'full' },
    { path: 'one', component: ParentComponent },
    { path: 'two', component: FirstComponent },
    { path: 'three/:id', component: ThirdComponent },
    { path: '**', component: NotFoundComponent }
];
