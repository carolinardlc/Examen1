function handleClick() {
  const tempStr = document.getElementById("temperatura").value;
  if (tempStr === undefined || tempStr.length === 0) {
    return;
  }

  const tempF = Number(tempStr);

  if (isNaN(tempF)) {
    return;
  }

  const tempC = calcularTempC(tempF);

  alert(`La temperatura calculada es ${tempC}`);
}

function calcularTempC(tempF) {
  return ((tempF - 32) * 5) / 9;
}
