import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { AdminComponent } from '../../pages/admin/admin.component';
import { AuthService } from '../../auth/auth.service';
import { SideMenuComponent } from '../../shared/side-menu/side-menu.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';




@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink, AdminComponent, RouterModule, SideMenuComponent, HeaderComponent, FooterComponent],
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
