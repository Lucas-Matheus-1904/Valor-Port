const bnt3 = document.querySelector('#send3')
bnt3.addEventListener('click', function (e) {
  e.preventDefault()
  const idade1 = document.querySelector('#idade')
  const especie1 = document.querySelector('#especie')
  const tempoBeneficio1 = document.querySelector('#tempoDoBeneficio')
  const value5 = [idade1.value, especie1.value, tempoBeneficio1.value]
  const bancosGeral1 = document.querySelector('#bancos1')
  const bancosGeral2 = document.querySelector('#bancos2')
  const bancosGeral3 = document.querySelector('#bancos3')
  const bancosGeral4 = document.querySelector('#bancos4')
  const bancosGeral5 = document.querySelector('#bancos5')
  if(value5[0]>= 76){
    bancosGeral1.setAttribute('disabled', '')
    bancosGeral2.setAttribute('disabled', '')
    bancosGeral3.setAttribute('disabled', '')
    bancosGeral4.setAttribute('disabled', '')
    bancosGeral5.setAttribute('disabled', '')
  } else if (value5[1] == 32 || value5[1] == 92 || value5[1] == 11) {
    if (value5[0] <= 54 && value5[2] <= 14) {
      bancosGeral1.setAttribute('disabled', '')
      bancosGeral2.setAttribute('disabled', '')
      bancosGeral3.setAttribute('disabled', '')
      bancosGeral4.setAttribute('disabled', '')
      bancosGeral5.setAttribute('disabled', '')
    } else if (value5[0] <= 59) {
      bancosGeral1[1].setAttribute('disabled', '')
      bancosGeral2[1].setAttribute('disabled', '')
      bancosGeral3[1].setAttribute('disabled', '')
      bancosGeral4[1].setAttribute('disabled', '')
      bancosGeral5[1].setAttribute('disabled', '')
    }
  }

  const btn2 = document.querySelector('#send2')
  var container3 = document.querySelector('.container3')
  btn2.addEventListener('click', function () {
    if (container3.style.display === 'none') {
      container3.style.display = 'block'
    } else {
      container3.style.display = 'none'
    }
  })

  const btn = document.querySelector('#send')

  var container3 = document.querySelector('.container3 ')
  btn.addEventListener('click', function () {
    if (container3.style.display === 'block') {
      container3.style.display = 'none'
    } else {
      container3.style.display = 'block'
    }
  })

  btn.addEventListener('click', function (e) {
    e.preventDefault()
    const parcela1 = document.querySelector('#parcela1')
    const prazoRestante1 = document.querySelector('#prazoRestante1')
    const taxa1 = document.querySelector('#taxa1')
    const bancos1 = document.querySelector('#bancos1')
    const value1 = [
      parcela1.value,
      prazoRestante1.value,
      taxa1.value,
      bancos1.value
    ]

    var prazoNegativo = value1[1] * -1
    var taxaPorcento = value1[2] / 100
    var saldodDvedor1 =
      (value1[0] * (1 - (1 + taxaPorcento) ** prazoNegativo)) / taxaPorcento
    var saldoFormatado1 = Intl.NumberFormat('pt-BR', {
      maximumSignificantDigits: 6
    }).format(saldodDvedor1)

    if (value1[3] == 'BRB') {
      const rates = [0.02343, 0.02270];
      const ratesPercentage = ['1,79%', '1,69%'];
      const cnt4 = document.getElementById('cnt4');
      let output = '';
    
      for (let i = 0; i < rates.length; i++) {
        const BRBValor = value1[0] / rates[i] - saldodDvedor1;
        const formattedParcela = Intl.NumberFormat('pt-BR', {
          maximumSignificantDigits: 6
        }).format(BRBValor);
    
        if (BRBValor >= 50) {
          output += `Portabilidade BRB Parcela de: ${value1[0]} Que libera aproximadamente ${formattedParcela} Em 84x. Taxa de ${ratesPercentage[i]} <br>`;
        }
      }
      cnt4.innerHTML = output;
    } else if (value1[3] == 'Daycoval') {
      const rates = [0.02444, 0.02405, 0.02366, 0.02343, 0.02319];
      const ratesPercentage = ['1.83%', '1.78%', '1.73%', '1.70%', '1.67%'];
      const cnt4 = document.getElementById('cnt4');
      let output = '';
    
      for (let i = 0; i < rates.length; i++) {
        const daycovalValor = value1[0] / rates[i] - saldodDvedor1;
        const formattedParcela = Intl.NumberFormat('pt-BR', {
          maximumSignificantDigits: 6
        }).format(daycovalValor);
    
        if (daycovalValor >= 100) {
          output += `Portabilidade ${value1[3]} Parcela de: ${value1[0]} Que libera aproximadamente ${formattedParcela} Em 84x. na taxa de: ${ratesPercentage[i]} <br>`;
        }
      }
    
      cnt4.innerHTML = output;
    } else if (value1[3] == 'C6') {
      const rates = [0.02402, 0.02394, 0.02365, 0.02325, 0.02290];
      const ratesPercentage = ['1,84 a 1,80', '1,79 a 1,74%', '1,74 a 1,70%', '1.69 a 1.65%', '1.64 a 1.60%'];
      const cnt4 = document.getElementById('cnt4');
      let output = '';
    
      for (let i = 0; i < rates.length; i++) {
        const C6Valor = value1[0] / rates[i] - saldodDvedor1;
        const formattedParcela = Intl.NumberFormat('pt-BR', {
          maximumSignificantDigits: 6
        }).format(C6Valor);
    
        if (C6Valor >= 200.00) {
          output += `Portabilidade ${value1[3]} Parcela de: ${value1[0]} Que libera aproximadamente ${formattedParcela} Em 84x. Tabela: na taxa de: ${ratesPercentage[i]} <br>`;
        }
      }
    
      cnt4.innerHTML = output;
    
    } else if (value1[3] == 'Crefisa') {
      const rates = [0.02455, 0.02372, 0.02349, 0.02334, 0.02297, 0.02283];
      const ratesPercentage = ['1.91%', '1.80%', '1.77%', '1.75%', '1.70%', '1.68%'];
      const cnt4 = document.getElementById('cnt4');
      let output = '';
    
      for (let i = 0; i < rates.length; i++) {
        const CrefisaValor = value1[0] / rates[i] - saldodDvedor1;
        const formattedParcela = Intl.NumberFormat('pt-BR', {
          maximumSignificantDigits: 6
        }).format(CrefisaValor);
    
        if (CrefisaValor >= 250.00) {
          output += `Portabilidade ${value1[3]} Parcela de: ${value1[0]} Que libera aproximadamente ${formattedParcela} Em 84x. Tabela: na taxa de: ${ratesPercentage[i]} <br>`;
        }
      }
    
      cnt4.innerHTML = output;
    
    }


    const parcela2 = document.querySelector('#parcela2')
    const prazoRestante2 = document.querySelector('#prazoRestante2')
    const taxa2 = document.querySelector('#taxa2')
    const bancos2 = document.querySelector('#bancos2')
    const value2 = [
      parcela2.value,
      prazoRestante2.value,
      taxa2.value,
      bancos2.value
    ]
    var prazoNegativo2 = value2[1] * -1
    var taxaPorcento2 = value2[2] / 100
    var saldodDvedor2 =
      (value2[0] * (1 - (1 + taxaPorcento2) ** prazoNegativo2)) / taxaPorcento2
    var saldoFormatado2 = Intl.NumberFormat('pt-BR', {
      maximumSignificantDigits: 5
    }).format(saldodDvedor2)


    
    if (value2[3] == 'BRB2') {
      const rates = [0.02343, 0.02270];
      const ratesPercentage = ['1,79', '1,69'];
      const cnt5 = document.getElementById('cnt5');
      let output = '';
    
      for (let i = 0; i < rates.length; i++) {
        const BRBValor = value2[0] / rates[i] - saldodDvedor2;
        const formattedParcela = Intl.NumberFormat('pt-BR', {
          maximumSignificantDigits: 6
        }).format(BRBValor);
    
        if (BRBValor >= 50) {
          output += `Portabilidade BRB Parcela de: ${value2[0]} Que libera aproximadamente ${formattedParcela} Em 84x. Taxa de ${ratesPercentage[i]}% na tabela: ${String.fromCharCode(82 + i)} <br>`;
        }
      }
      cnt5.innerHTML = output;
    } else if (value2[3] == 'Daycoval2') {
      const rates = [0.02444, 0.02405, 0.02366, 0.02343, 0.02319];
      const ratesPercentage = ['1.83%', '1.78%', '1.73%', '1.70%', '1.67%'];
      const cnt5 = document.getElementById('cnt5');
      let output = '';
    
      for (let i = 0; i < rates.length; i++) {
        const daycovalValor = value2[0] / rates[i] - saldodDvedor2;
        const formattedParcela = Intl.NumberFormat('pt-BR', {
          maximumSignificantDigits: 6
        }).format(daycovalValor);
    
        if (daycovalValor >= 100) {
          output += `Portabilidade Daycoval Parcela de: ${value2[0]} Que libera aproximadamente ${formattedParcela} Em 84x. Taxa de ${ratesPercentage[i]} <br>`;
        }
      }
      cnt5.innerHTML = output;
    
    } else if (value2[3] == 'C62') {
      const rates = [0.02402, 0.02394, 0.02365, 0.02325, 0.02290];
      const ratesPercentage = ['1,84 a 1,80', '1,79 a 1,74%', '1,74 a 1,70%', '1.74 a 1.70%', '1.69 a 1.65%', '1.64 a 1.60%'];
      const cnt5 = document.getElementById('cnt5');
      let output = '';
    
      for (let i = 0; i < rates.length; i++) {
        const C6Valor = value2[0] / rates[i] - saldodDvedor2;
        const formattedParcela = Intl.NumberFormat('pt-BR', {
          maximumSignificantDigits: 6
        }).format(C6Valor);
    
        if (C6Valor >= 200) {
          output += `Portabilidade ${value2[3]} Parcela de: ${value2[0]} Que libera aproximadamente ${formattedParcela} Em 84x. Tabela: na taxa de ${ratesPercentage[i]} <br>`;
        }
      }
    
      cnt5.innerHTML = output;
    
    
    } else if (value1[3] == 'Crefisa2') {
      const rates = [0.02455, 0.02372, 0.02349, 0.02334, 0.02297, 0.02283];
      const ratesPercentage = ['1.91%', '1.80%', '1.77%', '1.75%', '1.70%', '1.68%'];
      const cnt5 = document.getElementById('cnt4');
      let output = '';
    
      for (let i = 0; i < rates.length; i++) {
        const CrefisaValor = value2[0] / rates[i] - saldodDvedor2;
        const formattedParcela = Intl.NumberFormat('pt-BR', {
          maximumSignificantDigits: 6
        }).format(CrefisaValor);

        if (CrefisaValor >= 250.00) {
          output += `Portabilidade ${value1[3]} Parcela de: ${value1[0]} Que libera aproximadamente ${formattedParcela} Em 84x. Tabela: na taxa de: ${ratesPercentage[i]} <br>`;
        }
      }
    
      cnt5.innerHTML = output;
    
    }

    const parcela3 = document.querySelector('#parcela3')
    const prazoRestante3 = document.querySelector('#prazoRestante3')
    const taxa3 = document.querySelector('#taxa3')
    const bancos3 = document.querySelector('#bancos3')
    const value3 = [
      parcela3.value,
      prazoRestante3.value,
      taxa3.value,
      bancos3.value
    ]
    var prazoNegativo = value3[1] * -1
    var taxaPorcento = value3[2] / 100
    var saldodDvedor3 =
      (value3[0] * (1 - (1 + taxaPorcento) ** prazoNegativo)) / taxaPorcento
    var saldoFormatado3 = Intl.NumberFormat('pt-BR', {
      maximumSignificantDigits: 5
    }).format(saldodDvedor3)

    if (value3[3] == 'BRB3') {
      const rates = [0.02343, 0.02270];
      const ratesPercentage = ['1,79%', '1,69%'];
      const cnt6 = document.getElementById('cnt6');
      let output = '';
    
      for (let i = 0; i < rates.length; i++) {
        const BRBValor = value3[0] / rates[i] - saldodDvedor3;
        const formattedParcela = Intl.NumberFormat('pt-BR', {
          maximumSignificantDigits: 6
        }).format(BRBValor);
    
        if (BRBValor >= 50) {
          output += `Portabilidade BRB Parcela de: ${value2[0]} Que libera aproximadamente ${formattedParcela} Em 84x. Taxa de ${ratesPercentage[i]}% na tabela: ${String.fromCharCode(82 + i)} <br>`;
        }
      }
    
      cnt6.innerHTML = output;
    }
    else if (value3[3] == 'Daycoval3') {
      const rates = [0.02444, 0.02405, 0.02366, 0.02343, 0.02319];
      const ratesPercentage = ['1.83%', '1.78%', '1.73%', '1.70%', '1.67%'];
      const cnt6 = document.getElementById('cnt6');
      let output = '';
    
      for (let i = 0; i < rates.length; i++) {
        const daycovalValor = value3[0] / rates[i] - saldodDvedor3;
        const formattedParcela = Intl.NumberFormat('pt-BR', {
          maximumSignificantDigits: 6
        }).format(daycovalValor);
    
        if (daycovalValor >= 100) {
          output += `<br> Portabilidade Daycoval Parcela de: ${value3[0]} Que libera aproximadamente ${formattedParcela} Em 84x. Tabela ${ratesPercentage[i]}`;
        }
      }
    
      cnt6.innerHTML = output;
    } else if (value3[3] == 'C63') {
      const rates = [0.02402, 0.02394, 0.02365, 0.02325, 0.02290];
      const ratesPercentage = ['1,84 a 1,80', '1,79 a 1,74%', '1,74 a 1,70%', '1.69 a 1.65%', '1.64 a 1.60%'];
      const cnt6 = document.getElementById('cnt6');
      let output = '';
    
      for (let i = 0; i < rates.length; i++) {
        const C6Valor = value3[0] / rates[i] - saldodDvedor3;
        const formattedParcela = Intl.NumberFormat('pt-BR', {
          maximumSignificantDigits: 6
        }).format(C6Valor);
    
        if (C6Valor >= 200) {
          output += `<br> Portabilidade ${value3[3]} Parcela de: ${value3[0]} Que libera aproximadamente ${formattedParcela} Em 84x. Tabela: na taxa de: ${ratesPercentage[i]}`;
        }
      }
    
      cnt6.innerHTML = output;
    
    
      } else if (value3[3] == 'Crefisa3') {
        const rates = [0.02455, 0.02372, 0.02349, 0.02334, 0.02297, 0.02283];
        const ratesPercentage = ['1.91%', '1.80%', '1.77%', '1.75%', '1.70%', '1.68%'];
        const cnt6 = document.getElementById('cnt4');
        let output = '';
      
        for (let i = 0; i < rates.length; i++) {
          const CrefisaValor = value3[0] / rates[i] - saldodDvedor3;
          const formattedParcela = Intl.NumberFormat('pt-BR', {
            maximumSignificantDigits: 6
          }).format(CrefisaValor);
  
          if (CrefisaValor >= 250.00) {
            output += `<br> Portabilidade ${value3[3]} Parcela de: ${value3[0]} Que libera aproximadamente ${formattedParcela} Em 84x. Tabela: na taxa de: ${ratesPercentage[i]}`;
          }
        }
      
        cnt6.innerHTML = output;
      
      }
    
    const parcela4 = document.querySelector('#parcela4')
    const prazoRestante4 = document.querySelector('#prazoRestante4')
    const taxa4 = document.querySelector('#taxa4')
    const bancos4 = document.querySelector('#bancos4')
    const value4 = [
      parcela4.value,
      prazoRestante4.value,
      taxa4.value,
      bancos4.value
    ]
    var prazoNegativo = value4[1] * -1
    var taxaPorcento = value4[2] / 100
    var saldodDvedor4 =
      (value4[0] * (1 - (1 + taxaPorcento) ** prazoNegativo)) / taxaPorcento
    var saldoFormatado4 = Intl.NumberFormat('pt-BR', {
      maximumSignificantDigits: 5
    }).format(saldodDvedor4)

    if (value2[3] == 'BRB4') {
      const rates = [0.02343, 0.02270];
      const ratesPercentage = ['1,79', '1,69'];
      const cnt7 = document.getElementById('cnt7');
      let output = '';
    
      for (let i = 0; i < rates.length; i++) {
        const BRBValor = value4[0] / rates[i] - saldodDvedor4;
        const formattedParcela = Intl.NumberFormat('pt-BR', {
          maximumSignificantDigits: 6
        }).format(BRBValor);
    
        if (BRBValor >= 50) {
          output += `Portabilidade BRB Parcela de: ${value2[0]} Que libera aproximadamente ${formattedParcela} Em 84x. Taxa de ${ratesPercentage[i]}% na tabela: ${String.fromCharCode(82 + i)} <br>`;
        }
      }
      cnt7.innerHTML = output;
    } else if (value4[3] == 'Daycoval4') {
      const rates = [0.02444, 0.02405, 0.02366, 0.02343, 0.02319];
      const ratesPercentage = ['1.83%', '1.78%', '1.73%', '1.70%', '1.67%'];
      const cnt7 = document.getElementById('cnt7');
      let output = '';
    
      for (let i = 0; i < rates.length; i++) {
        const daycovalValor = value4[0] / rates[i] - saldodDvedor4;
        const formattedParcela = Intl.NumberFormat('pt-BR', {
          maximumSignificantDigits: 6
        }).format(daycovalValor);
    
        if (daycovalValor >= 100) {
          output += `<br> Portabilidade Daycoval Parcela de: ${value4[0]} Que libera aproximadamente ${formattedParcela} Em 84x. Tabela ${ratesPercentage[i]}`;
        }
      }
    
      cnt7.innerHTML = output;
    }
     else if (value4[3] == 'C64') {
      const rates = [0.02402, 0.02394, 0.02365, 0.02325, 0.02290];
      const ratesPercentage = ['1,84 a 1,80', '1,79 a 1,74%', '1,74 a 1,70%', '1.69 a 1.65%', '1.64 a 1.60%'];
      const cnt7 = document.getElementById('cnt7');
      let output = '';
    
      for (let i = 0; i < rates.length; i++) {
        const C6Valor = value4[0] / rates[i] - saldodDvedor4;
        const formattedParcela = Intl.NumberFormat('pt-BR', {
          maximumSignificantDigits: 6
        }).format(C6Valor);
    
        if (C6Valor >= 200) {
          output += `<br> Portabilidade ${value4[3]} Parcela de: ${value4[0]} Que libera aproximadamente ${formattedParcela} Em 84x. Tabela:  na taxa de: ${ratesPercentage[i]}`;
        }
      }
    
      cnt7.innerHTML = output;
    }
    else if (value4[3] == 'Crefisa4') {
      const rates = [0.02455, 0.02372, 0.02349, 0.02334, 0.02297, 0.02283];
      const ratesPercentage = ['1.91%', '1.80%', '1.77%', '1.75%', '1.70%', '1.68%'];
      const cnt7 = document.getElementById('cnt4');
      let output = '';
    
      for (let i = 0; i < rates.length; i++) {
        const CrefisaValor = value4[0] / rates[i] - saldodDvedor4;
        const formattedParcela = Intl.NumberFormat('pt-BR', {
          maximumSignificantDigits: 6
        }).format(CrefisaValor);

        if (CrefisaValor >= 250.00) {
          output += `<br> Portabilidade ${value4[3]} Parcela de: ${value4[0]} Que libera aproximadamente ${formattedParcela} Em 84x. Tabela:  na taxa de: ${ratesPercentage[i]}`;
        }
      }
    
      cnt7.innerHTML = output;
    
    }
    
    const parcela5 = document.querySelector('#parcela5')
    const prazoRestante5 = document.querySelector('#prazoRestante5')
    const taxa5 = document.querySelector('#taxa5')
    const bancos5 = document.querySelector('#bancos5')
    const value5 = [
      parcela5.value,
      prazoRestante5.value,
      taxa5.value,
      bancos5.value
    ]
    var prazoNegativo = value5[1] * -1
    var taxaPorcento = value5[2] / 100
    var saldodDvedor5 =
      (value5[0] * (1 - (1 + taxaPorcento) ** prazoNegativo)) / taxaPorcento
    var saldoFormatado5 = Intl.NumberFormat('pt-BR', {
      maximumSignificantDigits: 5
    }).format(saldodDvedor5)



    if (value5[3] == 'BRB5') {
      const rates = [0.02343, 0.02270];
      const ratesPercentage = ['1,79', '1,69'];
      const cnt8 = document.getElementById('cnt8');
      let output = '';
    
      for (let i = 0; i < rates.length; i++) {
        const BRBValor = value5[0] / rates[i] - saldodDvedor5;
        const formattedParcela = Intl.NumberFormat('pt-BR', {
          maximumSignificantDigits: 6
        }).format(BRBValor);
    
        if (BRBValor >= 50) {
          output += `<br> Portabilidade BRB ${value5[3]} Parcela de: ${value5[0]} Que libera aproximadamente ${formattedParcela} Em 84x. Tabela ${ratesPercentage[i]}%`;
        }
      }
    
      cnt8.innerHTML = output;
    
    
    } else if (value5[3] == 'Daycoval5') {
      const rates = [0.02444, 0.02405, 0.02366, 0.02343, 0.02319];
      const ratesPercentage = ['1.83%', '1.78%', '1.73%', '1.70%', '1.67%'];
      const cnt8 = document.getElementById('cnt8');
      let output = '';
    
      for (let i = 0; i < rates.length; i++) {
        const daycovalValor = value5[0] / rates[i] - saldodDvedor5;
        const formattedParcela = Intl.NumberFormat('pt-BR', {
          maximumSignificantDigits: 6
        }).format(daycovalValor);
    
        if (daycovalValor >= 100) {
          output += `<br> Portabilidade Daycoval Parcela de: ${value5[0]} Que libera aproximadamente ${formattedParcela} Em 84x. Tabela ${ratesPercentage[i]}%`;
        }
      }
    
      cnt8.innerHTML = output;
    
    } else if (value5[3] == 'C65') {
      const rates = [0.02402, 0.02394, 0.02365, 0.02325, 0.02290];
      const ratesPercentage = ['1,84 a 1,80', '1,79 a 1,74%', '1,74 a 1,70%', '1.69 a 1.65%', '1.64 a 1.60%'];
      const cnt8 = document.getElementById('cnt8');
      let output = '';
    
      for (let i = 0; i < rates.length; i++) {
        const C6Valor = value5[0] / rates[i] - saldodDvedor5;
        const formattedParcela = Intl.NumberFormat('pt-BR', {
          maximumSignificantDigits: 6
        }).format(C6Valor);
    
        if (C6Valor >= 50) {
          output += `<br> Portabilidade ${value5[3]} Parcela de: ${value5[0]} Que libera aproximadamente ${formattedParcela} Em 84x. Tabela: na taxa de: ${ratesPercentage[i]}`;
        }
      }
    
      cnt8.innerHTML = output;
  
    
      } else if (value5[3] == 'Crefisa5') {
        const rates = [0.02455, 0.02372, 0.02349, 0.02334, 0.02297, 0.02283];
        const ratesPercentage = ['1.91%', '1.80%', '1.77%', '1.75%', '1.70%', '1.68%'];
        const cnt8 = document.getElementById('cnt4');
        let output = '';
      
        for (let i = 0; i < rates.length; i++) {
          const CrefisaValor = value5[0] / rates[i] - saldodDvedor5;
          const formattedParcela = Intl.NumberFormat('pt-BR', {
            maximumSignificantDigits: 6
          }).format(CrefisaValor);
  
          if (CrefisaValor >= 250.00) {
            output += `<br> Portabilidade ${value5[3]} Parcela de: ${value5[0]} Que libera aproximadamente ${formattedParcela} Em 84x. Tabela: na taxa de: ${ratesPercentage[i]}`;
          }
        }
      
        cnt8.innerHTML = output;
      
      }


  })
})
