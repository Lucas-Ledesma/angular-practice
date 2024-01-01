import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-padre',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css',
})
export class PadreComponent {
  @Output() mensajeEnviado = new EventEmitter<string>();
  @Output() incrementarDesdeHijo = new EventEmitter<void>();
  @Output() decrementarDesdeHijo = new EventEmitter<void>();

  mensaje = '';

  enviarMensaje() {
    this.mensajeEnviado.emit(this.mensaje);
  }

  incrementar() {
    this.incrementarDesdeHijo.emit();
  }

  decrementar() {
    this.decrementarDesdeHijo.emit();
  }
}
