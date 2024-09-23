//https://www.codewars.com/kata/5b6c220fa0a661fbf200005d/solutions/javascript
function scoreboard(string) {
  const numberWords = {
    nil: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  let words = string.toLowerCase().split(" ");

  let result = [];

  for (let word of words) {
    if (numberWords.hasOwnProperty(word)) {
      result.push(numberWords[word]);
    }

    if (result.length === 2) {
      break;
    }
  }

  return result;
}
