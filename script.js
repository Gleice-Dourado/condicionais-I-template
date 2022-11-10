const booleano1 = false
const booleano2 = true
const booleano3 = true

/* if(booleano1){
    alert('entrou no if') // somente entra no if se for TRUE
}else{
    alert('Entrou no else. A variavel é false.')
//Se for false entra no else
} */
/* if(booleano1 === booleano2){
  alert('O valor das variaveis 1 e 2 são iguais')  
}else if(booleano2 === booleano3){
    alert('as variaveis 2 e 3 são iguais')
}else if(booleano1 === booleano3){
    alert( 'As variaveis 1 e 3 são iguais')
}else{
    alert('Não existem variaveis iguais')
} */

// TITULO DE ELEITOR

const idade = 5//prompt('Digite sua idade')

 if(idade >= 60 || idade >= 16 && idade < 18){
    console.log('Facultativo tirar titulo de eleitor!')
}else if(idade >= 18){
    console.log('Obrigatório tirar titulo de eleitor!')
}else{
    console.log('Você ainda não tem a idade minima para tirar o titulo de eleitor.')
}

//EXERCICIO DE FIXAÇÃO

const media = 11


if (media >= 5 && media <= 10){
    console.log('Aprovado!')
}else if(media >= 3 && media <= 4){
    console.log('Recuperação')
}else if(media >= 0 && media <= 3){
    console.log('Reprovado!')
}else{
    console.log('Dado inválido')
}