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
      "O"
    ];
    // Implement this method for wave 1
    let hand = [];
    let tilesDrawn = 0;
    let rand = letterPool[Math.floor(Math.random() * letterPool.length)];
    while (tilesDrawn < 10) {
      for (rand in letterPool) {
        hand.push(rand);
        tilesDrawn++;
      }
    }
    hand = hand.join();
  }
};
// Do not remove this line or your tests will break!
export default Adagrams;
