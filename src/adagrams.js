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
    let hand = [];
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
  }

  // usesAvailableLetters(input, letterInHand){
  //   newLetters = letterInHand.map(letter)
  //   input.split("").forEach(letter);
  //   if (!newLetters).includes(letter)
  //   return false
  //   else if newLetters.includes(letter);
  //   index = newLetters.findIndex(letter);
  //   newLetters.deleteAt(index)
  // },
  // return true
};

// Do not remove this line or your tests will break!
export default Adagrams;
