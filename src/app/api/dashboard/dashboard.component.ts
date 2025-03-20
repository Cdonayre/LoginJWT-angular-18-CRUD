import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { AdminComponent } from '../../pages/admin/admin.component';
import { AuthService } from '../../auth/auth.service';
import { SideMenuComponent } from '../../shared/side-menu/side-menu.component';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink, AdminComponent, RouterModule,SideMenuComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export default class DashboardComponent {
    authservice = inject(AuthService);
    router = inject(Router);
  public logout(){
    this.authservice.logout();
    this.router.navigate(['login']);
  }
}
