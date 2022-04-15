// Desafio 1
function compareTrue(value1, value2) {
  if (value1 && value2 === true) {
     return true;
  } else {
     return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  string = string.split(' ');
  return string;
}

// Desafio 4
function concatName(string) {
  let ultimo = string[string.length -1];
  let primeiro = string[0];
  return (ultimo + ", "  + primeiro);
}

// Desafio 5
function footballPoints(wins, ties) {
  let vitoria = wins * 3;
  let empate = ties * 1;

  return vitoria + empate;
}

// Desafio 6
function highestCount(array) {
  let maior = array[0];
  let repetido = 0;
   
  for(let index = 0; index <= array.length; index +=1){
    if(maior < array[index]){
      maior = array[index]
    }
  }  
  
  for(let i = 0; i <= array.length; i += 1){
    if(maior == array[i]){
      repetido += 1;
    }
  }
  return repetido;
}
console.log(highestCount([9, 2, 3, 9]));
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distancia =  (cat1 + cat2);
  if(distancia / 2 === mouse  ){
    return 'os gatos trombam e o rato foge';
  }else if (cat1 - mouse < cat2 - mouse){
    return 'cat1';
  }else(cat1 - mouse > cat2 - mouse);{
    return 'cat2';
  } 
}

// Desafio 8
function fizzBuzz() {

}

// Desafio 9
function encode() {

}

function decode() {
  // seu código aqui
}

// Desafio 10
function techList(arraylst, name) {
 let list = {};
  
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};