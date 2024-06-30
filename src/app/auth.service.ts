import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userEmail = new BehaviorSubject<string>(''); // Nouvelle propriété pour stocker l'email
  private isLoggedIn = new BehaviorSubject<boolean>(false); // Ajoutez la variable isLoggedIn
  private user = new BehaviorSubject<any>({ id: '' });  // Nouvelle propriété pour stocker les données de l'utilisateur
  private profileUrl = '/users/user'; // Assurez-vous que le chemin correspond à l'URL de votre contrôleur Nest.js
  
  isAuthenticated(): boolean {
    // Vous devez implémenter la logique d'authentification appropriée ici.
    // Par exemple, vérifier la validité d'un token JWT.
    const token = localStorage.getItem('authToken');
    return !!token; // Retourne true si l'utilisateur est authentifié, sinon false.
  }

  getUserId(): string {
    // Vous pouvez obtenir l'ID de l'utilisateur à partir de l'objet user de votre service.
    return this.user.value.id || ''; // Utilisez la propriété `value` pour accéder à la valeur de BehaviorSubject.
  }
  // 

  get userEmail$() {
    return this.userEmail.asObservable();
  }

  //get user$() {
  //  return this.user.asObservable();
  // }
  
  getUserData() {
    return this.user.asObservable();
  }

  getUserProfile() {
    return this.http.get(this.profileUrl);
  }

  get isLoggedIn$() {
    return this.isLoggedIn.asObservable(); // Exposez la variable isLoggedIn en tant qu'observable
  }

  constructor(private http: HttpClient) { }

  login(credentials: any) {
    return this.http.post('http://localhost:3000/users/login', credentials)
      .pipe(
        catchError(this.handleError),
        tap((response: any) => {
          // Stockez l'email de l'utilisateur connecté
          this.userEmail.next(response.email); // Supposons que la réponse contient l'email
          this.isLoggedIn.next(true); // Mettez à jour la variable isLoggedIn à true lors de la connexion
        })
      );
  }

  register(userData: any) {
    return this.http.post('http://localhost:3000/users/register', userData, { withCredentials: true })
      .pipe(
        catchError(this.handleError)
      );
  }




  
  logout() {
    return this.http.post('http://localhost:3000/users/logout', {}, {
      withCredentials: true // Inclure les informations d'authentification
    }).pipe(
      catchError(this.handleError),
      tap(() => {
        // Réinitialisez l'email lors de la déconnexion
        this.userEmail.next('');
        this.isLoggedIn.next(false); // Mettez à jour la variable isLoggedIn à false lors de la déconnexion
      })
    );
  }
  
  

  createReclamation(formData: any) {
    return this.http.post('http://localhost:3000/reclamations', formData, { withCredentials: true })
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('Une erreur s\'est produite :', error.error.message);
    } else {
      console.error(
        `Code d'erreur : ${error.status}, ` +
        `Message : ${error.message}`);
    }
    return throwError('Une erreur est survenue. Veuillez réessayer plus tard.');
  }
}
