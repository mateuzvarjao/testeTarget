import { Component } from '@angular/core';
import { VetorServiceService } from './vetor-service.service';
import { Valor } from './valor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testeTarget';

  arrayVendas: [] = [];
  id: number = 0;

  numFib?: number;

  listaVendas() {


    for (this.id; this.id < 30; this.id++) {

      this.vetorService.listarVendas(this.id).subscribe((vendas) => {

        console.log(vendas)
        this.arrayVendas = vendas;
      })

    }

  }


  funcaoSoma() {

    let indice = 13; 
    let soma = 0;
    let K = 0;

    while( K < indice){

      K = K + 1; 
      soma = soma + K; 

    }

      console.log(soma);
      return soma
    
  }

  sequenciaFibonacci() {

    if(this.numFib! < 0) {
      alert("Favor digite um número positivo")
      this.numFib = 0;
    }

    console.log(this.numFib)
    // Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.


  } 

  vetorFaturamento() {

  }

  valorFaturamento(){

    const faturamento = [
      {cidade:'SP', valor: 67836.43},
      {cidade:'RJ', valor: 36678.66},
      {cidade:'MG', valor: 29229.88},
      {cidade:'ES', valor: 27165.48},
      {cidade:'Outros', valor: 19849.53}
    ]

    let total = 0;
    let calcPorc = 0;

    faturamento.forEach((item) => {

      total += item.valor;
      
    });

    faturamento.forEach((item) => {
      calcPorc = item.valor / total * 100
      console.log(`A porcentagem de ${item.cidade} é: ${calcPorc.toFixed(1)}%`);
    });
    
  }

  

  inverterString(){

    const array = ['a', 'b', 'c', 'd', 'e', 'f'];
    //const array2 = ['g', 'h', 'i', 'j', 'k', 'l'];

    let arrayInvertido = [];
    let tamanhoOriginalDoArray = array.length;

    for (let i = 0; i < tamanhoOriginalDoArray; i++) {
      
    const ultimoElemento = array.pop();
    arrayInvertido.push(ultimoElemento);
      
    }

    console.log(arrayInvertido);

    return arrayInvertido
  }

  constructor(private vetorService:VetorServiceService){}
}
