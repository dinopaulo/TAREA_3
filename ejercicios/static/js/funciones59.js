window.addEventListener('DOMContentLoaded', () => {
    let acumulado = 0;
    const resultadosDiv = document.getElementById('resultados');
  
    for (let i = 1; i <= 20; i++) {
      const numero = parseFloat(prompt(`Ingrese el valor numérico #${i}`));
      const retorno = numero * 3 + 5;
      acumulado += retorno;
  
      const numeroSpan = document.createElement('span');
      numeroSpan.classList.add('numero');
      numeroSpan.textContent = `Número: ${numero}`;
  
      const retornoSpan = document.createElement('span');
      retornoSpan.classList.add('retorno');
      retornoSpan.textContent = `Retorno: ${retorno}`;
  
      resultadosDiv.appendChild(numeroSpan);
      resultadosDiv.appendChild(document.createElement('br'));
      resultadosDiv.appendChild(retornoSpan);
      resultadosDiv.appendChild(document.createElement('br'));
      resultadosDiv.appendChild(document.createElement('br'));
    }
  
    const acumuladoSpan = document.createElement('span');
    acumuladoSpan.textContent = `Valor acumulado: ${acumulado}`;
    resultadosDiv.appendChild(acumuladoSpan);
  });
  