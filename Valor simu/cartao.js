document.addEventListener("DOMContentLoaded", (event) => {
    const botao = document.getElementById("send2");
    const resultado = document.getElementById("resultado");
  
    botao.addEventListener("click", () => {
      const margem = parseFloat(document.getElementById("margem").value);
      const bancoSelecionado = document.getElementById("bancos1").value;
  
      if (isNaN(margem) || margem <= 0) {
        resultado.textContent = "Por favor, insira uma margem válida.";
        return;
      }
  
      if (bancoSelecionado === "selecionar") {
        resultado.textContent = "Por favor, selecione um banco válido.";
        return;
      }
  
      let multiplicador;
  
      switch (bancoSelecionado) {
        case "Bmg":
          multiplicador = 29.10;
          break;
        case "Banrisul":
          multiplicador = 32;
          break;
        case "Daycoval":
          multiplicador = 29.50;
          break;
        case "Pan":
          multiplicador = 28.70;
          break;
        case "Ole":
          multiplicador = 28;
          break;
        default:
          resultado.textContent = "Banco não reconhecido.";
          return;
      }
  
      const valorCalculado = margem * multiplicador * 0.70;
      resultado.textContent = `O valor calculado é: R$ ${valorCalculado.toFixed(2)}`;
    });
  });
  