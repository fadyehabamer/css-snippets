const apiLocation = "https://disease.sh/v3/covid-19/all";

axios.get(apiLocation).then((response) => {
  let data = response.data;
  document.getElementById("confirmed").innerText = data.cases;
  document.getElementById("deathes").innerText = data.deaths;
  document.getElementById("recovered").innerText = data.recovered;
});