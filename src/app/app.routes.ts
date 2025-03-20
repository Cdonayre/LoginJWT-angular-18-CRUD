import { Routes } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';

export const routes: Routes = [

    {path: 'login',
     loadComponent: () => import('./pages/login/login.component') 
    },

    {path: 'admin', component: AdminComponent},
    {
        path: 'dashboard', 
        loadComponent: ()=>import('./api/dashboard/dashboard.component'),
        children:
         [
           { 
            path: 'establecimientos',
            title:'Establecimientos',
             loadComponent: ()=>import('./api/establecimientos/mostrar-establecimientos/mostrar-establecimientos.component') 
           },
           { 
            path: 'establecimientos:/id',
            title:'Establecimientos-Id',
             loadComponent: ()=>import('./api/establecimientos/crear-establecimiento/crear-establecimiento.component') 
           },
           { 
            path: 'categorias',
            title:'Categorías',
             loadComponent: ()=>import('./api/categorias/mostrar-categoria/mostrar-categoria.component') 
           },
           { 
            path: 'distritos',
            title:'Distritos',
             loadComponent: ()=>import('./api/distritos/mostrar-distritos/mostrar-distritos.component') 
           },
           { 
            path: 'ris',
            title:'RIS',
             loadComponent: ()=>import('./api/ris/mostrar-ris/mostrar-ris.component') 
           },
        //    {
        //     path:'', redirectTo:'control-flow', pathMatch:'full',
        //    }
         ],
    },
    {path:'', redirectTo:'login', pathMatch:'full'},
];
