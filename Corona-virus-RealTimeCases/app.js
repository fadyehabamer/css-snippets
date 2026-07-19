const apiLocation = "https://api.covid19api.com/world/total";

axios.get(apiLocation).then((response) => {
  let data = response.data;
  document.getElementById("confirmed").innerText = data.TotalConfirmed;
  document.getElementById("deathes").innerText = data.TotalDeaths;
  document.getElementById("recovered").innerText = data.TotalRecovered;
});