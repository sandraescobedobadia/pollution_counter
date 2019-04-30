function formatNumber(number) {
  return number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&.')
               .toString().slice(0, -3);
}

var secondsInYear = 60 * 60 * 24 * 365;
var hectaresInYear = 13000000;
var clothesInYear = 80000000000;
var plasticBagsInYear = 5000000000000;
var peopleInYear = 7000000;
var moneyInYear = 520000000000;

var hectaresInSecond = hectaresInYear / secondsInYear;
var clothesInSecond = clothesInYear / secondsInYear;
var plasticBagsInSecond = plasticBagsInYear / secondsInYear;
var peopleInSecond = peopleInYear / secondsInYear;
var moneyInSecond = moneyInYear / secondsInYear;

var hectaresInTotal = 0, clothesInTotal = 0, plasticBagsInTotal = 0;
var peopleInTotal = 0, moneyInTotal = 0;

var pollutionForNow = {
      hectares: document.getElementById("hectares"),
      clothes: document.getElementById("clothes"),
      plasticBags: document.getElementById("plasticBags"),
      people: document.getElementById("people"),
      money: document.getElementById("money")
    };
pollutionForNow.hectares.textContent = hectaresInTotal;
pollutionForNow.clothes.textContent = clothesInTotal;
pollutionForNow.plasticBags.textContent = plasticBagsInTotal;
pollutionForNow.people.textContent = peopleInTotal;
pollutionForNow.money.textContent = moneyInTotal;

setInterval(function() {
  hectaresInTotal += hectaresInSecond;
  pollutionForNow.hectares.textContent = formatNumber(hectaresInTotal);
  clothesInTotal += clothesInSecond;
  pollutionForNow.clothes.textContent = formatNumber(clothesInTotal);
  plasticBagsInTotal += plasticBagsInSecond;
  pollutionForNow.plasticBags.textContent = formatNumber(plasticBagsInTotal);
  peopleInTotal += peopleInSecond;
  pollutionForNow.people.textContent = formatNumber(peopleInTotal);
  moneyInTotal += moneyInSecond;
  pollutionForNow.money.textContent = formatNumber(moneyInTotal);
}, 1000);
