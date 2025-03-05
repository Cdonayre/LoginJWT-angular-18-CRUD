import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AdminComponent } from './pages/admin/admin.component';
import MostrarEstablecimientosComponent from './api/establecimientos/mostrar-establecimientos/mostrar-establecimientos.component';
import { MostrarCategoriaComponent } from './api/categorias/mostrar-categoria/mostrar-categoria.component';
import { MostrarDistritosComponent } from './api/distritos/mostrar-distritos/mostrar-distritos.component';
import { MostrarRisComponent } from './api/ris/mostrar-ris/mostrar-ris.component';


export const routes: Routes = [
    {path:'', redirectTo:'/login', pathMatch:'full'},
    {path: 'login', component: LoginComponent },
    {path: 'categorias', component: MostrarCategoriaComponent},
    {path: 'admin', component: AdminComponent},
    {path: 'establecimientos', component: MostrarEstablecimientosComponent},
    {path:'distritos', component: MostrarDistritosComponent},
    {path: 'ris', component: MostrarRisComponent}
];
