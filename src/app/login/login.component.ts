import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  loginError: string = '';
  userData: any; // Déclarez cette variable dans votre classe LoginComponent


  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private http: HttpClient, // Injectez HttpClient ici
    private router: Router ,
    private userService:UserService 
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  
  submitLoginForm(): void {
    const credentials = this.loginForm.getRawValue();
  
    this.http.post('http://localhost:3000/users/login', credentials)
      .subscribe(
        (user) => {
          // La requête HTTP a réussi, vous pouvez maintenant appeler this.userService.login()
          this.userService.login(); // Mettez à jour l'état de connexion dans le service UserService
          console.log('Données de l\'utilisateur après la connexion :', user); // Affichez les données de l'utilisateur dans la console
          this.userData = user;
          // Redirigez l'utilisateur vers la page de profil après la connexion réussie
          this.router.navigate(['/profile']);
        },
        (error) => {
          // Gestion des erreurs si la connexion échoue
          console.error('Erreur de connexion :', error);
          this.loginError = 'Identifiants incorrects. Veuillez réessayer.';
        }
      );
  }

}