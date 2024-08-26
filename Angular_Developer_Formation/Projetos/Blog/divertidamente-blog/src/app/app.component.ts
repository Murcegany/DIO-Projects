import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  emotions = [
    { name: 'Alegria', description: 'Sinta a alegria!', class: 'alegria' },
    { name: 'Tristeza', description: 'Experimente a tristeza.', class: 'tristeza' },
    { name: 'Raiva', description: 'A raiva é intensa!', class: 'raiva' },
    { name: 'Medo', description: 'O medo nos faz hesitar.', class: 'medo' },
    { name: 'Nojinho', description: 'O nojinho é uma sensação de repulsa.', class: 'nojinho' }
  ];

  currentIndex = 0;

  get currentEmotion() {
    return this.emotions[this.currentIndex].class;
  }

  previousEmotion() {
    this.currentIndex = (this.currentIndex - 1 + this.emotions.length) % this.emotions.length;
  }

  nextEmotion() {
    this.currentIndex = (this.currentIndex + 1) % this.emotions.length;
  }
}
