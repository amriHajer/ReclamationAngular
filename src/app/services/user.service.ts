
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private isLoggedIn = new BehaviorSubject<boolean>(false);

  isLoggedIn$ = this.isLoggedIn.asObservable();
  
  // Stockez ici les informations de l'utilisateur connecté si nécessaire.

  constructor() {}

  login() {
    // Connectez l'utilisateur ici (génération de token, etc.)
    this.isLoggedIn.next(true);
  }

  logout() {
    // Déconnectez l'utilisateur ici
    this.isLoggedIn.next(false);
  }
}
