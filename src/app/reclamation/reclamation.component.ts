import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css']
})
export class ReclamationComponent implements OnInit {
  reclamationForm!: FormGroup;
  successMessage: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.reclamationForm = this.formBuilder.group({
      ref_envoi: ['', [Validators.required, Validators.pattern(/^(RR|CP|EE)[\w\d]{9}TN$/)
    ]],
      motif_rec: ['', Validators.required],
      date_envoi_rec: ['', Validators.required],
      date_reclamation: [this.getCurrentDate(), Validators.required],
      nom_expediteur: ['', Validators.required],
      adresse_expediteur: ['', Validators.required],
      email_expediteur: ['', [Validators.required, Validators.email]],
      tel_expediteur: ['', Validators.required],
      nom_destinataire: ['', Validators.required],
      adresse_destinataire: ['', Validators.required],
      email_destinataire: ['', [Validators.required, Validators.email]],
      tel_destinataire: ['', Validators.required]
    });
  }
  
  getCurrentDate(): string {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  createReclamation(): void {
    if (this.reclamationForm.valid) {
      this.http.post('http://localhost:3000/reclamations', this.reclamationForm.getRawValue())
        .subscribe(
          () => {
            this.router.navigate(['/profil']);
            this.successMessage = 'Votre réclamation a été ajoutée avec succès.';
          },
          (error) => {
            console.error('Erreur lors de la création de la réclamation', error);
            // Vous pouvez également afficher un message d'erreur à l'utilisateur ici si nécessaire
          }
        );
    } else {
      console.error('Formulaire invalide', this.reclamationForm.errors);
    }
  }
  
  navigateToReclamation() {
    this.router.navigate(['/reclamation']);
  }
}

