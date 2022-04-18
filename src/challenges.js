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
function fizzBuzz(numeroDivisivel){
  let divisao = [];
  
  for(index1 = 0; index1 < numeroDivisivel.length; index1 += 1){ 
   
    if(numeroDivisivel[index1] % 15 === 0 ){
      divisao.push('fizzBuzz');
      
    }else if(numeroDivisivel[index1] % 3 === 0){
      divisao.push('fizz');
          
    }else if(numeroDivisivel[index1] % 5 === 0){
      divisao.push('buzz');
    
    }else {
      divisao.push('bug!');
      
    } 
  }
  
  return divisao;
}



// Desafio 9
function encode(codificador) {
  let palavra = codificador.split('');

  for (let index2 = 0; index2 < palavra.length; index2 +=1){
    
    if(palavra == "a"){
      palavra[index2] = "1";

    }else if (palavra[index2] ==  "e"){
     palavra[index2] = "2";

    }else if (palavra == "i"){
      palavra[index2] = "3";

    }else if (palavra == "o"){
      palavra[index2] = "4";

    }else if (palavra == "u"){
      palavra[index2] = "5";
    }
  } 
  return palavra; 
}

function decode(decodificador) {
  let palavra = decodificador;
  
  for (let index3 = 0; index3 < palavra.length; index3 +=1){
    
    if(palavra == "1"){
      palavra[index3] = "a";

    }else if (palavra[index2] ==  "2"){
     palavra[index3] = "e";

    }else if (palavra == "3"){
      palavra[index3] = "i";

    }else if (palavra == "4"){
      palavra[index3] = "o";

    }else if (palavra == "5"){
      palavra[index3] = "u";
    }
  } 
  return palavra.join(',');
}

// Desafio 10
function techList( name) {
 
      
  
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