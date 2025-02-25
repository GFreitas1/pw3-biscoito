//Gabriel Freitas e Lucas Daido

import { Component } from '@angular/core';

@Component({
  selector: 'app-imagens',
  imports: [],
  templateUrl: './imagens.component.html',
  styleUrl: './imagens.component.css'
})
export class ImagensComponent {
  imagemaberta = "biscoitoaberto.png"
  imagemfechada = "biscoitofechado.png"
  imagemverif: boolean = true

  mudarImagem(){
    this.imagemverif = !this.imagemverif
  }

  imagemAtual(){
    return this.imagemverif ? this.imagemfechada : this.imagemaberta;
  }
}
