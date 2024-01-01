import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PadreComponent } from './padre/padre.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, PadreComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  Contador: number = 0;

  mensajeRecibido: string = '';

  recibirMensaje($event: string) {
    this.mensajeRecibido = $event;
  }

  incrementar() {
    this.Contador++;
  }

  decrementar() {
    this.Contador--;
  }
}
