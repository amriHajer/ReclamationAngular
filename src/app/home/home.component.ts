import { Component, AfterViewInit } from '@angular/core';
import { Carousel } from 'bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  constructor() { }

  ngAfterViewInit(): void {
    // Recherchez l'élément par ID
    const element = document.getElementById('c1');

    // Vérifiez si l'élément existe
    if (element) {
      // Initialisation du carrousel
      const myCarousel = new Carousel(element, {
        interval: 5000,  // Définissez l'intervalle souhaité en millisecondes
      });
    }
  }
}
