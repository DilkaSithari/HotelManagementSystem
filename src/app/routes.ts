import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';

const routeConfig: Routes = [
    {
      path: '',
      component: HeaderComponent,
      title: 'Header'
    }
    
  ];
  
  export default routeConfig;