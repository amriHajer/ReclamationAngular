import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigateur',
  templateUrl: './navigateur.component.html',
  styleUrls: ['./navigateur.component.css']
})
export class NavigateurComponent {
  isLoggedIn: boolean = false;

  constructor(
    private userService: UserService,
    private router: Router
  ) {
    this.userService.isLoggedIn$.subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn;
    });
  }

  logout() {
    // Call the logout method of the UserService to update the login status
    this.userService.logout();
    // Redirigez l'utilisateur vers la page d'accueil après la déconnexion
    this.router.navigate(['/login']);
  }
}
