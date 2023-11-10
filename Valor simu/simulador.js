
const btn = document.querySelector('#send')

btn.addEventListener('click', function (e) {
  const idade = document.querySelector('#idade').value
  const especie = document.querySelector('#especie').value
  const tempoBeneficio = document.querySelector('#tempoDoBeneficio').value
  const analfabeto = document.querySelector('#analfabeto').checked
  const rogo = document.querySelector('#rogo').checked
  const Representante = document.querySelector('#Representante').checked
  const bancos1 = document.querySelector('#bancos1').value
  const bancosGeral1 = document.querySelector('#bancos1')
  if (especie == 32 || especie == 92 || especie == 11 && idade <=20){
    bancosGeral1[1].setAttribute('disabled', '')
    bancosGeral1[2].setAttribute('disabled', '')
    bancosGeral1[3].setAttribute('disabled', '')
    bancosGeral1[4].setAttribute('disabled', '')
    bancosGeral1[5].setAttribute('disabled', '')
    bancosGeral1[6].setAttribute('disabled', '')
    bancosGeral1[7].setAttribute('disabled', '')
    bancosGeral1[8].setAttribute('disabled', '')
    bancosGeral1[9].setAttribute('disabled', '')
    bancosGeral1[10].setAttribute('disabled', '')
    bancosGeral1[11].setAttribute('disabled', '')
    bancosGeral1[12].setAttribute('disabled', '')
    bancosGeral1[13].setAttribute('disabled', '')
    bancosGeral1[14].setAttribute('disabled', '')
    bancosGeral1[15].setAttribute('disabled', '')
    bancosGeral1[16].setAttribute('disabled', '')
    bancosGeral1[17].setAttribute('disabled', '')
  } else if (idade <= 54 && especie == 32 || especie == 92 || especie == 11 ){
    alert('Necessário Pericia atualizada, com data a partir de 01/01/2017.')
    alert('Data da Carta Perícia seja igual ou superior à julho de 2018;')
    bancosGeral1[1].setAttribute('disabled', '')
    bancosGeral1[2].setAttribute('disabled', '')
    bancosGeral1[3].setAttribute('disabled', '')
    bancosGeral1[4].setAttribute('disabled', '')
    bancosGeral1[5].setAttribute('disabled', '')
    bancosGeral1[6].setAttribute('disabled', '')
    bancosGeral1[7].setAttribute('disabled', '')
    bancosGeral1[8].setAttribute('disabled', '')
    bancosGeral1[9].setAttribute('disabled', '')
    bancosGeral1[10].setAttribute('disabled', '')
  }

  if(idade >= 83){
    alert("IDADE AVANÇADA")
    bancosGeral1[1].setAttribute('disabled', '')
    bancosGeral1[2].setAttribute('disabled', '')
    bancosGeral1[3].setAttribute('disabled', '')
    bancosGeral1[4].setAttribute('disabled', '')
    bancosGeral1[5].setAttribute('disabled', '')
    bancosGeral1[6].setAttribute('disabled', '')
    bancosGeral1[7].setAttribute('disabled', '')
    bancosGeral1[8].setAttribute('disabled', '')
    bancosGeral1[9].setAttribute('disabled', '')
    bancosGeral1[10].setAttribute('disabled', '')
    bancosGeral1[11].setAttribute('disabled', '')
    bancosGeral1[12].setAttribute('disabled', '')
    bancosGeral1[13].setAttribute('disabled', '')
    bancosGeral1[14].setAttribute('disabled', '')
    bancosGeral1[15].setAttribute('disabled', '')
    bancosGeral1[16].setAttribute('disabled', '')
    bancosGeral1[17].setAttribute('disabled', '')
  } else if (idade >= 82 && rogo == false && analfabeto == true) {
    bancosGeral1[1].setAttribute('disabled', '')
    bancosGeral1[2].setAttribute('disabled', '')
    bancosGeral1[3].setAttribute('disabled', '')
    bancosGeral1[4].setAttribute('disabled', '')
    bancosGeral1[5].setAttribute('disabled', '')
    bancosGeral1[6].setAttribute('disabled', '')
    bancosGeral1[7].setAttribute('disabled', '')
    bancosGeral1[8].setAttribute('disabled', '')
    bancosGeral1[9].setAttribute('disabled', '')
    bancosGeral1[10].setAttribute('disabled', '')
    bancosGeral1[11].setAttribute('disabled', '')
    bancosGeral1[12].setAttribute('disabled', '')
    bancosGeral1[13].setAttribute('disabled', '')
    bancosGeral1[14].setAttribute('disabled', '')
    bancosGeral1[15].setAttribute('disabled', '')
    bancosGeral1[16].setAttribute('disabled', '')
    bancosGeral1[17].setAttribute('disabled', '')
  } else if (idade >= 82 && rogo == true && analfabeto == true) {
    bancosGeral1[1].setAttribute('disabled', '')
    bancosGeral1[2].setAttribute('disabled', '')
    bancosGeral1[3].setAttribute('disabled', '')
    bancosGeral1[4].setAttribute('disabled', '')
    bancosGeral1[5].setAttribute('disabled', '')
    bancosGeral1[6].setAttribute('disabled', '')
    bancosGeral1[7].setAttribute('disabled', '')
    bancosGeral1[8].setAttribute('disabled', '')
    bancosGeral1[9].setAttribute('disabled', '')
    bancosGeral1[11].setAttribute('disabled', '')
    bancosGeral1[12].setAttribute('disabled', '')
    bancosGeral1[13].setAttribute('disabled', '')
    bancosGeral1[14].setAttribute('disabled', '')
    bancosGeral1[15].setAttribute('disabled', '')
    bancosGeral1[16].setAttribute('disabled', '')
    bancosGeral1[17].setAttribute('disabled', '')
  } else if(idade == 82){  
    bancosGeral1[1].setAttribute('disabled', '')
    bancosGeral1[2].setAttribute('disabled', '')
    bancosGeral1[3].setAttribute('disabled', '')
    bancosGeral1[4].setAttribute('disabled', '')
    bancosGeral1[5].setAttribute('disabled', '')
    bancosGeral1[6].setAttribute('disabled', '')
    bancosGeral1[7].setAttribute('disabled', '')
    bancosGeral1[8].setAttribute('disabled', '')
    bancosGeral1[9].setAttribute('disabled', '')
    bancosGeral1[11].setAttribute('disabled', '')
    bancosGeral1[12].setAttribute('disabled', '')
    bancosGeral1[13].setAttribute('disabled', '')
    bancosGeral1[14].setAttribute('disabled', '')
    bancosGeral1[15].setAttribute('disabled', '')
    bancosGeral1[16].setAttribute('disabled', '')
    bancosGeral1[17].setAttribute('disabled', '')
  }else if(idade == 75){  
    bancosGeral1[1].setAttribute('disabled', '')
    bancosGeral1[2].setAttribute('disabled', '')
    bancosGeral1[3].setAttribute('disabled', '')
    bancosGeral1[4].setAttribute('disabled', '')
    bancosGeral1[5].setAttribute('disabled', '')
    bancosGeral1[11].setAttribute('disabled', '')
    bancosGeral1[12].setAttribute('disabled', '')
   
    
  } else if (idade >= 80 && rogo == false && analfabeto == true) {
    bancosGeral1[1].setAttribute('disabled', '')
    bancosGeral1[2].setAttribute('disabled', '')
    bancosGeral1[3].setAttribute('disabled', '')
    bancosGeral1[4].setAttribute('disabled', '')
    bancosGeral1[5].setAttribute('disabled', '')
    bancosGeral1[6].setAttribute('disabled', '')
    bancosGeral1[7].setAttribute('disabled', '')
    bancosGeral1[8].setAttribute('disabled', '')
    bancosGeral1[9].setAttribute('disabled', '')
    bancosGeral1[10].setAttribute('disabled', '')
    bancosGeral1[11].setAttribute('disabled', '')
    bancosGeral1[12].setAttribute('disabled', '')
    bancosGeral1[13].setAttribute('disabled', '')
    bancosGeral1[14].setAttribute('disabled', '')
    bancosGeral1[15].setAttribute('disabled', '')
    bancosGeral1[16].setAttribute('disabled', '')
    bancosGeral1[17].setAttribute('disabled', '')
  }else if (idade >= 80 && rogo == true && analfabeto == true) {
    bancosGeral1[1].setAttribute('disabled', '')
    bancosGeral1[2].setAttribute('disabled', '')
    bancosGeral1[3].setAttribute('disabled', '')
    bancosGeral1[4].setAttribute('disabled', '')
    bancosGeral1[5].setAttribute('disabled', '')
    bancosGeral1[6].setAttribute('disabled', '')
    bancosGeral1[7].setAttribute('disabled', '')
    bancosGeral1[8].setAttribute('disabled', '')
    bancosGeral1[11].setAttribute('disabled', '')
    bancosGeral1[12].setAttribute('disabled', '')
    bancosGeral1[13].setAttribute('disabled', '')
    bancosGeral1[14].setAttribute('disabled', '')
    bancosGeral1[15].setAttribute('disabled', '')
  } else if(idade >= 80){
    bancosGeral1[1].setAttribute('disabled', '')
    bancosGeral1[2].setAttribute('disabled', '')
    bancosGeral1[3].setAttribute('disabled', '')
    bancosGeral1[4].setAttribute('disabled', '')
    bancosGeral1[5].setAttribute('disabled', '')
    bancosGeral1[6].setAttribute('disabled', '')
    bancosGeral1[7].setAttribute('disabled', '')
    bancosGeral1[8].setAttribute('disabled', '')
    bancosGeral1[11].setAttribute('disabled', '')
    bancosGeral1[12].setAttribute('disabled', '')
    bancosGeral1[13].setAttribute('disabled', '')
    bancosGeral1[14].setAttribute('disabled', '')
    bancosGeral1[15].setAttribute('disabled', '')
  } else if (idade >= 78 && rogo == false && analfabeto == true) {
    bancosGeral1[1].setAttribute('disabled', '')
    bancosGeral1[2].setAttribute('disabled', '')
    bancosGeral1[3].setAttribute('disabled', '')
    bancosGeral1[4].setAttribute('disabled', '')
    bancosGeral1[5].setAttribute('disabled', '')
    bancosGeral1[6].setAttribute('disabled', '')
    bancosGeral1[7].setAttribute('disabled', '')
    bancosGeral1[8].setAttribute('disabled', '')
    bancosGeral1[9].setAttribute('disabled', '')
    bancosGeral1[10].setAttribute('disabled', '')
    bancosGeral1[11].setAttribute('disabled', '')
    bancosGeral1[12].setAttribute('disabled', '')
    bancosGeral1[13].setAttribute('disabled', '')
    bancosGeral1[14].setAttribute('disabled', '')
    bancosGeral1[15].setAttribute('disabled', '')
    bancosGeral1[16].setAttribute('disabled', '')
    bancosGeral1[17].setAttribute('disabled', '')
  }else if (idade >= 78 && rogo == true && analfabeto == true) {
    bancosGeral1[1].setAttribute('disabled', '')
    bancosGeral1[2].setAttribute('disabled', '')
    bancosGeral1[3].setAttribute('disabled', '')
    bancosGeral1[4].setAttribute('disabled', '')
    bancosGeral1[5].setAttribute('disabled', '')
    bancosGeral1[6].setAttribute('disabled', '')
    bancosGeral1[7].setAttribute('disabled', '')
    bancosGeral1[11].setAttribute('disabled', '')
    bancosGeral1[12].setAttribute('disabled', '')
    bancosGeral1[13].setAttribute('disabled', '')
  } else if( idade >= 78){
    bancosGeral1[1].setAttribute('disabled', '')
    bancosGeral1[2].setAttribute('disabled', '')
    bancosGeral1[3].setAttribute('disabled', '')
    bancosGeral1[4].setAttribute('disabled', '')
    bancosGeral1[5].setAttribute('disabled', '')
    bancosGeral1[6].setAttribute('disabled', '')
    bancosGeral1[7].setAttribute('disabled', '')
    bancosGeral1[11].setAttribute('disabled', '')
    bancosGeral1[12].setAttribute('disabled', '')
    bancosGeral1[13].setAttribute('disabled', '')
  } else if (idade >= 77 && rogo == false && analfabeto == true) {
    bancosGeral1[1].setAttribute('disabled', '')
    bancosGeral1[2].setAttribute('disabled', '')
    bancosGeral1[3].setAttribute('disabled', '')
    bancosGeral1[4].setAttribute('disabled', '')
    bancosGeral1[5].setAttribute('disabled', '')
    bancosGeral1[6].setAttribute('disabled', '')
    bancosGeral1[7].setAttribute('disabled', '')
    bancosGeral1[8].setAttribute('disabled', '')
    bancosGeral1[9].setAttribute('disabled', '')
    bancosGeral1[10].setAttribute('disabled', '')
    bancosGeral1[11].setAttribute('disabled', '')
    bancosGeral1[12].setAttribute('disabled', '')
    bancosGeral1[13].setAttribute('disabled', '')
    bancosGeral1[14].setAttribute('disabled', '')
    bancosGeral1[15].setAttribute('disabled', '')
    bancosGeral1[16].setAttribute('disabled', '')
    bancosGeral1[17].setAttribute('disabled', '')
  } else if (idade >= 77 && rogo == true && analfabeto == true) {
    bancosGeral1[1].setAttribute('disabled', '')
    bancosGeral1[2].setAttribute('disabled', '')
    bancosGeral1[3].setAttribute('disabled', '')
    bancosGeral1[4].setAttribute('disabled', '')
    bancosGeral1[5].setAttribute('disabled', '')
    bancosGeral1[6].setAttribute('disabled', '')
    bancosGeral1[11].setAttribute('disabled', '')
    bancosGeral1[12].setAttribute('disabled', '')
    bancosGeral1[13].setAttribute('disabled', '')
  } else if(idade >= 77){
    bancosGeral1[1].setAttribute('disabled', '')
    bancosGeral1[2].setAttribute('disabled', '')
    bancosGeral1[3].setAttribute('disabled', '')
    bancosGeral1[4].setAttribute('disabled', '')
    bancosGeral1[5].setAttribute('disabled', '')
    bancosGeral1[6].setAttribute('disabled', '')
    bancosGeral1[11].setAttribute('disabled', '')
    bancosGeral1[12].setAttribute('disabled', '')
    bancosGeral1[13].setAttribute('disabled', '')
  } else if (idade >= 76 && rogo == false && analfabeto == true) {
    bancosGeral1[1].setAttribute('disabled', '')
    bancosGeral1[2].setAttribute('disabled', '')
    bancosGeral1[3].setAttribute('disabled', '')
    bancosGeral1[4].setAttribute('disabled', '')
    bancosGeral1[5].setAttribute('disabled', '')
    bancosGeral1[6].setAttribute('disabled', '')
    bancosGeral1[7].setAttribute('disabled', '')
    bancosGeral1[8].setAttribute('disabled', '')
    bancosGeral1[9].setAttribute('disabled', '')
    bancosGeral1[10].setAttribute('disabled', '')
    bancosGeral1[11].setAttribute('disabled', '')
    bancosGeral1[12].setAttribute('disabled', '')
    bancosGeral1[13].setAttribute('disabled', '')
    bancosGeral1[14].setAttribute('disabled', '')
    bancosGeral1[15].setAttribute('disabled', '')
    bancosGeral1[16].setAttribute('disabled', '')
    bancosGeral1[17].setAttribute('disabled', '')
  }else if (idade >= 76 && rogo == true && analfabeto == true) {
    bancosGeral1[1].setAttribute('disabled', '')
    bancosGeral1[2].setAttribute('disabled', '')
    bancosGeral1[3].setAttribute('disabled', '')
    bancosGeral1[4].setAttribute('disabled', '')
    bancosGeral1[5].setAttribute('disabled', '')
    bancosGeral1[11].setAttribute('disabled', '')
    bancosGeral1[12].setAttribute('disabled', '')
  } else if (idade >= 76 ) {
    bancosGeral1[1].setAttribute('disabled', '')
    bancosGeral1[2].setAttribute('disabled', '')
    bancosGeral1[3].setAttribute('disabled', '')
    bancosGeral1[4].setAttribute('disabled', '')
    bancosGeral1[5].setAttribute('disabled', '')
    bancosGeral1[11].setAttribute('disabled', '')
    bancosGeral1[12].setAttribute('disabled', '')
  } else if (idade <=21 && Representante == true){
    bancosGeral1[1].setAttribute('disabled', '')
    bancosGeral1[2].setAttribute('disabled', '')
    bancosGeral1[3].setAttribute('disabled', '')
    bancosGeral1[4].setAttribute('disabled', '')
    bancosGeral1[5].setAttribute('disabled', '')
    bancosGeral1[6].setAttribute('disabled', '')
    bancosGeral1[7].setAttribute('disabled', '')
    bancosGeral1[8].setAttribute('disabled', '')
    bancosGeral1[9].setAttribute('disabled', '')
    bancosGeral1[10].setAttribute('disabled', '')
    bancosGeral1[11].setAttribute('disabled', '')
    bancosGeral1[12].setAttribute('disabled', '')
    bancosGeral1[13].setAttribute('disabled', '')
    bancosGeral1[14].setAttribute('disabled', '')
    bancosGeral1[15].setAttribute('disabled', '')
    bancosGeral1[16].setAttribute('disabled', '')
    bancosGeral1[17].setAttribute('disabled', '')
  } else if (Representante == true) {
    bancosGeral1[1].setAttribute('disabled', '')
    bancosGeral1[2].setAttribute('disabled', '')
    bancosGeral1[3].setAttribute('disabled', '')
    bancosGeral1[5].setAttribute('disabled', '')
    bancosGeral1[6].setAttribute('disabled', '')
    bancosGeral1[7].setAttribute('disabled', '')
    bancosGeral1[8].setAttribute('disabled', '')
    bancosGeral1[9].setAttribute('disabled', '')
    bancosGeral1[10].setAttribute('disabled', '')
    bancosGeral1[11].setAttribute('disabled', '')
    bancosGeral1[12].setAttribute('disabled', '')
    bancosGeral1[13].setAttribute('disabled', '')
    bancosGeral1[14].setAttribute('disabled', '')
    bancosGeral1[15].setAttribute('disabled', '')
    bancosGeral1[16].setAttribute('disabled', '')
    bancosGeral1[17].setAttribute('disabled', '')
  } else if (analfabeto == true && rogo == false ) {
    bancosGeral1[3].setAttribute('disabled', '')
    bancosGeral1[4].setAttribute('disabled', '')
    bancosGeral1[5].setAttribute('disabled', '')
    bancosGeral1[6].setAttribute('disabled', '')
    bancosGeral1[7].setAttribute('disabled', '')
    bancosGeral1[8].setAttribute('disabled', '')
    bancosGeral1[9].setAttribute('disabled', '')
    bancosGeral1[10].setAttribute('disabled', '')
    bancosGeral1[11].setAttribute('disabled', '')
    bancosGeral1[12].setAttribute('disabled', '')
    bancosGeral1[13].setAttribute('disabled', '')
    bancosGeral1[14].setAttribute('disabled', '')
    bancosGeral1[15].setAttribute('disabled', '')
    bancosGeral1[16].setAttribute('disabled', '')
    bancosGeral1[17].setAttribute('disabled', '')
  } 
})


const btn2 = document.querySelector('#send2')
btn2.addEventListener('click', function (e) {
  e.preventDefault()

  const margem = document.querySelector('#margem').value
  const bancos1 = document.querySelector('#bancos1').value
  const bancosGeral1 = document.querySelector('#bancos1')

  var CoeficienteBanrisul = 0.02497
  var ResultadoBanrisul = margem / CoeficienteBanrisul
  var ResultadoBanrisuldoFormatado = Intl.NumberFormat('pt-BR', {
    maximumSignificantDigits: 7
  }).format(ResultadoBanrisul)

  var CoeficienteOle = 0.02491
  var ResultadoOle = margem / CoeficienteOle
  var ResultadoOleFormatado = Intl.NumberFormat('pt-BR', {
    maximumSignificantDigits: 7
  }).format(ResultadoOle)

  var CoeficienteC6 = 0.02489
  var ResultadoC6 = margem / CoeficienteC6
  var ResultadoC6Formatado = Intl.NumberFormat('pt-BR', {
    maximumSignificantDigits: 7
  }).format(ResultadoC6)


  var CoeficientePan = 0.02490
  var ResultadoPan = margem / CoeficientePan
  var ResultadoPanFormatado = Intl.NumberFormat('pt-BR', {
    maximumSignificantDigits: 7
  }).format(ResultadoPan)

  var CoeficienteItau84 = 0.02479
  var ResultadoItau84 = margem / CoeficienteItau84
  var Resultadotau84formatado = Intl.NumberFormat('pt-BR', {
    maximumSignificantDigits: 7
  }).format(ResultadoItau84)

  var CoeficienteItau72 = 0.02654
  var ResultadoItau72 = margem / CoeficienteItau72
  var ResultadoItau72formatado = Intl.NumberFormat('pt-BR', {
    maximumSignificantDigits: 7
  }).format(ResultadoItau72)

  var CoeficienteItau60 = 0.02914
  var ResultadoItau60 = margem / CoeficienteItau60
  var ResultadoItau60formatado = Intl.NumberFormat('pt-BR', {
    maximumSignificantDigits: 7
  }).format(ResultadoItau60)

  var CoeficienteItau48 = 0.03317
  var ResultadoItau48 = margem / CoeficienteItau48
  var ResultadoItau48formatado = Intl.NumberFormat('pt-BR', {
    maximumSignificantDigits: 7
  }).format(ResultadoItau48)


  var CoeficienteCrefisa84 = 0.02469
  var ResultadoCrefisa84 = margem / CoeficienteCrefisa84
  var ResultadoCrefisa84formatado = Intl.NumberFormat('pt-BR', {
    maximumSignificantDigits: 7
  }).format(ResultadoCrefisa84)

  var CoeficienteCrefisa72 = 0.02647
  var ResultadoCrefisa72 = margem / CoeficienteCrefisa72
  var ResultadoCrefisa72formatado = Intl.NumberFormat('pt-BR', {
    maximumSignificantDigits: 7
  }).format(ResultadoCrefisa72)


  var CoeficienteCrefisa60 = 0.02908
  var ResultadoCrefisa60 = margem / CoeficienteCrefisa60
  var ResultadoCrefisa60formatado = Intl.NumberFormat('pt-BR', {
    maximumSignificantDigits: 7
  }).format(ResultadoCrefisa60)

  var CoeficienteCrefisa48 = 0.03315
  var ResultadoCrefisa48 = margem / CoeficienteCrefisa48
  var ResultadoCrefisa48formatado = Intl.NumberFormat('pt-BR', {
    maximumSignificantDigits: 7
  }).format(ResultadoCrefisa48)

  var CoeficienteCrefisa36 = 0.04014
  var ResultadoCrefisa36 = margem / CoeficienteCrefisa36
  var ResultadoCrefisa36formatado = Intl.NumberFormat('pt-BR', {
    maximumSignificantDigits: 7
  }).format(ResultadoCrefisa36)

  var CoeficienteCrefisa12 = 0.09760
  var ResultadoCrefisa12 = margem / CoeficienteCrefisa12
  var ResultadoCrefisa12formatado = Intl.NumberFormat('pt-BR', {
    maximumSignificantDigits: 7
  }).format(ResultadoCrefisa12)


  if (bancos1 == 'Banrisul') {
    resultado.innerHTML = 'Margem de ' + margem + ' Que Libera, aproximadamente: ' + ResultadoBanrisuldoFormatado + ' Em 84x';
} else if (bancos1 == 'Ole') {
    resultado.innerHTML = 'Margem de ' + margem + ' Que Libera, aproximadamente: ' + ResultadoOleFormatado + ' Em 84x';
} else if (bancos1 == 'C6') {
    resultado.innerHTML = 'Margem de ' + margem + ' Que Libera, aproximadamente: ' + ResultadoC6Formatado + ' Em 84x';
} else if (bancos1 == 'Pan') {
    resultado.innerHTML = 'Margem de ' + margem + ' Que Libera, aproximadamente: ' + ResultadoPanFormatado + ' Em 84x';
} else if (bancos1 == 'Crefisa84') {
  if(ResultadoCrefisa84 >= 500){
    resultado.innerHTML = 'Margem de ' + margem + ' Que Libera, aproximadamente: ' + ResultadoCrefisa84formatado + ' Em 84x';}
} else if (bancos1 == 'Crefisa72' ) {
  if(ResultadoCrefisa72 >= 500){
    resultado.innerHTML = 'Margem de ' + margem + ' Que Libera, aproximadamente: ' + ResultadoCrefisa72formatado + ' Em 72x';}
} else if (bancos1 == 'Crefisa60') {
  if(ResultadoCrefisa72 >= 500){
    resultado.innerHTML = 'Margem de ' + margem + ' Que Libera, aproximadamente: ' + ResultadoCrefisa60formatado + ' Em 60x';}
} else if (bancos1 == 'Crefisa48') {
  if(ResultadoCrefisa72 >= 500){
    resultado.innerHTML = 'Margem de ' + margem + ' Que Libera, aproximadamente: ' + ResultadoCrefisa48formatado + ' Em 48x';}
} else if (bancos1 == 'Crefisa36') {
  if(ResultadoCrefisa36 >= 500){
    resultado.innerHTML = 'Margem de ' + margem + ' Que Libera, aproximadamente: ' + ResultadoCrefisa36formatado + ' Em 36x';}
} else if (bancos1 == 'Crefisa12') {
  if(ResultadoCrefisa12 >= 500){
    resultado.innerHTML = 'Margem de ' + margem + ' Que Libera, aproximadamente: ' + ResultadoCrefisa12formatado + ' Em 12x';}
} else if (bancos1 == 'Itau84') {
    resultado.innerHTML = 'Margem de ' + margem + ' Que Libera, aproximadamente: ' + Resultadotau84formatado + ' Em 84x';
} else if (bancos1 == 'Itau72') {
    resultado.innerHTML = 'Margem de ' + margem + ' Que Libera, aproximadamente: ' + ResultadoItau72formatado + ' Em 72x';
} else if (bancos1 == 'Itau60') {
    resultado.innerHTML = 'Margem de ' + margem + ' Que Libera, aproximadamente: ' + ResultadoItau60formatado + ' Em 60x';
} else if (bancos1 == 'Itau48') {
    resultado.innerHTML = 'Margem de ' + margem + ' Que Libera, aproximadamente: ' + ResultadoItau48formatado + ' Em 48x';
} else if (bancos1 == 'Itau36') {
    resultado.innerHTML = 'Margem de ' + margem + ' Que Libera, aproximadamente: ' + ResultadoItau36formatado + ' Em 36x';
} else {
    resultado.innerHTML = 'Banco não encontrado.';
}

  
})
