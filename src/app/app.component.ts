import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'actividad3';

  audioPlaying: boolean = false;

  reproduceAudio1() {
    this.audioPlaying = true;
    const audio = new Audio();
    audio.src = './assets/audio/audio.mp3';
    audio.load();
    audio.play();
    audio.onended = () => {
      this.audioPlaying = false;
    };
  }

  reproduceAudio2() {
    this.audioPlaying = true;
    const audio = new Audio();
    audio.src = './assets/audio/audio2.mp3';
    audio.load();
    audio.play();
    audio.onended = () => {
      this.audioPlaying = false;
    };
  }
}
