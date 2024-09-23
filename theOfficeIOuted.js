//https://www.codewars.com/kata/57ecf6efc7fe13eb070000e1/solutions/javascript

function outed(meet, boss) {
  let totalHappiness = 0;
  let numberOfPeople = 0;

  for (let member in meet) {
    totalHappiness += meet[member];
    numberOfPeople += 1;
  }

  totalHappiness += meet[boss];
  let averageHappiness = totalHappiness / numberOfPeople;

  return averageHappiness <= 5 ? "Get Out Now!" : "Nice Work Champ!";
}
