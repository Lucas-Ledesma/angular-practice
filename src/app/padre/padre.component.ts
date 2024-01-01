import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-padre',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css',
})
export class PadreComponent {}
