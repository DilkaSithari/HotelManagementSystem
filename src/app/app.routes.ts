import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path: 'header', component: HeaderComponent, title: 'Header'},
    {path: 'home', component: HomeComponent, title: 'Home'}

];
