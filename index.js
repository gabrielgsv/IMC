function formatNumber(number) {
  return parseFloat(number.toFixed(2)).toLocaleString("pt-br");
}

function handleClick() {
  const peso = +document.getElementById("peso").value;
  const altura = +document.getElementById("altura").value / 100;
  const resultado = document.getElementById("resultado");

  const imc = peso / (altura * altura);

  if (peso === 0 || altura === 0) {
    resultado.textContent = "Por favor, preencha todos os campos.";
  } else {
    if (imc <= 18.5) {
      resultado.textContent = `Seu IMC é ${formatNumber(imc)}\n Magreza`;
    } else if (imc > 18.5 && imc < 24.9) {
      resultado.textContent = `Seu IMC é ${formatNumber(imc)}\n Normal`;
    } else if (imc > 24.9 && imc <= 30) {
      resultado.textContent = `Seu IMC é ${formatNumber(imc)}\n Sobrepeso`;
    } else {
      resultado.textContent = `Seu IMC é ${formatNumber(imc)}\n Obesidade`;
    }
  }
}
