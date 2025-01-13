import { Component } from '@angular/core';
import { VetorServiceService } from './vetor-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testeTarget';

  arrayVendas: [] = [];
  id: number = 0;

  numUsuario: number = 0;

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
    
    if(this.numUsuario < 0) {

      alert("Favor digite um número positivo")
      this.numUsuario = 0;

    } else {

      this.ChecaSeFazParteDaSqnc()

    }

      // let somaSequenciaFibonacci = 5*(this.numUsuario*this.numUsuario)+4;
      // console.log(somaSequenciaFibonacci)
      // let subSequenciaFibonacci = 5*(this.numUsuario*this.numUsuario)-4

      // let raizSoma = Math.sqrt(somaSequenciaFibonacci)
      // let raizSub = Math.sqrt(subSequenciaFibonacci)

      // if (Number.isInteger(raizSoma) || Number.isInteger(raizSub)) {
      //   console.log('O número FAZ parte da sequência de Fibonacci')
      // } else {
      //   console.log( 'O número faz NÃO parte da sequência de Fibonacci')
      // }


  } 

  ChecaSeFazParteDaSqnc() {

    let primeiroNum = 0;
    let segundoNum = 1;
    let proximoNum = 0;
    let arrayFibonacci = [];

    while (primeiroNum < this.numUsuario) {

      proximoNum = primeiroNum;
      primeiroNum = segundoNum;
      segundoNum += proximoNum;

      arrayFibonacci.push(primeiroNum)

      console.log(arrayFibonacci)

    }

    if (arrayFibonacci.includes(proximoNum)){
      console.log(`O número ${this.numUsuario} FAZ parte da sequência de Fibonacci`)
    } else {
      console.log(`O número ${this.numUsuario} NÃO faz parte da sequência de Fibonacci`)
    }

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
