import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  forme!: FormGroup;
  inscriptionReussie = false;
  successMessage: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.forme = this.formBuilder.group({
      nom: '',
      prenom: '',
      email: '', 
      tel:'' ,
      password: ''  ,
      confirmPassword: ''

    });
  }

  




submit(): void {
  this.http.post('http://localhost:3000/users/register', this.forme.getRawValue())
    .subscribe(
      () => {
        this.inscriptionReussie = true;
        this.successMessage = 'Votre compte a été créé avec succès. Bienvenue, ' + this.forme.get('prenom')?.value + ' ' + this.forme.get('nom')?.value + ' !';
        // Rediriger vers la page de connexion ou effectuer d'autres actions si nécessaire.
         this.router.navigate(['/login']);
      },
      (error) => {
        console.error('Erreur lors de la création du compte', error);
        // Vous pouvez également afficher un message d'erreur à l'utilisateur ici si nécessaire
      }
    );
}
}
