let ville = "Paris";
recevoirTemperature(ville);

let changerDeVille = document.querySelector('#changer');
changerDeVille.addEventListener('click', () => {
  ville = prompt('Quelle ville souhaiter vous voir?')
  recevoirTemperature(ville);
})

function recevoirTemperature(ville) {
const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + ville + '&appid=dc8c9152e8adaad0ec8bf635818c0d42&units=metric';

let requete = new XMLHttpRequest(); // Créer un objet
requete.open('GET', url); // Premier paramètre GET / POST, deuxième paramètr : url
requete.responseType = 'json'; // Nous attendons du JSON
requete.send(); // Nous envoyons notre requête

 requete.onload = function() {
    if (requete.readyState === XMLHttpRequest.DONE) {
      if (requete.status === 200) {
        let reponse = requete.response; // on stock la réponse
        let temperature = reponse.main.temp;
        let ville = reponse.name;
        document.querySelector('#temperature_label').textContent = temperature;
        document.querySelector('#ville').textContent = ville;
      }
      else {
        alert('Un problème est intervenu, merci de revenir plus tard.');
      }
    }
  }
}