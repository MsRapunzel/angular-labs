import { Routes } from '@angular/router';
import { ParentComponent } from './components/parent/parent.component';
import { NotFoundComponent } from './components/notfound/notfound.component';
import { FirstComponent } from './components/first/first.component';
import { ThirdComponent } from './components/third/third.component';

export const routes: Routes = [
    { path: '', redirectTo: '/one', pathMatch: 'full' }, // Redirect з root сторінки
    { path: 'one', component: ParentComponent },
    { path: 'two', component: FirstComponent },
    { path: 'three/:id', component: ThirdComponent }, // Шлях із параметром
    { path: '**', component: NotFoundComponent } // Обробка 404
];
