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
    //   SCORE_CHART: {
    //     A: 1,
    //     E: 1,
    //     I: 1,
    //     O: 1,
    //     U: 1,
    //     L: 1,
    //     N: 1,
    //     R: 1,
    //     S: 1,
    //     T: 1,
    //     D: 2,
    //     G: 2,
    //     B: 3,
    //     C: 3,
    //     M: 3,
    //     P: 3,
    //     F: 4,
    //     H: 4,
    //     V: 4,
    //     W: 4,
    //     Y: 4,
    //     K: 5,
    //     J: 8,
    //     X: 8,
    //     Q: 10,
    //     Z: 10,
    //
    //     LENGTH_BONUS: 8
    //   };

    const hand = [];
    let tilesDrawn = 0;

    while (tilesDrawn < 10) {
      let rand = letterPool[Math.floor(Math.random() * letterPool.length)];
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
  },
  SCORE_CHART: {
    A: 1,
    E: 1,
    I: 1,
    O: 1,
    U: 1,
    L: 1,
    N: 1,
    R: 1,
    S: 1,
    T: 1,
    D: 2,
    G: 2,
    B: 3,
    C: 3,
    M: 3,
    P: 3,
    F: 4,
    H: 4,
    V: 4,
    W: 4,
    Y: 4,
    K: 5,
    J: 8,
    X: 8,
    Q: 10,
    Z: 10
  },

  LENGTH_BONUS: 8,
  scoreWord(word) {
    return word
      .toUpperCase()
      .split("")
      .reduce((wordScore, letter) => {
        const letterScore = Adagrams.scoreCHART[letter];
        if (letterScore === undefined) {
          throw `${letter} is not in the English alphabet!`;
        }

        return wordScore + letterScore;
      }, word.length < 7 ? 0 : Adagrams.LENGTH_BONUS);
  }

  // switch (letters) {
  //   case ("A", "E", "I", "O", "U", "L", "N", "R", "S", "T"):
  //     wordScore += 1;
  //     break;
  //   case ("D", "G"):
  //     wordScore += 2;
  //     break;
  //   case ("B", "C", "M", "P"):
  //     wordScore += 3;
  //     break;
  //   case ("F", "H", "V", "W", "Y"):
  //     wordScore += 4;
  //     break;
  //   case "K":
  //     wordScore += 5;
  //     break;
  //   case ("J", "X"):
  //     wordScore += 8;
  //     break;
  //   case ("Q", "Z"):
  //     wordScore += 10;
  //     break;
  //   default:
  //     console.log("That is not a letter.");
  //     return wordScore
  // word_score += 8 if(7..10).includes?(word.length);
};

export default Adagrams;
