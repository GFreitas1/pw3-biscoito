//Gabriel Freitas e Lucas Daido

import { Component } from '@angular/core';

@Component({
  selector: 'app-frase',
  imports: [],
  templateUrl: './frase.component.html',
  styleUrl: './frase.component.css'
})
export class FraseComponent {
  frases = [
    "Bom dia! Desejo que a sua manhã seja tão bela e especial quanto você e o seu coração.",
    "Você é especial para mim, então merece um bom dia exclusivo e cheio de carinho!",
    "Que seu dia seja leve e doce. Que traga amor, sorrisos e energia positiva.",
    "Olha o que temos aqui: um novo dia! É uma nova oportunidade para fazer coisas incríveis.",
    "Um lindo dia, começando com café da manhã, música, boas energias, bom humor, pessoas de bem e gratidão.",
    "A capacidade de enxergar a beleza em cada amanhecer é um alimento que nos dá energia para o dia todo.",
    "Bom dia para aqueles que acordam com o coração cheio de esperança e a mente repleta de sonhos. ",
    "Que cada desafio seja superado com determinação e coragem neste novo dia e que a gratidão invada o seu coração. Bom dia, guerreiro!",
    "O coração é o músculo mais forte.",
    "Renove sua fé e suas forças,porque hoje éum novo dia!"
  ]

  random(){
    return Math.floor(Math.random() * 10)
  }

  mostrarFrases = this.frases[this.random()]
}
