const Adagrams = {
  drawLetters() {
    let letterPool = [
      "A",
      "A",
      "A",
      "A",
      "A",
      "A",
      "A",
      "A",
      "A",
      "B",
      "B",
      "C",
      "C",
      "D",
      "D",
      "D",
      "D",
      "E",
      "E",
      "E",
      "E",
      "E",
      "E",
      "E",
      "E",
      "E",
      "E",
      "E",
      "E",
      "F",
      "F",
      "G",
      "G",
      "G",
      "H",
      "H",
      "I",
      "I",
      "I",
      "I",
      "I",
      "I",
      "I",
      "I",
      "I",
      "J",
      "K",
      "L",
      "L",
      "L",
      "L",
      "M",
      "M",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "O",
      "O",
      "O",
      "O",
      "O",
      "O",
      "O",
      "O",
      "P",
      "P",
      "Q",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "S",
      "S",
      "S",
      "S",
      "T",
      "T",
      "T",
      "T",
      "T",
      "T",
      "U",
      "U",
      "U",
      "U",
      "V",
      "V",
      "W",
      "W",
      "X",
      "Y",
      "Y",
      "Z"
    ];
    // Implement this method for wave 1
    const hand = [];
    let tilesDrawn = 0;
    // let rand = letterPool[Math.floor(Math.random() * letterPool.length)];
    while (tilesDrawn < 10) {
      // for (let i = 0; i < 10; i++) {
      let rand = letterPool[Math.floor(Math.random() * letterPool.length)];
      // if (rand > 0);
      // rand -= 1;
      hand.push(rand);
      tilesDrawn++;
    }
    return hand;
  },
  //   usesAvailableLetters(word, drawnLetters) {
  //     const letters = word.split("");
  //     const drawnCopy = drawnLetters.slice(0); // Create a copy of the drawn letters which we can modify
  //
  //     return letters.every(letter => {
  //       const index = drawnCopy.indexOf(letter);
  //       if (index === -1) return false;
  //
  //       delete drawnCopy[index];
  //       return true;
  //     });
  //   }
  // };
  usesAvailableLetters(input, hand) {
    const availableLetters = input.split("");
    const handCopy = hand.slice(0);

    return availableLetters.every(letter => {
      const index = handCopy.indexOf(letter);
      if (index === -1) return false;

      delete handCopy[index];
      return true;
    });
  }
};
 scoreWord(word)
  wordScore = 0
  letters = word.split("").toUpperCase;
  for(letter of letters){

  switch (letter) {
    case "A", "E", "I", "O", "U", "L", "N", "R", "S", "T":
    wordScore += 1
    break;
    case "D", "G":
    wordScore += 2
    break;
    case "B", "C", "M", "P":
    wordScore += 3
    break;
    case "F", "H", "V", "W", "Y":
    wordScore += 4
    break;
    case "K":
    wordScore += 5
    case "J", "X":
    wordScore += 8
    break;
    case "Q", "Z":
    wordScore += 10
    break;
    default:
    console.log("That is not a letter.");
  // word_score += 8 if(7..10).includes?(word.length);
  return word_score;
}}}

export default Adagrams;
