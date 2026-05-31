async function getWeather() {
  // Obtendo a cidade que o usuário digitou
  let cidade = document.getElementById('cidade').value
  // Verficando se a ciade é real
  if (!cidade) {
    alert("Digite uma cidade!");
    return;
  }

  //https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
  //Tratando o consumo da API com fetch
  try {
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&lang=pt_br&appid=9e073c2eb83171abbc8a6969ce4e5e6b`;
    //Verficando se é ok
    const resp = await fetch(weatherUrl);
    if (!resp.ok) {
      throw new Error(`Response status: ${resp.status}`);
    }

    // Transformando a API em json
    const result = await resp.json();
    console.log(result.weather);

    const weatherInfos = document.getElementById('weatherResult');

    // Escrendo infos para o usuário ver.
    weatherInfos.innerHTML = `<h2>Cidade: </h2><p>${result.name}</p>
    <h2>Temperatura: </h2> <p>${result.main.temp}°C</p>
    <h2>Descrição: </h2> <p>${result.weather[0].description}</p>
    `;
  
    // Tratando erros
  } catch (error) {
    console.error(error.message);
  }
}