//Gabriel Freitas e Lucas Daido

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImagensComponent } from "./imagens/imagens.component";
import { FraseComponent } from "./frase/frase.component";

@Component({
  selector: 'app-root',
  imports: [ImagensComponent, FraseComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'pw3-biscoito';
}
