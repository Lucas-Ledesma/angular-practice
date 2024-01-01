import { Component, OnInit } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PadreComponent } from './padre/padre.component';
import { ServiceService } from './service.service';
import { FormsModule } from '@angular/forms';
import { DirecDirective } from './direc.directive';
import { MyPipePipe } from './my-pipe.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    PadreComponent,
    FormsModule,
    DirecDirective,
    MyPipePipe,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  constructor(private myService: ServiceService) {}

  message: string = this.myService.getMessage();

  tempMessage: string = '';

  ngOnInit(): void {
    this.myService.setMessage('first message');
    this.message = this.myService.getMessage();
  }

  saveMessage() {
    this.myService.setMessage(this.tempMessage);
    this.message = this.myService.getMessage();
  }
}
